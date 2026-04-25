import { StudentCard } from "@/components/student-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter } from "lucide-react"

const students = [
  {
    name: "Amara Okonkwo",
    image: "/images/student-1.jpg",
    university: "University of Lagos",
    country: "Nigeria",
    need: "Final year tuition fees to complete Computer Science degree and land a tech internship.",
    raised: 1280,
    goal: 1500,
    daysLeft: 12,
    isUrgent: true,
  },
  {
    name: "David Mensah",
    image: "/images/student-2.jpg",
    university: "University of Ghana",
    country: "Ghana",
    need: "Medical textbooks and equipment for 3rd year of medical school.",
    raised: 420,
    goal: 800,
    daysLeft: 21,
    isUrgent: false,
  },
  {
    name: "Grace Muthoni",
    image: "/images/student-3.jpg",
    university: "University of Nairobi",
    country: "Kenya",
    need: "Laptop for remote learning and coding bootcamp completion.",
    raised: 650,
    goal: 900,
    daysLeft: 8,
    isUrgent: true,
  },
]

export function CampusNeedsSection() {
  return (
    <section id="students" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[--trust-green]">
              Real Students, Real Needs
            </span>
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Live Campus Needs
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every student is verified through their university. Your support goes directly 
              to their accounts—no middlemen, no delays.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-[--trust-green] hover:text-[--trust-green]/80">
              View all students
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard key={student.name} {...student} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            <span className="font-semibold text-foreground">127 more students</span> are 
            waiting for support across 12 countries
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 border-[--trust-green] text-[--trust-green] hover:bg-[--trust-green] hover:text-white"
          >
            Browse All Students
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
