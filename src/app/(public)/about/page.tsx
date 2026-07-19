export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Hello! I am <span className="font-bold text-blue-600">Md Shamim</span>, a Computer Science & Engineering (CSE) student at Daffodil International University (DIU).
        </p>
        <p>
          My programming journey started with a deep curiosity about how things work on the internet. Today, my core expertise lies in the <span className="font-semibold text-gray-900">MERN stack</span> (MongoDB, Express.js, React, Node.js). I enjoy building structured, scalable backend architectures and clean, user-friendly frontend interfaces.
        </p>
        <p>
          Alongside academic coursework like Data Structures & Algorithms, and Lexical Analysis, I am continuously expanding my technical arsenal to include modern technologies like Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p>
          When I am not coding, you will find me participating in social services as a member of Prothom Alo Bondhushova or volunteering at university events. I believe in continuous learning, teamwork, and pushing my boundaries to solve real-world problems.
        </p>
      </div>
    </div>
  );
}