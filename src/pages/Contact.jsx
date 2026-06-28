import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-8 text-white ">
      <div className="max-w-4xl mx-auto text-center mb-8 px-2">
        <h1 className="text-2xl sm:text-3xl font-semibold ">Contact Us</h1>
      </div>

      <div className="max-w-3xl mx-auto px-2 ">
        <form className="grid gap-4 " action={handleFormSubmit}>
          <input
            className="w-full px-4 py-3 text-sm outline-none border border-gray-500 rounded-lg "
            name="username"
            type="text"
            placeholder="Enter your name"
            required
            autoComplete="off"
          />
          <input
            className="w-full px-4 py-3 text-sm border border-gray-500 rounded-lg outline-none "
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
          />
          <textarea
            className="w-full min-h-[220px] rounded-lg border border-gray-500  px-4 py-3 text-sm outline-none"
            name="message"
            rows={10}
            placeholder="Enter your message"
            required
            autoComplete="off"
          />
          <button
            className="w-full rounded-3xl bg-red-500 px-6 py-3 text-white font-semibold transition hover:bg-red-600 "
            type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
