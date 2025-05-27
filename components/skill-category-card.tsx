"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { SkillCategory } from "@/data/skills"
import SkillCard from "@/components/skill-card"

interface SkillCategoryCardProps {
  category: SkillCategory
  isExpanded?: boolean
  onToggle?: () => void
  isMobile?: boolean
}

export default function SkillCategoryCard({
  category,
  isExpanded = false,
  onToggle,
  isMobile = false,
}: SkillCategoryCardProps) {
  if (isMobile) {
    return (
      <div className="border border-gray-600 rounded-lg overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full p-4 text-left hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          aria-expanded={isExpanded}
          aria-controls={`category-${category.title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{category.title}</h3>
              <p className="text-sm text-gray-400">{category.description}</p>
            </div>
            <div className="flex-shrink-0 ml-4">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
        </button>

        <div
          id={`category-${category.title.replace(/\s+/g, "-").toLowerCase()}`}
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="p-4 pt-0 border-t border-gray-600">
            <div className="space-y-3">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop version
  return (
    <div className="border border-gray-600 rounded-lg hover:border-gray-500 transition-all duration-300 group">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {category.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">{category.description}</p>
        </div>

        <div className="space-y-3">
          {category.skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
