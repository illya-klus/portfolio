import contactsData from "../data/ContactLinks.json";
import { Github, Linkedin, Send, Mail } from "lucide-react";

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
  mail: Mail,
};

const colorMap: Record<string, string> = {
  github: "group-hover:text-black group-hover:drop-shadow-[0_0_10px_black]",
  linkedin:
    "group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_#3b82f6]",
  telegram:
    "group-hover:text-sky-400 group-hover:drop-shadow-[0_0_10px_#38bdf8]",
  mail: "group-hover:text-green-400 group-hover:drop-shadow-[0_0_10px_#4ade80]",
};



type ContactItemProps = {
  link: string;
  icon: string;
};

const ContactItem = ({ link, icon }: ContactItemProps) => {
  const Icon = iconMap[icon];

  return (
    <a href={link} target="_blank" rel="noreferrer" className="group relative p-3 rounded-xl transition duration-300 ">
        <Icon className={`w-6 h-6 text-gray-400 transition duration-300 ${colorMap[icon]} `} />
        <span className=" absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap ">
            {icon}
        </span>
    </a>
  );
};

export const Contacts = () => {
  return (
      <div className="flex gap-3">
        {contactsData.map((item) => (
          <ContactItem
            key={item.link}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>

  );
};