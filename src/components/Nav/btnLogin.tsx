import { useTranslation } from "react-i18next";
export default function ButtonLogin() {
  const { t } = useTranslation();
  return (
    <a className="font-medium text-black text-lg mobile1:hidden" href="/login">
      {t("btnLogin")}
    </a>
  );
}
