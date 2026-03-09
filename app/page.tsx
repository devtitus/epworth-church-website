import { Hero, Greetings, Find, About, Ministry } from "@/app/sections/home/index"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greetings />
      <About />
      <Find />
      <Ministry />
    </div>
  );
}
