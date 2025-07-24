import { Navbar } from "@/src/components/navbar";
import { Hero } from "../components/hero";
import Page from "../components/sparkles-logo";
import {Features} from "../components/features"
import Pricing from "../components/pricing";
import Footer from "../components/footer";
import Faq from "../components/faq";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Page />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
