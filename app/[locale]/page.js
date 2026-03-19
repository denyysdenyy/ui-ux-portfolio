import Hero from "@/сomponents/Hero";
import Works from "@/сomponents/Works/Works";
import { getWorks } from "@/sanity/queries";
import Benefits from "@/сomponents/Benefits";
export default async function Home() {
  const works = await getWorks();
  return (
    <>
      <Hero />
      <Benefits />
      <Works works={works} />
    </>
  );
}
