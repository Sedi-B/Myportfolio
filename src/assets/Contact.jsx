import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-[url('')] py-8">
      <div className="mb-4 text-4xl text-emerald-500 align-middle font-bold">
        Get In Touch...
      </div>

      <div className="bg-gray-200 p-8 md:w-1/2 rounded-lg">
        <h2 className="text-xl font-bold mb-4 align-middle">
          Contact Information
        </h2>
        <p className="mb-2">
          <span className="font-bold">Email:</span> phoshokorr@gmail.com
        </p>
        <p className="mb-2">
          <span className="font-bold">Phone:</span> 076-621-1705
        </p>
        <p className="mb-2">
          <span className="font-bold">Address:</span> 24 Schoeman Street,
          Polokwane
        </p>
      </div>
      <div className="bg-gray-200 p-8 md:w-1/2 rounded-lg my-2">
        <form className=" align-middle md:w-1/2 ">
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2 bg-transparent  border border-gray-500"
            placeholder="Name and Surname"
          />
          <br />
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2 bg-transparent  border border-gray-500"
            placeholder="Email"
          />
          <br />
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2 bg-transparent  border border-gray-500"
            placeholder="Contacts"
          />
          <br />

          <textarea
            className="w-80 px-5 py-3 rounded-lg mb-2 bg-transparent  border border-gray-500"
            rows="3"
            placeholder="Send me a message"
          ></textarea>
          <button className=" justify-center bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-lg items-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
