"use client"

import { useState } from "react"
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
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to get first 70 words
  const getPreviewText = (text: string, wordLimit = 70) => {
    const words = text.split(" ")
    if (words.length <= wordLimit) return text
    return words.slice(0, wordLimit).join(" ") + "..."
  }

  const previewText = getPreviewText(recommendation.quote)
  const shouldShowMore = recommendation.quote.split(" ").length > 70

  return (
    <div className="bg-gray-900 rounded-xl p-6 md:p-12 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="flex items-start gap-4 mb-6">
      <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <blockquote className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed italic">
            "{isExpanded ? recommendation.quote : previewText}"
        </blockquote>

        {shouldShowMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-1"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 md:mt-8">
        <img
          src={recommendation.avatar || "/placeholder.svg"}
          alt={recommendation.name}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-500"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
          <h4 className="text-white font-semibold text-base md:text-lg">{recommendation.name}</h4>
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
