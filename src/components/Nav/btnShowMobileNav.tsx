import { IoMenu } from "react-icons/io5";
export default function ButtonShowMobileNav(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setIsActive } = props;
  return (
    <button
      onClick={() => setIsActive(true)}
      className="text-black font-medium text-3xl hidden mobile1:block"
    >
      <IoMenu />
    </button>
  );
}
