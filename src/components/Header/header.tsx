import Logo from "../../assets/logoipsum-300.svg";
import Nav from "../Nav/nav";
import SearchBox from "../Search/searchBox";
export default function Header(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLang: React.Dispatch<React.SetStateAction<string>>
}) {
  const { setIsActive, setLang } = props;
  return (
    <header className=" w-full flex items-center pt-2 h-custom_h_2  justify-between pl-6 pr-6 ">
      <img className="w-custom_w_1" src={Logo} alt="logo" />
      <SearchBox place="normal" />
      <Nav setIsActive={setIsActive} setLang={setLang} />
    </header>
  );
}
