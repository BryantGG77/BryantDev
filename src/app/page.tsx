import AboutUs from "@/components/AboutUs/AboutUs";
import { Header } from "../components/Header/header";
import { CounterData } from "@/components/CounterData";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { PaymentsMethods } from "@/components/PaymentMethods";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <CounterData />
      <Services />
      <Testimonials />
      <PaymentsMethods />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}

