import SearchInput from "./searchInput";
import { FaSearch } from "react-icons/fa";

export default function SearchBox(props: { place: string }) {
  const { place } = props;
  return (
    <div
      className={`flex items-center h-custom_h_1 justify-between bg-secondary1 rounded w-2/5 pr-3 pl-3 mobile1:w-11/12 mobile1:ml-auto mobile1:mr-auto ${
        place === "normal" ? "hidden" : ""
      }`}
    >
      <SearchInput />
      <FaSearch color="gray" />
    </div>
  );
}
