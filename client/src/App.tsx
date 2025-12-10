import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Pages
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import FeaturesPage from "@/pages/FeaturesPage";
import ArchitecturePage from "@/pages/ArchitecturePage";
import TechStackPage from "@/pages/TechStackPage";
import TeamPage from "@/pages/TeamPage";
import DemoPage from "@/pages/DemoPage";
import ContactPage from "@/pages/ContactPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/features" component={FeaturesPage} />
      <Route path="/architecture" component={ArchitecturePage} />
      <Route path="/tech-stack" component={TechStackPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/demo" component={DemoPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
