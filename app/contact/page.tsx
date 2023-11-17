import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

function page() {
  return (
    <div className="h-full flex justify-around  ">
      <div className="flex ml-16">
        <ContactForm />
      </div>
      <div className="h-full flex items-center mr-16">
        <Image
          src={"/reading-dark.png"}
          alt="contact"
          width={500}
          height={500}
          className="object-fill"
        />
      </div>
    </div>
  );
}

export default page;
