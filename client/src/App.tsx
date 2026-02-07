import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Booking from "@/pages/Booking";
import PassportBooking from "@/pages/PassportBooking";
import PassportPayment from "@/pages/PassportPayment";
import PassportSuccess from "@/pages/PassportSuccess";
import PassportSuccessTest from "@/pages/PassportSuccessTest";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/booking" component={Booking} />
      <Route path="/passport-booking" component={PassportBooking} />
      <Route path="/passport-payment" component={PassportPayment} />
      <Route path="/passport-success" component={PassportSuccess} />
      <Route path="/passport-success-test" component={PassportSuccessTest} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
