import { Hero, Greetings, Find, About, Ministry } from "@/app/sections/home/index";
import { Contact } from "@/components/layout/index";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greetings />
      <About />
      <Ministry />
      <Find />
      <Contact />
    </div>
  );
}
