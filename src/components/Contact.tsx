import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    console.log("Form data:", formData);
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-full max-w-4xl flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-serif">Drop me a message!</h1>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-xl font-serif">Email</span>
            <a href="mailto:azadjamila123@gmail.com" className="text-xl">
              azadjamila123@gmail.com
            </a>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full mt-4">

          {/* Top Row: 3 Columns on desktop, stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-lg font-light">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-black p-2 bg-white focus:outline-none h-12"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-lg font-light">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-black p-2 bg-white focus:outline-none h-12"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="emailField" className="text-lg font-light">Email *</label>
              <input
                id="emailField"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-black p-2 bg-white focus:outline-none h-12"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-light">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="border border-black p-4 bg-white focus:outline-none resize-none w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white py-3 px-16 text-lg hover:bg-gray-800 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;