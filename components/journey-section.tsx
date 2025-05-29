import JourneyCard from "@/components/journey-card"
import { experienceData, educationData } from "@/data/journey"
import ScrollReveal from "@/components/scroll-reveal"
import StaggerContainer from "@/components/stagger-container"

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="fade" duration={800}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </ScrollReveal>
        {/* Professional Experience */}
        <div className="mb-20">
        <ScrollReveal direction="up" delay={200} duration={800}>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Professional Experience</h3>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 items-stretch" staggerDelay={150}>
            {experienceData.map((item, index) => (
              <JourneyCard key={index} item={item} type="experience" />
            ))}
          </StaggerContainer>
        </div>

        {/* Education */}
        <div>
        <ScrollReveal direction="up" delay={200} duration={800}>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Education</h3>
          </ScrollReveal>
          <StaggerContainer className="flex flex-col items-center gap-8" staggerDelay={150}>
            {educationData.map((item, index) => (
              <div key={index} className="max-w-2xl w-full">
                <JourneyCard item={item} type="education" />
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
