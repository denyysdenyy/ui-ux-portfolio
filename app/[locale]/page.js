import Hero from "@/сomponents/Hero";
import Works from "@/сomponents/Works/Works";
import { getWorks } from "@/sanity/queries";
import Benefits from "@/сomponents/Benefits";
import Memes from "@/сomponents/Memes";
import Queston from "@/сomponents/Question";
export default async function Home() {
  const works = await getWorks();
  return (
    <>
      <Hero />
      {/* <Benefits /> */}
      {/* <Memes /> */}
      {/* <Works works={works} /> */}
      <Queston />
    </>
  );
}
