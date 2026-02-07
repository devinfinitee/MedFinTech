import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/locations";

interface PassportOrder {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  duration: "5" | "10";
  pages: "32" | "64";
  base: number;
  fastTrackFee: number;
  total: number;
}

const API_BASE_URL = import.meta.env.DEV ? "http://localhost:3000" : "";

export default function PassportPayment() {
  const [order, setOrder] = useState<PassportOrder | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const stored = sessionStorage.getItem("aircambridge-passport-order");
    if (!stored) {
      setLocation("/passport-booking");
      return;
    }

    try {
      const parsed: PassportOrder = JSON.parse(stored);
      setOrder(parsed);
    } catch {
      setLocation("/passport-booking");
    }
  }, [setLocation]);

  const handlePay = () => {
    if (!order) return;

    setIsPaying(true);

    const initPayment = async () => {
      try {
        const txRef = `AC-PASS-${Date.now()}`;
        const redirectUrl = `${window.location.origin}/passport-success`; // Paystack will redirect back here

        const response = await fetch(`${API_BASE_URL}/api/init-paystack`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: order.total,
            currency: "NGN",
            email: order.email,
            phone: order.phone,
            name: order.fullName,
            txRef,
            redirectUrl,
          }),
        });

        if (!response.ok) {
          const err = await response.json().catch(() => ({}));
          throw new Error(err.error || "Failed to initialize payment");
        }

        const data = await response.json();
        const authorizationUrl = data.authorization_url as string | undefined;

        if (!authorizationUrl) {
          throw new Error("Payment authorization URL not returned by server");
        }

        // Redirect user to Paystack hosted payment page
        window.location.href = authorizationUrl;
      } catch (error) {
        console.error("Paystack init error", error);
        setIsPaying(false);
        toast({
          title: "Payment Error",
          description: error instanceof Error ? error.message : "Unable to initiate payment. Please try again.",
          variant: "destructive",
        });
      }
    };

    void initPayment();
  };

  if (!order) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8 text-center space-y-2">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary">Passport Express</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">Complete Payment</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Review your order details and pay securely via Paystack.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="space-y-1">
              <p><span className="font-medium">Name:</span> {order.fullName}</p>
              <p><span className="font-medium">Email:</span> {order.email}</p>
              <p><span className="font-medium">Phone:</span> {order.phone}</p>
              {order.dateOfBirth && (
                <p>
                  <span className="font-medium">Date of Birth:</span>{" "}
                  {order.dateOfBirth}
                </p>
              )}
              <p>
                <span className="font-medium">Passport Type:</span>{" "}
                {order.duration} years, {order.pages} pages
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-muted/40 space-y-1">
              <p>
                <span className="font-medium">Base fee:</span> {formatCurrency(order.base, "NGN")}
              </p>
              <p>
                <span className="font-medium">Fast tracking, registration, processing & logistics:</span>{" "}
                {formatCurrency(order.fastTrackFee, "NGN")}
              </p>
              <p className="font-semibold text-primary text-base mt-1">
                Total to pay: {formatCurrency(order.total, "NGN")}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 pt-2">
              <Button
                className="w-full md:flex-1"
                size="lg"
                onClick={handlePay}
                disabled={isPaying}
              >
                {isPaying ? "Processing..." : "Pay with Paystack"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full md:w-auto"
                onClick={() => setLocation("/passport-booking")}
                disabled={isPaying}
              >
                Edit Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
