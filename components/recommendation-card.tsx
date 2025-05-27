import { Quote, Linkedin } from "lucide-react"

interface Recommendation {
  quote: string
  name: string
  title: string
  company: string
  avatar: string
}

interface RecommendationCardProps {
  recommendation: Recommendation
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="flex items-start gap-4 mb-6">
        <Quote className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
        <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
          "{recommendation.quote}"
        </blockquote>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <img
          src={recommendation.avatar || "/placeholder.svg"}
          alt={recommendation.name}
          className="w-12 h-12 rounded-full border-2 border-blue-500"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-white font-semibold text-lg">{recommendation.name}</h4>
            <Linkedin className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-blue-400 text-sm">
            {recommendation.title} at {recommendation.company}
          </p>
        </div>
      </div>
    </div>
  )
}
