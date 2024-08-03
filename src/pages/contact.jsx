import React from "react";
import { RiContactsBook3Line } from "react-icons/ri";
import Input from "../components/Input";
import Button from "../components/Elements/Button";

const Contact = () => {
  return (
    <div
      className="container px-8 py-4 mx-auto text-gray-900 md:pt-16"
      name="Contact"
    >
      <h1 className="flex justify-center gap-2 mb-2 text-3xl font-bold text-center ">
        <span>Contact</span>
        <RiContactsBook3Line size={35} />
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <form
          action=""
          className="flex flex-col items-center gap-2 px-4 py-4 w-96"
        >
          <Input id="name" type="text" name="name" placeholder="Your name" />
          <Input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="w-full px-4 py-2 rounded outline-none text-gray-50 bg-gray-900/65 placeholder:text-gray-50"
            placeholder="Your message"
          ></textarea>
          <Button>Send message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
