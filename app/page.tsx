import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Specialty } from "@/components/sections/Specialty";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Specialty />
      <ContactForm />
    </>
  );
}