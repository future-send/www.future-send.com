"use client";

import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Stato per il messaggio di feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage(""); // Resetta il messaggio prima di un nuovo invio

    try {
      await addDoc(collection(db, "contacts"), formData);
      setFeedbackMessage("Message sent successfully!"); // Messaggio di successo
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      setFeedbackMessage("Failed to send the message."); // Messaggio di errore
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-40 px-8 lg:px-24">
      <h1 className="text-5xl font-bold title">Get In Touch</h1>
      <form onSubmit={handleSubmit} className=" space-y-6 mt-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-light ms-5 mb-2 text-neutral-500">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="text-xl placeholder:text-neutral-200 font-light mt-1 w-full h-14 px-4 py-2 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Your Name" required />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-light ms-5 mb-2 text-neutral-500">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="text-xl placeholder:text-neutral-200 font-light mt-1 w-full h-14 px-4 py-2 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Your Email" required />
          </div>
        </div>
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-lg font-light mt-8 ms-5 mb-3 text-neutral-500">
            Message
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="text-xl placeholder:text-neutral-200 font-light mt-1 w-full px-5 py-4 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Your Message" required></textarea>
        </div>
        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <button type="submit" disabled={loading} className={`px-6 py-3 w-full text-xl font-bold text-white ${loading ? "bg-gray-400" : "bg-neutral-900 hover:bg-neutral-100 hover:text-neutral-900"} rounded-xl transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500`}>
            {loading ? "Sending..." : "Send it"}
          </button>
          {/* Messaggio di feedback */}
          {feedbackMessage && <p className={`mt-4 text-lg ${feedbackMessage === "Message sent successfully!" ? "text-green-500" : "text-red-500"}`}>{feedbackMessage}</p>}{" "}
        </div>
      </form>
    </div>
  );
}
