import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Car, Phone, Mail, User, MapPin, Shield, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeInput, validateEmail, validatePhoneNumber, isRateLimited } from "@/utils/security";

const rentalFormSchema = z.object({
  // Personal Information with enhanced validation
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .refine(validateEmail, "Please enter a valid email format"),
  phone: z.string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .refine(validatePhoneNumber, "Please enter a valid US phone number"),
  
  // Rental Details with enhanced validation
  vehiclePreference: z.string()
    .min(1, "Please specify your vehicle preference")
    .max(200, "Vehicle preference must be less than 200 characters"),
  startDate: z.string().min(1, "Please select a start date"),
  endDate: z.string().min(1, "Please select an end date"),
  pickupLocation: z.string()
    .min(1, "Please specify pickup location")
    .max(200, "Pickup location must be less than 200 characters"),
  
  // Driver's License with enhanced validation
  licenseNumber: z.string()
    .min(5, "Please enter your driver's license number")
    .max(20, "License number is too long")
    .regex(/^[a-zA-Z0-9]+$/, "License number can only contain letters and numbers"),
  licenseState: z.string()
    .min(2, "Please enter your license state")
    .max(20, "License state is too long"),
  
  // Additional Services
  specialRequests: z.string()
    .max(1000, "Special requests must be less than 1000 characters")
    .optional(),
    
  // SMS Compliance and Optional Marketing Fields
  smsConsent: z.boolean().optional().default(false),
  emailOptional: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  offersOptIn: z.boolean().optional().default(false),
  newsletterOptIn: z.boolean().optional().default(false),
    
  // Honeypot field for bot detection
  website: z.string().max(0, "This field should be empty").optional(),
});

type RentalFormData = z.infer<typeof rentalFormSchema>;

