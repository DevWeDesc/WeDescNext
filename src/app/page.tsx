import Image from "next/image";
import { About } from ".././components/About/About";
import { Cases } from ".././components/Cases/Cases";
import { Coments } from ".././components/Coments/Coments";
import { DescriptionCarePlans } from ".././components/DescriptionCarePlans/DescriptionCarePlans";
import { Header } from ".././components/Header/Header";
import { SubHeader } from ".././components/SubHeader/SubHeader";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Partners } from "../components/Partners/Partners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <SubHeader />
      <About />
      <DescriptionCarePlans />
      <Cases />
      <Coments />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
