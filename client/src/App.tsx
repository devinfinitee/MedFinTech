import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Registration from "@/pages/Registration";
import Ticketing from "@/pages/Ticketing";
import Accommodation from "@/pages/Accommodation";
import EventDetails from "@/pages/EventDetails";
import MedxVerseAppLaunch from "@/pages/MedxVerseAppLaunch";
import Partnerships from "@/pages/Partnerships";
import SpecialGuests from "@/pages/SpecialGuests";
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentSuccessTest from "@/pages/PaymentSuccessTest";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/registration" component={Registration} />
      <Route path="/ticketing" component={Ticketing} />
      <Route path="/accommodation" component={Accommodation} />
      <Route path="/event-details" component={EventDetails} />
      <Route path="/medxverse-launch" component={MedxVerseAppLaunch} />
      <Route path="/partnerships" component={Partnerships} />
      <Route path="/special-guests" component={SpecialGuests} />
      <Route path="/payment-success" component={PaymentSuccess} />
      <Route path="/payment-success-test" component={PaymentSuccessTest} />
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
