import ButtonLogin from "./btnLogin";
import ButtonShowMobileNav from "./btnShowMobileNav";
import LangList from "./langList";

export default function Nav(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setIsActive } = props;
  return (
    <nav className="flex justify-center items-center gap-5">
      <ButtonShowMobileNav setIsActive={setIsActive} />
      <ButtonLogin />
      <LangList />
    </nav>
  );
}
