// src/data/hooks/useTranslation.ts
import { createContext, useContext, useState, type ReactNode} from "react";
import enPersonal from "../english/PersonalData.json";
import enProjects from "../english/Projects.json";
import uaPersonal from "../ukrainian/PersonalData.json";
import uaProjects from "../ukrainian/Projects.json";

type Lang = "en" | "ua";

interface PersonalData {
  name: string;
  job: string;
  description: string;
}

interface Project {
  name: string;
  mainImg: string;
  link?: string;
  description?: string;
  expirience?: string[];
  images?: string[];
}

interface TranslationData {
  personal: PersonalData;
  projects: Project[];
}

interface TranslationContextType {
  t: TranslationData;
  lang: Lang;
  toggleLang: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const [t, setT] = useState<TranslationData>({
    personal: enPersonal,
    projects: enProjects,
  });

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ua" : "en"));

  if (t.personal === undefined) setT({ personal: enPersonal, projects: enProjects });

  // Оновлюємо дані при зміні мови
  if (lang === "en" && t.personal !== enPersonal) setT({ personal: enPersonal, projects: enProjects });
  if (lang === "ua" && t.personal !== uaPersonal) setT({ personal: uaPersonal, projects: uaProjects });

  return (
    <TranslationContext.Provider value={{ t, lang, toggleLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Хук для використання в компонентах
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within TranslationProvider");
  return context;
};