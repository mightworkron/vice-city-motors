
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEOHead from "@/components/SEOHead";
import { pageSEO } from "@/utils/seo";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead seoData={pageSEO.termsOfService} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">Terms and Conditions</span>
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-8 neon-border">
            <p className="text-sm text-neon-cyan mb-8 font-medium">
              Last Updated: November 17, 2025
            </p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Welcome to The Showroom Miami
                </h2>
                <p className="mb-4">
                  By accessing, browsing, or using this website (showroommiami.com) or any service offered by our company, you agree to these Terms and Conditions, as well as our{" "}
                  <a href="/privacy-policy" className="text-neon-pink hover:text-neon-cyan transition-colors">
                    Privacy Policy
                  </a>.
                </p>
                <p className="mb-3">These terms apply to all of our business divisions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Luxury and exotic car rentals</li>
                  <li>Vehicle buying and selling</li>
                  <li>Collision and repair services</li>
                  <li>Towing and roadside assistance</li>
                  <li>Tint, PPF, wraps, detailing services</li>
                  <li>Automotive financing services</li>
                  <li>Informational content and digital forms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  1. Website Operator Information
                </h2>
                <p className="mb-2"><strong className="text-white">The Showroom Miami</strong></p>
                <p className="mb-2">Location: Miami / Hallandale Beach, Florida</p>
                <p className="mb-4">General Email: <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">info@showroommiami.com</a></p>
                <p>
                  The Showroom Miami provides premium automotive services. We do not guarantee continuous availability of the website or of all services at all times.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  2. Use of the Website
                </h2>
                <p className="mb-3">By using this website, you agree that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>You will use it only for lawful purposes.</li>
                  <li>You will not attempt to access restricted areas, servers, or internal data.</li>
                  <li>You will not copy, reproduce, or reuse any content without written authorization.</li>
                  <li>You will not submit false, fraudulent, or incomplete information through forms.</li>
                </ul>
                <p>Any misuse of the website may result in access restrictions and potential legal action.</p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  3. Intellectual Property
                </h2>
                <p className="mb-3">
                  All content on this website, including photos, videos, logos, texts, descriptions, databases, and trademarks, is the exclusive property of The Showroom Miami.
                </p>
                <p className="mb-3"><strong className="text-white">Strictly prohibited:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Copying or downloading images without permission</li>
                  <li>Using our brand to promote other services</li>
                  <li>Reusing commercial or technical content without authorization</li>
                </ul>
                <p>Violation may result in legal action.</p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  4. Services Provided
                </h2>
                <p className="mb-6">
                  Each service offered by The Showroom Miami has its own specific terms. Clients must sign additional documents for rentals, collision, or vehicle sales.
                </p>

                <div className="space-y-6 ml-4">
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-neon-cyan mb-3">
                      4.1 Luxury Car Rentals
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Must meet age, license, and deposit requirements.</li>
                      <li>Availability is not guaranteed until the contract is signed and payment is completed.</li>
                      <li>Damages, fines, towing, or misuse are the client's responsibility.</li>
                      <li>Charges may apply for fuel, cleaning, late returns, mileage, and damages.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-neon-cyan mb-3">
                      4.2 Vehicle Buying and Selling
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Vehicles sold "AS-IS" without warranties unless stated otherwise.</li>
                      <li>Client responsible for inspections.</li>
                      <li>Deposits may be non-refundable.</li>
                      <li>Prices and availability may change.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-neon-cyan mb-3">
                      4.3 Collision, Repairs, PPF, Tint, and Technical Services
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Client authorizes diagnostics and repairs.</li>
                      <li>Times vary due to parts, insurance, or external factors.</li>
                      <li>OEM, aftermarket, or refurbished parts may be used.</li>
                      <li>Not responsible for insurance delays.</li>
                      <li>Storage fees may apply for extended stays.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-neon-cyan mb-3">
                      4.4 Towing and Roadside Assistance
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Arrival times are estimates.</li>
                      <li>Not responsible for delays caused by traffic or weather.</li>
                      <li>Pre-existing damages will be documented.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  5. Reservations and Payments
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prices subject to change.</li>
                  <li>Reservations subject to availability.</li>
                  <li>Payments may be non-refundable.</li>
                  <li>Client responsible for valid payment info.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  6. Forms, Contact, and Database Use
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Client authorizes contact via phone, SMS, WhatsApp, email.</li>
                  <li>Data stored in our CRM.</li>
                  <li>We do not sell personal data.</li>
                  <li>Database remains exclusive property of The Showroom Miami.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  7. SMS Terms & Conditions
                </h2>
                <p className="mb-6">
                  By providing your phone number to The Showroom Miami, you consent to receive SMS communications related to our services, including collision assistance, rental updates, towing coordination, insurance updates, and customer service information. Message frequency varies. Message and data rates may apply.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">1. SMS Consent Communication</h3>
                    <p className="mb-4">
                      Mobile opt-in or phone numbers for the purpose of SMS are not being shared with any third party and affiliate company for marketing purposes.
                    </p>
                    <p>
                      Your information will be used solely for operational communication related to The Showroom Miami services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">2. Types of SMS Communications</h3>
                    <p className="mb-3">If you consent to receive SMS messages, you may receive communications such as:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li>Appointment reminders</li>
                      <li>Vehicle inspection updates</li>
                      <li>Service confirmations</li>
                    </ul>
                    <p className="italic text-gray-400">
                      Example: "Hello, this is a reminder of your upcoming appointment with The Showroom Miami. Reply STOP to opt-out at any time."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">3. Message Frequency</h3>
                    <p className="mb-3">
                      Message frequency may vary depending on the type of communication. For example, you may receive up to 2–5 messages per week depending on your active service with us.
                    </p>
                    <p className="italic text-gray-400">
                      Example: "You may receive up to 2 SMS messages per week regarding your appointment or account status."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">4. Potential Fees for SMS Messaging</h3>
                    <p>
                      Standard message and data rates may apply depending on your mobile carrier and plan. Fees may vary for domestic or international messaging.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">5. Opt-In Methods</h3>
                    <p>Customers may opt in to receive SMS by filling out a website form.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">6. Opt-Out Instructions</h3>
                    <p className="mb-3">
                      You may opt out of SMS messages at any time by replying <strong className="text-white">STOP</strong> to any message.
                      To receive help, reply <strong className="text-white">HELP</strong>.
                    </p>
                    <p>
                      You may also contact us directly at{" "}
                      <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                        info@showroommiami.com
                      </a>{" "}
                      to request removal from our messaging list.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">7. Help</h3>
                    <p className="mb-3">
                      For any issues, reply with the keyword <strong className="text-white">HELP</strong>. Alternatively, help can be obtained directly from us at{" "}
                      <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                        info@showroommiami.com
                      </a>
                    </p>
                    <p className="font-semibold text-neon-cyan mb-2">Additional Options:</p>
                    <p>If SMS messages are not desired, the SMS consent box on forms can be left unchecked.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">8. Standard Messaging Disclosures</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Message and data rates may apply.</li>
                      <li>Opt out at any time by texting "STOP."</li>
                      <li>For assistance, text "HELP" or visit our{" "}
                        <a href="/privacy-policy" className="text-neon-pink hover:text-neon-cyan transition-colors">
                          Privacy Policy
                        </a>
                        {" "}and{" "}
                        <a href="/terms-of-service" className="text-neon-pink hover:text-neon-cyan transition-colors">
                          Terms and Conditions
                        </a>
                        {" "}pages.
                      </li>
                      <li>Message frequency may vary.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">9. Sample SMS Messages</h3>
                    <p className="mb-4">
                      Below are examples of typical SMS messages our team sends. Each message includes opt-out language as required by carriers.
                    </p>
                    <div className="space-y-4 ml-4">
                      <div className="border-l-2 border-neon-cyan/50 pl-4">
                        <p className="font-semibold text-neon-cyan mb-2">Example #1</p>
                        <p className="italic text-gray-400">
                          "What time will you be coming to inspect the vehicle? —The Showroom Miami. Reply STOP to opt-out."
                        </p>
                      </div>
                      <div className="border-l-2 border-neon-cyan/50 pl-4">
                        <p className="font-semibold text-neon-cyan mb-2">Example #2</p>
                        <p className="italic text-gray-400">
                          "Thank you for calling, we are unable to answer right now. Can I help you via chat? If not, please await a return call. —The Showroom Miami. Reply STOP to opt-out."
                        </p>
                      </div>
                      <div className="border-l-2 border-neon-cyan/50 pl-4">
                        <p className="font-semibold text-neon-cyan mb-2">Example #3</p>
                        <p className="italic text-gray-400">
                          "This is Jon with The Showroom Miami, we are awaiting a response from insurance. We will call shortly to confirm approvals. —The Showroom Miami. Reply STOP to opt-out."
                        </p>
                      </div>
                      <div className="border-l-2 border-neon-cyan/50 pl-4">
                        <p className="font-semibold text-neon-cyan mb-2">Example #4</p>
                        <p className="italic text-gray-400">
                          "Your vehicle estimate is now ready. Please reply YES to confirm or call us at 305-419-8379. —The Showroom Miami. Reply STOP to opt-out."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">10. Privacy and Data Handling</h3>
                    <p>
                      All SMS data is handled in accordance with our{" "}
                      <a href="/privacy-policy" className="text-neon-pink hover:text-neon-cyan transition-colors">
                        Privacy Policy
                      </a>{" "}
                      and applicable federal and state regulations. Your information is stored securely and used only for communication regarding services provided by The Showroom Miami.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-pink mb-3">11. Contact</h3>
                    <p className="mb-2">If you have questions regarding SMS compliance or need support, please contact us at:</p>
                    <div className="ml-4 space-y-2">
                      <p>
                        📧 Email:{" "}
                        <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                          info@showroommiami.com
                        </a>
                      </p>
                      <p>📍 Address: 7820 NW 6th Ct, Miami, FL 33150, United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  8. Third-Party Links
                </h2>
                <p>
                  The Showroom Miami is not responsible for external site content or privacy practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  9. Limitation of Liability
                </h2>
                <p>
                  Not liable for indirect damages, website interruptions, misuse of services, or outdated information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  10. Modifications
                </h2>
                <p>
                  Terms may be updated at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  11. Governing Law
                </h2>
                <p>
                  Governed by the laws of Florida. Disputes handled in Miami-Dade or Broward County.
                </p>
              </div>

              <div className="pt-8 border-t border-neon-purple/30">
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  12. Legal Contact
                </h2>
                <p className="mb-4">
                  For questions about these Terms, please contact:
                </p>
                <div className="space-y-2 mb-6">
                  <p>
                    Email:{" "}
                    <a href="mailto:legal@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                      legal@showroommiami.com
                    </a>
                  </p>
                  <p>Subject: "Terms and Conditions Inquiry – The Showroom Miami"</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-neon-purple/20">
                  <p className="font-medium text-neon-cyan">General Contact Information:</p>
                  <p className="font-medium text-white">The Showroom Miami</p>
                  <p>7820 NW 6th Ct, Miami, Florida</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:305-419-8379" className="text-neon-pink hover:text-neon-cyan transition-colors">
                      305-419-8379
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                      info@showroommiami.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default TermsOfService;
