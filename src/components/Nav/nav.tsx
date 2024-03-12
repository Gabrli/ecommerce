import ButtonLogin from "./btnLogin";
import ButtonShowMobileNav from "./btnShowMobileNav";
import LangList from "./langList";

export default function Nav(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLang: React.Dispatch<React.SetStateAction<string>>
}) {
  const { setIsActive, setLang } = props;
  return (
    <nav className="flex justify-center items-center gap-5">
      <ButtonShowMobileNav setIsActive={setIsActive} />
      <ButtonLogin />
      <LangList setLang={setLang} />
    </nav>
  );
}
