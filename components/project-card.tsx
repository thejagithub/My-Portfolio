import { Github, ExternalLink, CheckCircle, Clock } from "lucide-react"

interface Project {
  title: string
  description: string
  tools: string[]
  github: string
  demo?: string
  image: string
  status: "completed" | "in-progress"
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          label: "Completed",
          bgColor: "bg-green-600/20",
          borderColor: "border-green-600/30",
          textColor: "text-green-600",
          icon: CheckCircle,
          iconColor: "text-green-800",
        }
      case "in-progress":
        return {
          label: "In Progress",
          bgColor: "bg-yellow-600/20",
          borderColor: "border-yellow-600/30",
          textColor: "text-yellow-300",
          icon: Clock,
          iconColor: "text-yellow-400",
        }
      default:
        return {
          label: "Unknown",
          bgColor: "bg-gray-600/20",
          borderColor: "border-gray-600/30",
          textColor: "text-gray-300",
          icon: CheckCircle,
          iconColor: "text-gray-400",
        }
    }
  }

  const statusConfig = getStatusConfig(project.status)
  const StatusIcon = statusConfig.icon

  return (
    <div className="bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-600 hover:border-blue-500 overflow-hidden">
      <div className="relative">
      <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
       {/* Status Badge */}
       <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 ${statusConfig.bgColor} border ${statusConfig.borderColor} ${statusConfig.textColor} text-xs font-medium rounded-full flex items-center gap-1 backdrop-blur-sm`}
          >
            <StatusIcon className={`w-3 h-3 ${statusConfig.iconColor}`} />
            {statusConfig.label}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
