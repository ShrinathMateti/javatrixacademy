import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { realtimeDB } from "../firebase";
import { ref, push } from "firebase/database";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await push(ref(realtimeDB, "contactMessages/"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date().toISOString(),
      });

      toast.success("Message received — we’ll get back to you soon!");

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <section className="bg-slate-900 text-white min-h-screen py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-10">
          <img
            src="/contact.jpg"
            alt="Contact Illustration"
            className="w-full rounded-lg max-w-md mx-auto lg:mx-0"
          />

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-xl text-slate-400 mt-1" />
              <div>
                <h3 className="text-base font-semibold">Our Location</h3>
                <p className="text-gray-400 text-sm">123 Main Street, Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-xl text-slate-400 mt-1" />
              <div>
                <h3 className="text-base font-semibold">Call Us</h3>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-xl text-slate-400 mt-1" />
              <div>
                <h3 className="text-base font-semibold">Email</h3>
                <p className="text-gray-400 text-sm">support@javatrixacademy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-5">Send us a message 🚀</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:ring-2 focus:ring-slate-400 outline-none text-sm transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:ring-2 focus:ring-slate-400 outline-none text-sm transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2.5 rounded-lg bg-slate-700 text-white border border-slate-600 focus:ring-2 focus:ring-slate-400 outline-none text-sm transition"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-slate-900 py-2.5 rounded-lg font-semibold hover:bg-slate-300 active:scale-[0.98] transition text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
