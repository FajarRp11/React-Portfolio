import { RiContactsBook3Line } from "react-icons/ri";
import Input from "../components/Input";
import Button from "../components/Elements/Button";

const Contact = () => {
  return (
    <div className="container px-8 py-4 mx-auto text-gray-900" name="Contact">
      <h1 className="flex justify-center gap-2 mb-2 text-3xl font-bold text-center ">
        <span>Contact</span>
        <RiContactsBook3Line size={35} />
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <form
          action="https://getform.io/f/apjmxgra"
          className="flex flex-col items-center gap-2 px-4 py-4 w-96 md:w-[480px]"
          method="POST"
        >
          <Input id="name" type="text" name="name" placeholder="Your name" />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            className="w-full px-4 py-2 rounded outline-none text-gray-50 bg-gray-900/65 placeholder:text-gray-50/50"
          ></textarea>
          <Button type="submit" width="w-full">
            Let's talk
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
