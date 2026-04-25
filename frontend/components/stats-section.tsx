const stats = [
  {
    value: "$2.4M+",
    label: "Funds Transferred",
    description: "Directly to students",
  },
  {
    value: "2,847",
    label: "Students Funded",
    description: "Across 12 countries",
  },
  {
    value: "94%",
    label: "Graduation Rate",
    description: "Of funded students",
  },
  {
    value: "24hrs",
    label: "Average Delivery",
    description: "Funds to student",
  },
]

export function StatsSection() {
  return (
    <section id="impact" className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-[--trust-green] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {stat.label}
              </p>
              <p className="text-sm text-white/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
