import Image from "next/image";
import Services from "./sections/Services/Services";
import Hero from "./sections/Hero/Hero"
import Team from "./sections/Team/Team"
import QuemSomos from "./sections/QuemSomos/QuemSomos"
import Testimonials from "./sections/Testimonials/Testimonials"
import Cta from "./components/Cta/Cta"
import Contact from "./sections/Contact/Contact";
import MapSection from "./sections/MapSection/MapSection";
export default function Home() {
  return (
    <div className=" bg-gray-50">
      <Hero />
      < QuemSomos />
      < Services />
      <Team />
      <Cta />
      <Testimonials />
      <Contact/>
      <MapSection />
    </div>
  );
}
