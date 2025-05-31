"use client"

import { useState, useEffect } from "react"
import { skillCategories } from "@/data/skills"
import SkillCategoryCard from "@/components/skill-category-card"

export default function SkillsSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set())

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCategories(newExpanded)
  }

  const expandAll = () => {
    setExpandedCategories(new Set(skillCategories.map((_, index) => index)))
  }

  const collapseAll = () => {
    setExpandedCategories(new Set())
  }

  return (
    <div>
      {/* Skills Header */}
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Skills & Technologies</h3>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The DevOps Arsenal
        </p>
      </div>

      {/* Mobile Controls */}
      {isMobile && (
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={expandAll}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors"
          >
            Collapse All
          </button>
        </div>
      )}

      {/* Skills Grid */}
      <div className={`${isMobile ? "space-y-4" : "grid grid-cols-1 lg:grid-cols-2 gap-6"}`}>
        {skillCategories.map((category, index) => (
          <SkillCategoryCard
            key={category.title}
            category={category}
            isExpanded={expandedCategories.has(index)}
            onToggle={() => toggleCategory(index)}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-12">
        <div className="border border-gray-600 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Technology Overview</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
              </div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">{skillCategories.length} </div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-sm text-gray-400">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
