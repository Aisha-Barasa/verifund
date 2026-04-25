import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, MapPin, GraduationCap } from "lucide-react"

interface StudentCardProps {
  name: string
  image: string
  university: string
  country: string
  need: string
  raised: number
  goal: number
  daysLeft: number
  isUrgent?: boolean
}

export function StudentCard({
  name,
  image,
  university,
  country,
  need,
  raised,
  goal,
  daysLeft,
  isUrgent = false,
}: StudentCardProps) {
  const progress = (raised / goal) * 100

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5">
      {/* Lightning Fast Badge */}
      {isUrgent && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-[--trust-green] px-2.5 py-1 shadow-md">
          <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
          <span className="text-xs font-semibold text-white">Lightning Fast</span>
        </div>
      )}

      {/* Student Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${name}, student at ${university}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm font-medium">{country}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <div className="mt-1 flex items-center gap-1.5 text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm">{university}</span>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {need}
        </p>

        {/* Progress Section */}
        <div className="mb-4">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <span className="text-lg font-bold text-foreground">${raised}</span>
              <span className="text-sm text-muted-foreground"> raised</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              ${goal} goal
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-[--trust-green-light]">
            <div
              className="h-full rounded-full bg-[--trust-green] transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{Math.round(progress)}% funded</span>
            <span>{daysLeft} days left</span>
          </div>
        </div>

        <Button className="w-full bg-[--trust-green] font-semibold text-white hover:bg-[--trust-green]/90">
          Support {name.split(" ")[0]}
        </Button>
      </div>
    </div>
  )
}
