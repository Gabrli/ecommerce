import { useContext } from "react";
import ButtonHidde from "./btnHidde";
import SearchBox from "../Search/searchBox";
import { isActiveContext } from "../../contexts/isActiveContext";

export default function MobileNav(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setIsActive } = props;
  const isActive = useContext(isActiveContext);

  return (
    <div
      className={`transition duration-500 ease-in-out w-full bg-white fixed top-0 left-0 h-screen flex flex-col   gap-2 ${
        isActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="flex w-11/12 justify-end pt-6 pb-6 ">
        <ButtonHidde setState={setIsActive} />
      </header>
      <SearchBox place="mobile" />
    </div>
  );
}
