import { useContext, useState } from "react";
import ButtonLang from "./btnLang";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contexts/langContext";

export default function LangList(props: {setLang: React.Dispatch<React.SetStateAction<string>>}) {
  const { setLang } = props
  const [isDrop, setIsDrop] = useState(false);
  const lang = useContext(langContext)
  const { i18n } = useTranslation();

  return (
    <div className={`${isDrop ? "custom_h_3  " : ""}`}>
      <div className={`${isDrop ? "pt-7" : ""}`}>
        <ButtonLang setIsDrop={setIsDrop} isDrop={isDrop} lang={lang} />
      </div>
      <ul
        className={`w-custom_w_2 h-custom_h_4 bg-secondary2 flex justify-center items-center rounded-lg ${
          isDrop ? "" : "hidden"
        }`}
      >
        <li
          onClick={() => {
            setLang(lang === "en" ? "pl" : "en");
            i18n.changeLanguage(lang === "en" ? "pl" : "en");
          }}
          className="text-black font-medium cursor-pointer"
        >
          {lang === "en" ? "PL" : "EN"}
        </li>
      </ul>
    </div>
  );
}
