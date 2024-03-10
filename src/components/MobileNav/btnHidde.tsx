import { IoClose } from "react-icons/io5";

export default function ButtonHidde(props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setState } = props;
  return (
    <button
      onClick={() => setState(false)}
      className="bg-transparent text-3xl text-black font-medium"
    >
      <IoClose />
    </button>
  );
}
