import JourneyCard from "@/components/journey-card"
import { experienceData, educationData } from "@/data/journey"

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <JourneyCard key={index} item={item} type="experience" />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Education</h3>
          <div className="flex flex-col items-center gap-8">
            {educationData.map((item, index) => (
              <div key={index} className="max-w-2xl w-full">
                <JourneyCard item={item} type="education" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
