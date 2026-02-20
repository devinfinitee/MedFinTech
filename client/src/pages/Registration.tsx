import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Award, CheckCircle, CreditCard, Loader2 } from "lucide-react";
import { PalmPayService, getSuccessUrl } from '@/lib/palmpay';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    attendeeType: '',
    ticketType: '',
    specialRequests: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegistration = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.ticketType) {
      alert('Please fill in all required fields marked with *');
      return;
    }

    setIsLoading(true);
    
    try {
      const pricing = PalmPayService.getTicketPricing();
      const ticketPricing = pricing[formData.ticketType as keyof typeof pricing];
      
      if (!ticketPricing) {
        throw new Error('Invalid ticket type selected');
      }

      const paymentResponse = await PalmPayService.initializePayment({
        amount: ticketPricing.amount,
        email: formData.email,
        phone: formData.phone,
        name: formData.name,
        itemType: `Conference Registration - ${formData.ticketType.charAt(0).toUpperCase() + formData.ticketType.slice(1)} Ticket`,
        redirectUrl: getSuccessUrl('ticket', formData.ticketType)
      });

      // Redirect to PalmPay payment page
      PalmPayService.redirectToPayment(paymentResponse.paymentUrl);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3 md:mr-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Register for MedFintech Conference 2026</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Welcome to the official registration page for MedFintech Conference 2026 — Africa's leading platform at the intersection of Medicine, Finance, and Technology. Due to limited venue capacity, early registration is strongly advised.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Why Register Section */}
            <div className="lg:col-span-1">
              <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Award className="w-6 h-6 mr-2" />
                    Why Register?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your registration grants you access to one of the most impactful healthcare innovation gatherings of the year.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Full access to all keynote sessions and panel discussions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Entry to innovation showcases and exhibition areas
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Participation in networking and collaboration sessions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Access to digital conference materials
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Official Certificate of Participation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Opportunities for internships, partnerships, and startup exposure
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Registration Form
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill in your personal and professional details accurately to complete your registration.
                  </p>
                </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name" 
                    value={formData.name.split(' ')[0] || ''}
                    onChange={(e) => {
                      const lastName = formData.name.split(' ').slice(1).join(' ');
                      handleInputChange('name', `${e.target.value} ${lastName}`.trim());
                    }}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name" 
                    value={formData.name.split(' ').slice(1).join(' ') || ''}
                    onChange={(e) => {
                      const firstName = formData.name.split(' ')[0] || '';
                      handleInputChange('name', `${firstName} ${e.target.value}`.trim());
                    }}
                    required 
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required 
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required 
                />
              </div>

              <div>
                <Label htmlFor="organization">Organization/Institution</Label>
                <Input 
                  id="organization" 
                  placeholder="Enter your organization or institution" 
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="attendeeType">Participant Category *</Label>
                <Select onValueChange={(value) => handleInputChange('attendeeType', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare Professional</SelectItem>
                    <SelectItem value="medical-student">Medical/Health Science Student</SelectItem>
                    <SelectItem value="business-student">Business/Finance/Economics Student</SelectItem>
                    <SelectItem value="tech-innovator">Technology Innovator/Developer</SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur/Startup Founder</SelectItem>
                    <SelectItem value="investor">Investor/Policymaker</SelectItem>
                    <SelectItem value="institutional">Institutional Leader</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="ticketType">Preferred Ticket Category *</Label>
                <Select onValueChange={(value) => handleInputChange('ticketType', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ticket category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Pass (₦10,000)</SelectItem>
                    <SelectItem value="general">General Admission (₦20,000)</SelectItem>
                    <SelectItem value="vip">VIP Access (₦35,000)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="specialRequests">Special Requests/Dietary Requirements</Label>
                <Textarea 
                  id="specialRequests" 
                  placeholder="Any dietary restrictions, accessibility needs, or special requests for the conference?"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-slate-700">Registration Process</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    Click the Register Now button below
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    Fill in your details accurately (as shown above)
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    Select your preferred ticket category
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    Complete payment (if applicable)
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                    Receive confirmation via email with registration ID
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Conference Details</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Date:</strong> Saturday, 7th March 2026</p>
                  <p><strong>Time:</strong> 9:00 AM - 4:00 PM</p>
                  <p><strong>Venue:</strong> The Assembly, Beside BON Hotel, Ogbomoso, Oyo State</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-amber-800">Important Notice</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Registration closes once venue capacity is reached</li>
                  <li>• Tickets are non-transferable</li>
                  <li>• Volunteers with confirmed vest payment are automatically registered</li>
                  <li>• Present confirmation (digital/printed) at venue for accreditation</li>
                </ul>
              </div>

              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleRegistration}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay with PalmPay - Register Now
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Secure your seat today and be part of the movement redefining the future of healthcare in Africa.
          </p>
        </div>
      </div>
    </div>
  );
}