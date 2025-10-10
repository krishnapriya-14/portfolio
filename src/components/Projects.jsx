import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "O2 App — “You are Limitless.”",
      desc:
        "React Native + Expo cross-platform mobile platform unifying Community, Creativity, and Wellness with role-based flows (Patient, Parent, Physician). Modular components (TextField, Buttons, BottomNav), gradient design, and physician 'Sofa' dashboards.",
      impact: "25% adoption increase, 40% faster load times, 35% faster releases",
      tech: [
        "React Native (Expo)", "JavaScript (ES6+)", "React Navigation",
        "Spring Boot (APIs)", "AWS (Lambda, S3, EC2, API Gateway)",
        "Node/Express (planned)", "Firebase/MongoDB/AWS RDS (planned)", "EAS Build"
      ],
    },
    {
      title: "Panther Tech Assistant — EIU",
      desc:
        "University-wide AI assistant (Java, Node.js, React) for instant information retrieval; HIPAA-style secure interactions; serverless on AWS.",
      impact: "50% reduction in support response time",
      tech: ["React", "Node.js", "Java", "AWS Lambda", "S3"],
    },
    {
      title: "AT&T Client Portal Optimization — IBM",
      desc:
        "High-performance React components, real-time UI patterns, AWS Connect routing, containerized deploys with 99.9% uptime.",
      impact: "25% faster page loads; foundation for AI-assisted support",
      tech: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "AI Communication Platform — Telecom & E-com",
      desc:
        "Spring Boot + Apache Camel microservices for billing, fraud, account; event-driven with Kafka; secure REST for LLM-ready orchestration.",
      impact: "99.9% uptime; 35% dev velocity increase by modularization",
      tech: ["Java", "Spring Boot", "Kafka", "Azure App Services"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900 text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{p.desc}</p>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">Impact: {p.impact}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
