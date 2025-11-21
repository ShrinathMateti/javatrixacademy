import { useParams, Link } from "react-router-dom";
import courses from "../data/coursesData";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20 text-white">
        <h2 className="text-2xl font-bold text-red-400">Course not found!</h2>
        <Link
          to="/courses"
          className="mt-6 inline-block px-6 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow hover:bg-gray-200 transition"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white">
      <div className="max-w-5xl mx-auto bg-slate-800/70 rounded-2xl shadow-xl p-8 border border-slate-700">
        {/* Banner */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-auto max-h-[400px] md:rounded-xl rounded-lg mb-6 object-cover"
        />

        {/* Title & Description */}
        <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
        <p className="text-lg text-slate-300 mb-6">{course.description}</p>
        <p className="text-slate-300 leading-relaxed mb-6">{course.content}</p>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-slate-700/70 rounded-xl text-center">
            <strong className="block text-slate-200">Duration</strong>
            <span className="text-slate-300">{course.duration}</span>
          </div>
          <div className="p-4 bg-slate-700/70 rounded-xl text-center">
            <strong className="block text-slate-200">Level</strong>
            <span className="text-slate-300">{course.level}</span>
          </div>
          <div className="p-4 bg-slate-700/70 rounded-xl text-center">
            <strong className="block text-slate-200">Trainer</strong>
            <span className="text-slate-300">{course.trainerName}</span>
          </div>
        </div>

        {/* Syllabus */}
        <h2 className="text-xl font-semibold mb-3">Syllabus:</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
          {course.syllabus?.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        {/* Back Button */}
        <Link
          to="/courses"
          className="inline-block mt-4 px-6 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow-md hover:bg-gray-200 hover:shadow-lg transition"
        >
          Back to Courses
        </Link>
      </div>
    </section>
  );
};

export default CourseDetail;
