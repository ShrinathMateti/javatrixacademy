import { FaChalkboardTeacher, FaUserCheck, FaKeyboard } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 mt-4">
          💡 Why Choose <span className="text-slate-300">Javatrix?</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-xl bg-slate-800 shadow-lg">
            <FaKeyboard className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hands-on Practice</h3>
            <p className="text-sm text-slate-400">
              Improve faster by solving real coding problems and building small projects.
            </p>
          </div>

          {/* Expert Mentors */}
          <div className="p-6 rounded-xl bg-slate-800 shadow-lg">
            <FaChalkboardTeacher className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p className="text-sm text-slate-400">
              Learn from experienced instructors who guide you step-by-step.
            </p>
          </div>

          {/* Resumes & Mock Interviews */}
          <div className="p-6 rounded-xl bg-slate-800 shadow-lg">
            <FaUserCheck className="text-slate-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resumes & Mock Interviews</h3>
            <p className="text-sm text-slate-400">
              Get help building your resume and practice interviews to build confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
