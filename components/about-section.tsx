import SkillsSection from "@/components/skills-section"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me */}
      <ScrollReveal direction="fade" duration={800}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200} duration={800}>
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-700 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm Thejana — a DevOps enthusiast passionate about building scalable, secure, and automated
              infrastructure. With a strong foundation in cloud platforms, CI/CD pipelines, and infrastructure as code,
              I focus on delivering robust DevOps solutions that streamline development and deployment processes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I have hands-on experience with tools like Jenkins, Docker, Ansible, Terraform, and GitHub Actions, and I
              actively work on projects that apply real-world DevOps principles. I enjoy problem-solving, automation,
              and optimizing workflows to improve system reliability and team productivity. My approach blends precision
              with curiosity, always aiming to bridge development and operations through seamless integration.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently seeking opportunities to contribute to modern DevOps teams where I can grow my expertise,
              collaborate with others, and work on impactful systems. Whether it's infrastructure automation, CI/CD
              orchestration, or monitoring solutions, I'm eager to take on challenges that accelerate delivery and
              elevate reliability.
            </p>
          </div>
        </div>
      </ScrollReveal>
        {/* Skills Section */}
        <ScrollReveal direction="up" delay={400} duration={800}>
        <SkillsSection />
      </ScrollReveal>
      </div>
    </section>
  )
}
