import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BadgeCheck, Zap, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[--trust-green]/20 bg-[--trust-green-light] px-4 py-1.5">
              <BadgeCheck className="h-4 w-4 text-[--trust-green]" />
              <span className="text-sm font-medium text-[--trust-green]">
                100% Verified Students
              </span>
            </div>
            
            <h1 className="text-pretty text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Direct Support,
              <br />
              <span className="text-[--trust-green]">Instant Impact.</span>
            </h1>
            
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Connect directly with verified African students. See exactly where your money goes. 
              Track real-time impact with complete transparency.
            </p>
            
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Button 
                size="lg" 
                className="bg-[--trust-green] px-8 text-base font-semibold text-white shadow-lg shadow-[--trust-green]/25 hover:bg-[--trust-green]/90"
              >
                Fund a Student
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base font-medium"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[--trust-green]" />
                <span className="text-sm font-medium text-muted-foreground">
                  Funds arrive in 24hrs
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[--trust-green]" />
                <span className="text-sm font-medium text-muted-foreground">
                  12 African countries
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-[--trust-green]" />
                <span className="text-sm font-medium text-muted-foreground">
                  Blockchain verified
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-foreground/10">
              <Image
                src="/images/hero-student.jpg"
                alt="African student studying in a bright modern library"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[--trust-green-light]">
                  <BadgeCheck className="h-5 w-5 text-[--trust-green]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2,847</p>
                  <p className="text-sm text-muted-foreground">Students funded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
