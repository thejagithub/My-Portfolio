import { CheckCircle, Clock, Circle } from "lucide-react"

interface Certification {
  title: string
  provider: string
  logo: string
  description: string
  status: "completed" | "in-progress" | "not-started"
}

interface CertificationCardProps {
  certification: Certification
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          label: "Completed",
          bgColor: "bg-green-600/20",
          borderColor: "border-green-600/30",
          textColor: "text-green-300",
          icon: CheckCircle,
          iconColor: "text-green-400",
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
      case "not-started":
        return {
          label: "Not Started",
          bgColor: "bg-gray-600/20",
          borderColor: "border-gray-600/30",
          textColor: "text-gray-300",
          icon: Circle,
          iconColor: "text-gray-400",
        }
      default:
        return {
          label: "Unknown",
          bgColor: "bg-gray-600/20",
          borderColor: "border-gray-600/30",
          textColor: "text-gray-300",
          icon: Circle,
          iconColor: "text-gray-400",
        }
    }
  }

  const statusConfig = getStatusConfig(certification.status)
  const StatusIcon = statusConfig.icon

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-700 hover:border-blue-500 overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={certification.logo || "/placeholder.svg"}
              alt={certification.title}
              className={`w-16 h-16 rounded-lg ${
                certification.status === "completed" ? "opacity-100" : "opacity-60 filter grayscale-[30%]"
              }`}
            />
            {certification.status === "completed" && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white leading-tight mb-2">{certification.title}</h3>
            <p className="text-blue-400 text-sm font-medium mb-2">{certification.provider}</p>
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 ${statusConfig.bgColor} border ${statusConfig.borderColor} ${statusConfig.textColor} text-xs font-medium rounded-full`}
              >
                {statusConfig.label}
              </span>
              <StatusIcon className={`w-4 h-4 ${statusConfig.iconColor}`} />
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">{certification.description}</p>
      </div>
    </div>
  )
}
