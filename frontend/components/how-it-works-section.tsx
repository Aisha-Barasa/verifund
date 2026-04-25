import { Search, CreditCard, Bell, Heart } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Verified Students",
    description: "Explore profiles of university-verified students with real needs and goals.",
  },
  {
    icon: CreditCard,
    title: "Give Directly",
    description: "Your contribution goes straight to the student's verified account—no platform fees.",
  },
  {
    icon: Bell,
    title: "Track Progress",
    description: "Get real-time updates on how your support is making a difference.",
  },
  {
    icon: Heart,
    title: "See the Impact",
    description: "Receive graduation updates, thank-you notes, and success stories.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[--trust-green]">
            Simple & Transparent
          </span>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How VeriFund Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We&apos;ve removed every barrier between you and the students you support. 
            No overhead, no uncertainty—just direct impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-px w-full bg-border lg:block" />
              )}
              
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[--trust-green-light]">
                <step.icon className="h-8 w-8 text-[--trust-green]" />
                <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[--trust-green] text-xs font-bold text-white">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
