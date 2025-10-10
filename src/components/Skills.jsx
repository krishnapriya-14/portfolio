import React from "react";

export default function Skills() {
  const data = [
    { title: "Languages", items: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "Swift/SwiftUI"] },
    { title: "Frameworks", items: ["Spring Boot", "Hibernate", "React", "React Native", "Angular", "Node.js"] },
    { title: "Frontend", items: ["React", "Redux", "TypeScript", "HTML5/CSS3", "Tailwind", "SwiftUI"] },
    { title: "Cloud & DevOps", items: ["AWS (Lambda, S3, EC2, API Gateway)", "Azure (AKS, Cognitive Services)", "Jenkins", "GitHub Actions", "Docker", "Kubernetes"] },
    { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { title: "Testing & Tools", items: ["JUnit", "Selenium", "Postman", "Git", "JIRA", "Agile/Scrum", "Xcode"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((cat) => (
            <div key={cat.title} className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span key={it} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-blue-300">
                    {it}
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

