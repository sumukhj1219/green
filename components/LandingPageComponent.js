"use client"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/GREEN-SCENERY.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/40 to-black/30" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-between px-6 lg:px-16">
        <div className="max-w-2xl space-y-6">
          <h1 
            className="font-sans text-5xl font-bold tracking-wide text-white uppercase sm:text-7xl lg:text-8xl"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontFamily: 'Oswald, sans-serif',
            }}
          >
            GROWTHFUND
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Empowering communities to grow together. Join us in creating a sustainable future through collective action.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg"
              className="bg-transparent text-white border-2 border-white rounded-none hover:bg-white hover:text-green-900 transition-colors duration-300 text-lg"
            >
              Start a Project
            </Button>
            <Button 
              size="lg"
              className="bg-transparent text-white border-2 border-white rounded-none hover:bg-white hover:text-green-900 transition-colors duration-300 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}



