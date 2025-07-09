
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CollisionRepair from "./pages/CollisionRepair";
import EmergencyTowing from "./pages/EmergencyTowing";
import ExoticRentals from "./pages/ExoticRentals";
import WrapsAndTints from "./pages/WrapsAndTints";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collision-repair" element={<CollisionRepair />} />
          <Route path="/emergency-towing" element={<EmergencyTowing />} />
          <Route path="/exotic-rentals" element={<ExoticRentals />} />
          <Route path="/wraps-and-tints" element={<WrapsAndTints />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
