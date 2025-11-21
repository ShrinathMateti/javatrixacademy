// src/pages/About.jsx
import { FaUsers, FaBullseye, FaBookOpen, FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About Javatrix Academy
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-16">
          At Javatrix Academy, we bridge the gap between learning and the
          real-world by offering project-based training, expert mentorship,
          and a supportive learning environment.
        </p>

        {/* About Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Who We Are */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaUsers className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              A passionate team of developers and educators dedicated to helping
              learners master Java and Full-Stack development.
            </p>
          </div>

          {/* Our Mission */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaBullseye className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To make programming education accessible, practical, and engaging
              through hands-on projects and guided mentorship.
            </p>
          </div>

          {/* Our Approach */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaBookOpen className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Learn by building — with real-world projects, coding challenges,
              and problem-solving exercises that strengthen skills.
            </p>
          </div>

          {/* Our Values */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform">
            <FaHandsHelping className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Collaboration, continuous learning, and mentorship are at the
              heart of everything we do to build confident developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
