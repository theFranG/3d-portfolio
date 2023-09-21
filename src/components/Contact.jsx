import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AstronautCanvas } from "./canvas";

const isFormValid = (formData) => {
  const requiredFields = ["name", "email", "subject", "message"];
  for (const field of requiredFields) {
    if (!formData[field]) {
      return false;
    }
  }
  return true;
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isFormValid(form)) {
      setLoading(false);
      alert("Please complete all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_zlsgakv",
        "template_ogntqq8",
        formRef.current,
        "Y255d3382mYI7pG2z"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 flex xl:flex-row flex-col-reverse sm:gap-10 overflow-hidden"
    >
      <div className='flex-[0.75] p-8 rounded-2xl'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="md:mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-secondary py-4 px-6 placeholder:text-[#333333] 
                         text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-secondary py-4 px-6 placeholder:text-[#333333] 
                         text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="subject"
              className="bg-secondary py-4 px-6 placeholder:text-[#333333] 
                         text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-secondary py-4 px-6 placeholder:text-[#333333] 
                         text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-secondary py-3 px-8 rounded-xl outline-none w-fit
                       text-[#060606] font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        </div>
        <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mt-5 md:mt-0'>
        <AstronautCanvas />
        </div>
      </div>
  );
};

export default Contact