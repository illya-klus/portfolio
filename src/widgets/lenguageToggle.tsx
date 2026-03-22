import { useTranslation } from "../data/hooks/useTranslation";


const LanguageToggle = () => {
  const { lang, toggleLang } = useTranslation();

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-100 transition bg-white"
    >
      {lang === "ua" ? "🇺🇦 Українська" : "🇬🇧 English"}
    </button>
  );
};

export default LanguageToggle;