interface ExoticRentalBookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExoticRentalBookingForm = ({ isOpen, onClose }: ExoticRentalBookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<RentalFormData>({
    resolver: zodResolver(rentalFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      vehiclePreference: "",
      startDate: "",
      endDate: "",
      pickupLocation: "",
      licenseNumber: "",
      licenseState: "",
      specialRequests: "",
      smsConsent: false,
      emailOptional: "",
      offersOptIn: false,
      newsletterOptIn: false,
      website: "", // Honeypot field
    },
  });

  const onSubmit = async (data: RentalFormData) => {
    // Check for bot submissions (honeypot)
    if (data.website) {
      toast({
        title: "Error",
        description: "Invalid submission detected.",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check
    const rateLimitKey = `rental-${data.email}`;
    if (isRateLimited(rateLimitKey, 60000)) { // 1 minute rate limit
      toast({
        title: "Please wait",
        description: "You can only submit one booking request per minute. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Submitting rental booking form:", data);
      
      // Sanitize all text inputs
      const sanitizedData = {
        ...data,
        firstName: sanitizeInput(data.firstName),
        lastName: sanitizeInput(data.lastName),
        vehiclePreference: sanitizeInput(data.vehiclePreference),
        pickupLocation: sanitizeInput(data.pickupLocation),
        licenseNumber: sanitizeInput(data.licenseNumber),
        licenseState: sanitizeInput(data.licenseState),
        specialRequests: data.specialRequests ? sanitizeInput(data.specialRequests) : undefined,
        smsConsent: data.smsConsent || false,
        emailOptional: data.emailOptional || "",
        offersOptIn: data.offersOptIn || false,
        newsletterOptIn: data.newsletterOptIn || false,
      };

      const { data: response, error } = await supabase.functions.invoke('send-rental-booking-email', {
        body: {
          ...sanitizedData,
          form: "Exotic Rental Booking Form"
        }
      });

      if (error) {
        console.error("Error submitting booking:", error);
        throw error;
      }

      console.log("Booking submitted successfully:", response);
      
      // Track Google Ads conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-17422213105/RENTAL_BOOKING_LABEL',
          'value': 1.0,
          'currency': 'USD'
        });
      }

      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you to confirm availability and finalize your booking.",
      });
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Error",
        description: "There was an issue with your booking request. Please call us directly at 305-419-8379.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-neon-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron font-bold text-white flex items-center gap-2">
            <Car className="text-neon-cyan" size={24} />
            Book Your Exotic Rental
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Fill out the form below to request your luxury vehicle rental. We'll contact you to confirm availability and finalize your booking.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-neon-green" size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                Request Sent Successfully!
              </h3>
              <p className="text-gray-300">
                We'll contact you to confirm availability and finalize your booking.
              </p>
            </div>
            <Button 
              onClick={handleClose}
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold"
            >
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <div className="hidden">
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (leave blank)</FormLabel>
                      <FormControl>
                        <Input {...field} tabIndex={-1} autoComplete="off" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Personal Information Section */}
              <div className="bg-card/50 rounded-lg p-4 border border-neon-purple/20">
                <h3 className="text-lg font-orbitron font-semibold text-neon-cyan mb-4 flex items-center gap-2">
                  <User size={18} />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            placeholder="Enter your first name"
                            maxLength={50}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            placeholder="Enter your last name"
                            maxLength={50}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white flex items-center gap-2">
                          <Mail size={16} />
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            placeholder="your@email.com"
                            maxLength={100}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white flex items-center gap-2">
                          <Phone size={16} />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            placeholder="(305) 123-4567"
                            maxLength={20}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Rental Details Section */}
              <div className="bg-card/50 rounded-lg p-4 border border-neon-purple/20">
                <h3 className="text-lg font-orbitron font-semibold text-neon-pink mb-4 flex items-center gap-2">
                  <Calendar size={18} />
                  Rental Details
                </h3>
                
                <FormField
                  control={form.control}
                  name="vehiclePreference"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-white">Vehicle Preference</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                          placeholder="e.g., Lamborghini, Ferrari, McLaren, or any luxury sports car"
                        />
                      </FormControl>
                      <FormDescription className="text-gray-400">
                        Let us know your preferred vehicle type or specific model
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Start Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">End Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="pickupLocation"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-white flex items-center gap-2">
                        <MapPin size={16} />
                        Pickup Location
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                          placeholder="Miami Beach, Downtown Miami, Airport, etc."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Driver's License Section */}
              <div className="bg-card/50 rounded-lg p-4 border border-neon-purple/20">
                <h3 className="text-lg font-orbitron font-semibold text-neon-purple mb-4 flex items-center gap-2">
                  <Shield size={18} />
                  Driver's License Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="licenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">License Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            placeholder="Your driver's license number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="licenseState"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">License State/Country</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                            placeholder="FL, NY, CA, etc."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Special Requests Section */}
              <div className="bg-card/50 rounded-lg p-4 border border-neon-purple/20">
                <h3 className="text-lg font-orbitron font-semibold text-neon-green mb-4">
                  Special Requests
                </h3>
                
                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan min-h-[100px]"
                          placeholder="Any special requests or additional information..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* SMS Compliance & Marketing Preferences */}
              <div className="bg-card/50 rounded-lg p-4 border border-neon-purple/20">
                <h3 className="text-lg font-orbitron font-semibold text-neon-blue mb-4 flex items-center gap-2">
                  <MessageSquare size={18} />
                  Communication Preferences
                </h3>
                
                {/* Optional Email Field */}
                <FormField
                  control={form.control}
                  name="emailOptional"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-white flex items-center gap-2">
                        <Mail size={16} />
                        Alternative Email (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-background border-neon-purple/30 text-white focus:border-neon-cyan"
                          placeholder="alternative@email.com"
                          maxLength={100}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-400">
                        Provide an alternative email for updates
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* SMS Consent Checkbox */}
                <FormField
                  control={form.control}
                  name="smsConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-4 pb-4 border-b border-neon-purple/20">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-white font-normal text-sm">
                          By checking this box, I agree to receive text messages from The Showroom Miami related to Appointment reminders, Vehicle inspection updates, Service confirmations at the phone number provided above. SMS frequency may vary. Data rates may apply. For assistance reply HELP. Reply STOP to opt out of receiving text messages. Please review our{" "}
                          <a 
                            href="/privacy-policy" 
                            target="_blank" 
                            className="text-neon-cyan hover:text-neon-pink underline"
                          >
                            Privacy Policy
                          </a>
                          {" "}and{" "}
                          <a 
                            href="/terms-of-service" 
                            target="_blank" 
                            className="text-neon-cyan hover:text-neon-pink underline"
                          >
                            Terms and Conditions
                          </a>
                          .
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Offers Opt-In Checkbox */}
                <FormField
                  control={form.control}
                  name="offersOptIn"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-white font-normal">
                          I would like to receive special offers and promotions (Optional)
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Newsletter Opt-In Checkbox */}
                <FormField
                  control={form.control}
                  name="newsletterOptIn"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-white font-normal">
                          Subscribe to our newsletter for updates and news (Optional)
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="flex-1 border-neon-purple/30 text-white hover:bg-neon-purple/20"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExoticRentalBookingForm;
