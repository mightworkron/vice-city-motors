
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Car, Phone, Mail, User, MapPin, Clock, Shield } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

const rentalFormSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  
  // Rental Details
  vehiclePreference: z.string().min(1, "Please specify your vehicle preference"),
  startDate: z.string().min(1, "Please select a start date"),
  endDate: z.string().min(1, "Please select an end date"),
  pickupLocation: z.string().min(1, "Please specify pickup location"),
  
  // Driver's License
  licenseNumber: z.string().min(5, "Please enter your driver's license number"),
  licenseState: z.string().min(2, "Please enter your license state"),
  
  // Additional Services
  needsDelivery: z.boolean().default(false),
  specialRequests: z.string().optional(),
});

type RentalFormData = z.infer<typeof rentalFormSchema>;

interface ExoticRentalBookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExoticRentalBookingForm = ({ isOpen, onClose }: ExoticRentalBookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      needsDelivery: false,
      specialRequests: "",
    },
  });

  const onSubmit = async (data: RentalFormData) => {
    setIsSubmitting(true);
    
    try {
      // Since we don't have a backend, we'll create a mailto link with the form data
      const subject = encodeURIComponent("Exotic Rental Booking Request");
      const body = encodeURIComponent(`
New Exotic Rental Booking Request:

PERSONAL INFORMATION:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

RENTAL DETAILS:
Vehicle Preference: ${data.vehiclePreference}
Start Date: ${data.startDate}
End Date: ${data.endDate}
Pickup Location: ${data.pickupLocation}

DRIVER'S LICENSE:
License Number: ${data.licenseNumber}
License State: ${data.licenseState}

ADDITIONAL SERVICES:
Delivery Service: ${data.needsDelivery ? "Yes" : "No"}
Special Requests: ${data.specialRequests || "None"}

Please contact me to confirm availability and finalize the booking.
      `);
      
      const mailtoLink = `mailto:info@showroommiami.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Booking Request Submitted!",
        description: "Your booking request has been prepared. Please check your email client to send it.",
      });
      
      form.reset();
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue with your booking request. Please call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            {/* Additional Services Section */}
            <div className="bg-card/50 rounded-lg p-4 border border-neon-purple/20">
              <h3 className="text-lg font-orbitron font-semibold text-neon-green mb-4 flex items-center gap-2">
                <Clock size={18} />
                Additional Services
              </h3>
              
              <FormField
                control={form.control}
                name="needsDelivery"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-4">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="mt-1 accent-neon-cyan"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        White-glove delivery and pickup service
                      </FormLabel>
                      <FormDescription className="text-gray-400">
                        We'll deliver the vehicle to your location and pick it up when you're done
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

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

            <div className="flex gap-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
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
      </DialogContent>
    </Dialog>
  );
};

export default ExoticRentalBookingForm;
