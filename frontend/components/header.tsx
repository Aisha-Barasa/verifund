import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[--trust-green]">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            VeriFund
          </span>
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link 
            href="#students" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Students
          </Link>
          <Link 
            href="#impact" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Our Impact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden text-sm font-medium sm:inline-flex">
            Log In
          </Button>
          <Button className="bg-[--trust-green] text-white hover:bg-[--trust-green]/90">
            Start Giving
          </Button>
        </div>
      </div>
    </header>
  )
}
