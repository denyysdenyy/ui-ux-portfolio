import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { getWorks } from "@/sanity/queries";
import Question from "@/components/Question";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Benefits = dynamic(() => import("@/components/Benefits"));
const Memes = dynamic(() => import("@/components/Memes"));
const Works = dynamic(() => import("@/components/Works/Works"));
export default async function Home() {
  const works = await getWorks();
  return (
    <>
      <Hero />
      <main id="main">
        <Benefits />
        <Memes />
        <Works works={works} />
        <Question />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
