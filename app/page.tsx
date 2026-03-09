import { Hero, Greetings, Find, About } from "@/app/sections/home/index"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greetings />
      <About />
      <Find />
    </div>
  );
}
