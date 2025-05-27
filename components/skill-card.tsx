import type { Skill } from "@/data/skills"

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case "Expert":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "Advanced":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      case "Beginner":
        return "text-gray-400 bg-gray-400/10 border-gray-400/20"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20"
    }
  }

  return (
    <div className="group p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:bg-gray-700/30">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">{skill.name}</h4>
        {skill.level && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
        )}
      </div>
      {skill.description && <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>}
    </div>
  )
}
