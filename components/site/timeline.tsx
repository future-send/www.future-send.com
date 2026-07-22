import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

interface Step {
  title: string
  description: string
}

interface TimelineProps {
  steps: Step[]
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {steps.map((step, index) => (
        <div key={step.title} className="contents">
          <Reveal delay={index * 0.12} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-base font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
          {index < steps.length - 1 ? (
            <div className="flex items-center justify-center text-primary/50">
              <ArrowRight className="hidden size-7 md:block" />
              <ArrowRight className="size-6 rotate-90 md:hidden" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
