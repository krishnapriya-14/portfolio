import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-Stack & Mobile engineer building cloud-native, AI-enabled products. I architect
            React/React Native + Spring Boot systems, design resilient APIs, and deliver secure,
            HIPAA-aware flows on AWS/Azure. I care about clean architectures, measurable impact,
            and shipping polished experiences at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What I Do</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              React & React Native apps, Spring Boot microservices, secure REST/Graph APIs,
              GenAI/RAG integrations, CI/CD automation, and performance optimization.
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & GenAI</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              AWS (Lambda, S3, EC2, API Gateway), Azure (AKS, Cognitive Services), OpenAI APIs,
              Pinecone, embeddings, prompt pipelines, and production RAG.
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Outcomes</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              25–40% performance gains, 35% faster releases, 99.9% uptime, and
              high-adoption mobile experiences for healthcare and enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

