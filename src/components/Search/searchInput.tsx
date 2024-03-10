import { useTranslation } from "react-i18next";
export default function SearchInput() {
  const { t } = useTranslation();
  return (
    <input
      className="text-gray-500 font-medium placeholder:text-gray-500 bg-transparent outline-none"
      placeholder={t("searchInputPlaceholder")}
    />
  );
}
