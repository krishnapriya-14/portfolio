import React from "react";

export default function Experience() {
  const roles = [
    {
      title: "Mobile Application Developer",
      company: "O2 Healthcare, MN",
      period: "Aug 2025 – Present",
      bullets: [
        "Architected iOS (Swift/SwiftUI) + React Native platform with HIPAA-compliant data flows.",
        "Designed reusable UI frameworks; improved load times by 40% and reduced crash rates by 30%.",
        "Built Spring Boot + AWS Lambda APIs for real-time health data synchronization.",
        "Implemented CI/CD with GitHub Actions + Docker; 35% faster releases.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      company: "Eastern Illinois University, IL",
      period: "Jan 2024 – May 2025",
      bullets: [
        "Shipped AI solutions with Azure OpenAI, embeddings + Pinecone, and Copilot for doc automation.",
        "Production-grade Spring Boot microservices and RAG pipelines improving retrieval precision.",
        "Containerized services to AKS; automated CI/CD with GitHub Actions/Azure DevOps.",
      ],
    },
    {
      title: "Application Developer",
      company: "IBM",
      period: "Nov 2021 – May 2023",
      bullets: [
        "Modernized AT&T portals with micro frontends; improved API response times by 40%.",
        "Built React/Angular components and Express.js APIs; ensured 99.9% uptime with Jenkins/AWS.",
        "Led DevOps workflows (Jenkins, CodePipeline); migrated monoliths to microservices.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "V4 Infotech",
      period: "Feb 2018 – Oct 2021",
      bullets: [
        "Java Spring Boot services for telecom & e-commerce; REST APIs for billing/fraud.",
        "Introduced Kafka/Redis; modularized legacy into microservices (+35% dev velocity).",
        "Deployed to Azure App Services; monitoring with Azure Monitor & Log Analytics.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Avishkar Tech Solutions, Hyderabad",
      period: "Oct 2017 – Dec 2017",
      bullets: [
        "Built CRUD modules (HTML/CSS/JS); improved responsive UI with Bootstrap 4.",
        "Connected forms to MySQL and implemented basic validation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {roles.map((r) => (
            <div key={r.title} className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-950">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{r.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{r.company} • {r.period}</p>
              </div>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
