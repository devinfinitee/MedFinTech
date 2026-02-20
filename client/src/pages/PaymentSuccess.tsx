import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MapPin, Mail, Phone, Download, Home } from "lucide-react";
import { PalmPayService } from '@/lib/palmpay';

export default function PaymentSuccess() {
  const [location, setLocation] = useLocation();
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Extract query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('reference');
    const type = urlParams.get('type');
    const item = urlParams.get('item');

    if (reference) {
      verifyPayment(reference, type, item);
    } else {
      setIsVerifying(false);
    }
  }, [location]);

  const verifyPayment = async (reference: string, type: string | null, item: string | null) => {
    try {
      const verification = await PalmPayService.verifyPayment(reference);
      setPaymentDetails({ ...verification, type, item });
    } catch (error) {
      console.error('Payment verification error:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleDownloadReceipt = () => {
    // In a real implementation, this would generate and download a PDF receipt
    alert('Receipt download functionality would be implemented here');
  };

  const getSuccessMessage = () => {
    if (paymentDetails?.type === 'ticket') {
      return {
        title: 'Conference Registration Successful!',
        subtitle: 'Your ticket for MEDFINTECH CONFERENCE 2026 has been confirmed',
        details: 'You will receive a confirmation email with your digital ticket and access instructions.'
      };
    } else if (paymentDetails?.type === 'accommodation') {
      return {
        title: 'Hotel Booking Confirmed!',
        subtitle: 'Your accommodation reservation has been successfully processed',
        details: 'The hotel will contact you directly with check-in instructions and confirmation details.'
      };
    } else {
      return {
        title: 'Payment Successful!',
        subtitle: 'Your transaction has been completed successfully',
        details: 'Thank you for your payment. You will receive a confirmation email shortly.'
      };
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className="text-lg">Verifying your payment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const message = getSuccessMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-2">{message.title}</h1>
          <p className="text-xl text-green-700 mb-4">{message.subtitle}</p>
          <p className="text-muted-foreground">{message.details}</p>
        </div>

        {paymentDetails && paymentDetails.verified && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Amount Paid</p>
                  <p className="text-lg font-semibold">₦{(paymentDetails.amount / 100).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Transaction Reference</p>
                  <p className="text-lg font-mono">{paymentDetails.reference}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customer Name</p>
                  <p className="text-lg">{paymentDetails.customer?.name || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-lg">{paymentDetails.customer?.email || 'N/A'}</p>
                </div>
              </div>
              
              {paymentDetails.type === 'ticket' && (
                <div className="bg-primary/5 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Conference Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> March 7, 2026</p>
                    <p><strong>Venue:</strong> The Assembly, Ogbomoso, Oyo State</p>
                    <p><strong>Time:</strong> 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentDetails?.type === 'ticket' ? (
                <>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <p className="text-sm">Check your email for the digital ticket and QR code</p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <p className="text-sm">Save the confirmation email and present it at the venue</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <p className="text-sm">Arrive at The Assembly, Ogbomoso by 8:30 AM for registration</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <p className="text-sm">Hotel will contact you within 24 hours for confirmation</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <p className="text-sm">Keep your phone accessible for hotel communication</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleDownloadReceipt}
            className="flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Receipt
          </Button>
          <Button 
            size="lg" 
            onClick={() => setLocation('/')}
            className="flex items-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Need Support?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions or concerns about your payment or booking, please contact us.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> contact@medxverseapp.com</p>
                <p><strong>Phone:</strong> 09160965661 | 09033235676</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}