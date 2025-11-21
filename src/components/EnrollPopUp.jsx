import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { firestoreDB } from "../firebase";   
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const EnrollPopup = ({ isOpen, onClose }) => {
  const courses = [
    "Manual Testing",
    "API Testing",
    "Automation Testing",
    "React JS",
    "Java Backend Development",
    "Java Full Stack",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestoreDB, "enrollments"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      toast.success("We will get back to you soon.");

      setFormData({ name: "", email: "", mobile: "", course: "" });
      onClose();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
              Let’s Build Your Career Together
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number*"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />

              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select a Course*</option>
                {courses.map((course, idx) => (
                  <option key={idx} value={course}>
                    {course}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-white text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-400 cursor-pointer transition"
              >
                Enroll Now
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollPopup;
