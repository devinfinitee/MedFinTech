import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Award, CheckCircle, Loader2, AlertCircle, Calendar, MapPin, Clock } from "lucide-react";
import { PaystackService, getSuccessUrl } from '@/lib/paystack';
import paystackLogo from "../assets/paystack.PNG";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      const pricing = PaystackService.getTicketPricing();
      const ticketPricing = pricing[formData.ticketType as keyof typeof pricing];

      if (!ticketPricing) {
        throw new Error('Invalid ticket type selected');
      }

      const paymentResponse = await PaystackService.initializePayment({
        amount: ticketPricing.amount,
        email: formData.email,
        phone: formData.phone,
        name: formData.name,
        itemType: `Conference Registration - ${formData.ticketType.charAt(0).toUpperCase() + formData.ticketType.slice(1)} Ticket`,
        redirectUrl: getSuccessUrl('ticket', formData.ticketType)
      });

      PaystackService.redirectToPayment(paymentResponse.paymentUrl);
    } catch {
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Full access to all keynote sessions and panel discussions",
    "Entry to innovation showcases and exhibition areas",
    "Participation in networking and collaboration sessions",
    "Access to digital conference materials",
    "Official Certificate of Participation",
    "Opportunities for internships, partnerships, and startup exposure",
  ];

  const steps = [
    "Fill in your personal and professional details",
    "Select your participant category",
    "Choose your preferred ticket type",
    "Complete payment via PalmPay",
    "Receive email confirmation with your registration ID",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-24">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 scale-in">
            <UserPlus className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate stagger-1">Register for MedFintech Conference 2026</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 scroll-animate stagger-2">
            Africa's leading platform at the intersection of Medicine, Finance, and Technology. Secure your seat — venue capacity is strictly limited.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-400 scroll-animate stagger-3">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><strong className="text-slate-200">7th March 2026</strong></span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><strong className="text-slate-200">9:00 AM – 4:00 PM</strong></span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /><strong className="text-slate-200">The Assembly, Ogbomoso</strong></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 slide-left">

              {/* Benefits card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-slate-900">What You Get</h3>
                </div>
                <ul className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-slate-900 mb-4">How It Works</h3>
                <ol className="space-y-3">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Notice card */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <h3 className="font-bold text-amber-800 text-sm">Important Notice</h3>
                </div>
                <ul className="text-xs text-amber-700 space-y-1.5">
                  <li>• Registration closes once venue capacity is reached</li>
                  <li>• Tickets are non-transferable</li>
                  <li>• Volunteers with confirmed vest payment are automatically registered</li>
                  <li>• Present confirmation (digital/printed) at the venue for accreditation</li>
                </ul>
              </div>

            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2 slide-right">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Registration Form</h2>
                <p className="text-sm text-slate-500 mb-6">Fields marked with <span className="text-red-500">*</span> are required.</p>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.name.split(' ')[0] || ''}
                        onChange={(e) => {
                          const lastName = formData.name.split(' ').slice(1).join(' ');
                          handleInputChange('name', `${e.target.value} ${lastName}`.trim());
                        }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.name.split(' ').slice(1).join(' ') || ''}
                        onChange={(e) => {
                          const firstName = formData.name.split(' ')[0] || '';
                          handleInputChange('name', `${firstName} ${e.target.value}`.trim());
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                    <Input
                      id="phone"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="organization">Organization / Institution</Label>
                    <Input
                      id="organization"
                      placeholder="Hospital, university, company, etc."
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Participant Category <span className="text-red-500">*</span></Label>
                    <Select onValueChange={(value) => handleInputChange('attendeeType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare Professional</SelectItem>
                        <SelectItem value="medical-student">Medical / Health Science Student</SelectItem>
                        <SelectItem value="business-student">Business / Finance / Economics Student</SelectItem>
                        <SelectItem value="tech-innovator">Technology Innovator / Developer</SelectItem>
                        <SelectItem value="entrepreneur">Entrepreneur / Startup Founder</SelectItem>
                        <SelectItem value="investor">Investor / Policymaker</SelectItem>
                        <SelectItem value="institutional">Institutional Leader</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Ticket Type <span className="text-red-500">*</span></Label>
                    <Select onValueChange={(value) => handleInputChange('ticketType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student General Admission — ₦1,000</SelectItem>
                        <SelectItem value="general">General Admission — ₦5,000</SelectItem>
                        <SelectItem value="vip">VIP Access — ₦15,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="specialRequests">Special Requests / Dietary Requirements</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any dietary restrictions, accessibility needs, or special requests?"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <button
                    onClick={handleRegistration}
                    disabled={isLoading}
                    className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-green-500 to-primary bg-[length:200%_100%] hover:bg-right-center transition-all duration-500 shadow-lg hover:shadow-primary/40 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-between px-5 py-4">
                      {isLoading ? (
                        <div className="flex items-center gap-2 mx-auto text-white font-semibold text-sm">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing…
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-lg p-1.5">
                              <img src={paystackLogo} alt="Paystack" className="w-5 h-5 object-contain" />
                            </div>
                            <span className="text-white font-bold text-sm">Pay with Paystack</span>
                          </div>
                          <span className="bg-white/20 text-white font-extrabold text-sm px-3 py-1 rounded-lg">Register Now →</span>
                        </>
                      )}
                    </div>
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    Secure your seat today and be part of the movement redefining the future of healthcare in Africa.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}