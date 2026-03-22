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
    <a href={link} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white shadow-md border border-gray-100 transition duration-300">
        <Icon className={`w-6 h-6 ${colorMap[icon]} transition duration-300`} />
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