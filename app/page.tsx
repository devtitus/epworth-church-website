import { Hero, Greetings, Find } from "@/app/sections/home/index"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Greetings />
      <Find />
    </div>
  );
}
