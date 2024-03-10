import { MdKeyboardArrowUp } from "react-icons/md";

export default function ButtonLang(props: {
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
  isDrop: boolean;
  lang: string;
}) {
  const { setIsDrop, isDrop, lang } = props;

  return (
    <button
      onClick={() => {
        setIsDrop(!isDrop);
      }}
      className="flex justify-center items-center bg-transparent border-0 text-black font-medium text-lg cursor-pointer "
    >
      {lang === "en" ? "EN" : "PL"}{" "}
      <span
        className={`transition duration-500 ease-in-out ${
          isDrop ? "rotate-180" : ""
        }`}
      >
        <MdKeyboardArrowUp />
      </span>
    </button>
  );
}
