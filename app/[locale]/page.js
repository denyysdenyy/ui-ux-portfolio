import Hero from "@/сomponents/Hero";
import Works from "@/сomponents/Works/Works";
import { getWorks } from "@/sanity/queries";
import Benefits from "@/сomponents/Benefits";
import Memes from "@/сomponents/Memes";
import Question from "@/сomponents/Question";
import Reviews from "@/сomponents/Reviews";
import Contacts from "@/сomponents/Contacts";
import Footer from "@/сomponents/Footer";
export default async function Home() {
  const works = await getWorks();
  return (
    <>
      <Hero />
      <Benefits />
      <Memes />
      <Works works={works} />
      <Question />
      <Reviews />
      <Contacts />
      <Footer />
    </>
  );
}
