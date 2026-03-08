import { Hero } from "@/app/sections/home/index"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-secondary-background sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
