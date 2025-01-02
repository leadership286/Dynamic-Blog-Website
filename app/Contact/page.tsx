"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success notification
    toast.success("Your message has been sent!", {
      position: "top-center", // Correct position string
      autoClose: 3000,
    });

    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-yellow-400 flex flex-col  items-center justify-center text-black font-Judson p-6">
      <ToastContainer />
      <div className="max-w-4xl text-center animate-bounceIn">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md mx-auto animate-bounceIn"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-green-500 transform transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
