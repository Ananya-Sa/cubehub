import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function ContactForm() {
  return (
    <div className="h-full items-center flex justify-center pb-32">
      <main className=" items-center ">
        <h1 className="text-4xl font-semibold mb-2">Contact Us</h1>
        <p className="text-sm mb-6">
          Feel free to reach out to us with any questions or feedback.
        </p>

        <form className="place-content-center space-y-2">
          <div className="form-group align-middle md:align-top">
            <label htmlFor="fullname" className="mb-1 block font-semibold">
              Full Name
            </label>
            <Input type="text" id="fullname" name="fullname" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className=" mb-1 block font-semibold">
              Email
            </label>
            <Input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="mr-4 mb-1 block font-semibold">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              className="mb-4"
              required
            />
          </div>

          <Button type="submit" className="bg-white text-slate-900">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
}

export default ContactForm;
