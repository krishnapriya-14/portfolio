import React from "react";

export default function Experience() {
  const roles = [
    {
      title: "Application Developer",
      company: "O2 Healthcare, MN",
      period: "Aug 2025 – Present",
      bullets: [
"Architected React + Next.js healthcare dashboards with AI-powered features for doctors and admins.",
"Integrated OpenAI GPT-based APIs for auto-summarization of diagnostic data and LLM chat interfaces to assist clinicians with patient insights.",
"Designed modular UI frameworks and reusable Tailwind CSS components, reducing dev time by 30%.",
"Optimized front-end performance by implementing SSR and dynamic caching, achieving 40% faster load times.",
"Led implementation of Auth0 authentication, improving app security and scalability across distributed users.",
"Collaborated with UX, AI, and data teams to turn complex workflows into interactive dashboards, increasing engagement by 25%."

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
        "Built enterprise-scale React.js applications to manage telecom user dashboards and product management workflows.",
"Developed scalable React components for customer dashboards and service metrics visualization.",
"Collaborated with API and UX teams to build user-centric, interactive experiences.",
"Designed modular UI components using Redux Toolkit, React Hooks, and Material UI, improving code reusability by 40%.",
"Developed REST-based integrations with backend services for real-time customer metrics and analytics.",
"Automated builds and deployments through GitHub Actions and AWS ECS, achieving faster release cycle."
      ],
    },
    {
      title: "Full Stack Developer Intern",
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
