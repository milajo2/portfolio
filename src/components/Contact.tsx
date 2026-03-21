
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-left gap-8 p-8">
      <div className="flex flex-col items-left w-full gap-4">
        <h1 className="text-4xl font-bold">Drop me a message!</h1>
        <p>Feel free to reach out to me via <a href="mailto:azadjamila123@gmail.com" className="underline">email</a> or the contact form below!</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4 w-full">
        <div className="name-fields flex justify-between gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailField">Email *</label>
            <input
              id="emailField"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-black text-white py-2 px-4">Send</button>
        </div>
      </form>
    </div>




    // <div className="bg-[#c8def6] w-full min-w-[1440px] min-h-[1547px] relative">
    //   {/* Logo / Name */}
    //   <div className="absolute top-[30px] left-[51px] h-[30px] flex items-center [font-family:'Inika-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] underline whitespace-nowrap">
    //     Jamila Azad
    //   </div>

    //   {/* Nav Links */}
    //   <nav className="absolute top-[91px] left-[1120px] flex items-center gap-0">
    //     <a
    //       href="#home"
    //       className="absolute left-0 top-0 [font-family:'Inika-Regular',Helvetica] font-normal text-black underline h-[30px] flex items-center text-xl tracking-[0] leading-[30px] whitespace-nowrap"
    //       style={{ left: "0px" }}
    //     >
    //       Home
    //     </a>
    //     <a
    //       href="#about"
    //       className="[font-family:'Inika-Regular',Helvetica] font-normal text-black underline absolute h-[30px] flex items-center text-xl tracking-[0] leading-[30px] whitespace-nowrap"
    //       style={{ left: "80px" }}
    //     >
    //       About
    //     </a>
    //     <a
    //       href="#contact"
    //       className="[font-family:'Inika-Regular',Helvetica] font-normal text-black underline absolute h-[30px] flex items-center text-xl tracking-[0] leading-[30px] whitespace-nowrap"
    //       style={{ left: "161px" }}
    //     >
    //       Contact
    //     </a>
    //   </nav>

    //   {/* Heading */}
    //   <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[278px] left-[180px]">
    //     <h1 className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Inika-Bold',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[72px] whitespace-nowrap">
    //       Drop me a message!
    //     </h1>
    //   </div>

    //   {/* Email Label */}
    //   <div className="top-[420px] left-[190px] [font-family:'Inika-Bold',Helvetica] font-bold absolute h-9 flex items-center text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
    //     Email
    //   </div>

    //   {/* Email Link */}
    //   <a
    //     className="absolute top-[472px] left-[190px] h-9 flex items-center [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9 whitespace-nowrap"
    //     href="mailto:azadjamila123@gmail.com"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //     azadjamila123@gmail.com
    //   </a>

    //   {/* Contact Form */}
    //   <form
    //     onSubmit={handleSubmit}
    //     className="absolute top-[586px] left-[190px]"
    //   >
    //     {/* First Name */}
    //     <label
    //       htmlFor="firstName"
    //       className="absolute top-0 left-0 h-9 flex items-center [font-family:'Roboto-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-9 whitespace-nowrap"
    //     >
    //       First Name
    //     </label>
    //     <input
    //       id="firstName"
    //       name="firstName"
    //       type="text"
    //       value={formData.firstName}
    //       onChange={handleChange}
    //       className="absolute top-[36px] left-0 w-[345px] h-10 bg-white border border-solid border-black px-2 [font-family:'Roboto-Regular',Helvetica] text-black text-base"
    //     />

    //     {/* Last Name */}
    //     <label
    //       htmlFor="lastName"
    //       className="absolute top-0 left-[373px] h-9 flex items-center [font-family:'Roboto-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-9 whitespace-nowrap"
    //     >
    //       Last Name
    //     </label>
    //     <input
    //       id="lastName"
    //       name="lastName"
    //       type="text"
    //       value={formData.lastName}
    //       onChange={handleChange}
    //       className="absolute top-[36px] left-[373px] w-[345px] h-10 bg-white border border-solid border-black px-2 [font-family:'Roboto-Regular',Helvetica] text-black text-base"
    //     />

    //     {/* Email Field */}
    //     <label
    //       htmlFor="emailField"
    //       className="absolute top-0 left-[746px] h-9 flex items-center [font-family:'Roboto-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-9 whitespace-nowrap"
    //     >
    //       Email *
    //     </label>
    //     <input
    //       id="emailField"
    //       name="email"
    //       type="email"
    //       required
    //       value={formData.email}
    //       onChange={handleChange}
    //       className="absolute top-[36px] left-[746px] w-[345px] h-10 bg-white border border-solid border-black px-2 [font-family:'Roboto-Regular',Helvetica] text-black text-base"
    //     />

    //     {/* Message */}
    //     <label
    //       htmlFor="message"
    //       className="absolute top-[126px] left-[5px] h-9 flex items-center [font-family:'Roboto-Light',Helvetica] font-light text-black text-2xl tracking-[0] leading-9 whitespace-nowrap"
    //     >
    //       Message
    //     </label>
    //     <textarea
    //       id="message"
    //       name="message"
    //       value={formData.message}
    //       onChange={handleChange}
    //       className="absolute top-[178px] left-0 w-[1091px] h-[195px] bg-white border border-solid border-black px-2 py-2 [font-family:'Roboto-Regular',Helvetica] text-black text-base resize-none"
    //     />

    //     {/* Send Button */}
    //     <button
    //       type="submit"
    //       className="absolute top-[454px] left-[812px] w-[279px] h-[53px] bg-black flex items-center justify-center cursor-pointer"
    //     >
    //       <span className="[font-family:'Roboto-Light',Helvetica] font-light text-white h-[30px] flex items-center text-xl tracking-[0] leading-[30px] whitespace-nowrap">
    //         Send
    //       </span>
    //     </button>
    //   </form>

    //   {/* Divider Line */}
    //   {/* <img
    //     className="absolute top-[1232px] left-0 w-[1440px] h-px object-cover"
    //     alt="Line"
    //     src={line9}
    //   /> */}
    //   <hr />

    //   {/* Footer - LinkedIn */}
    //   <div className="top-[1291px] left-[679px] [font-family:'Inika-Regular',Helvetica] absolute h-[30px] flex items-center font-normal text-black text-xl tracking-[0] leading-[30px] whitespace-nowrap">
    //     Linkedin
    //   </div>

    //   {/* Footer - Email */}
    //   <div className="top-[1399px] left-[614px] [font-family:'Roboto-Regular',Helvetica] absolute h-[30px] flex items-center font-normal text-black text-xl tracking-[0] leading-[30px] whitespace-nowrap">
    //     azadjamila123@gmail.com
    //   </div>

    //   {/* Footer - Thank you */}
    //   <div className="absolute top-[1487px] left-[629px] h-[30px] flex items-center [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] whitespace-nowrap">
    //     Thank you for visiting!
    //   </div>
    // </div>
  );
};

export default Contact;
