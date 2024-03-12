import test from "../../assets/the-north-face-og.jpg";
import { useContext, useEffect, useState } from "react";
import { GET_INFO_BANER_QUERY } from "../../helpers/banerQueris";
import { IButtonBaner } from "../../types/IbuttonBaner";
import { langContext } from "../../contexts/langContext";
import { ITitleBaner } from "../../types/ITitleBaner";

export default function Baner() {
  const customStyle: React.CSSProperties = {
    background: `url(${test})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [button, setButton] = useState<IButtonBaner>();
  const [title, setTitle] = useState<ITitleBaner>();
  const lang = useContext(langContext);

  useEffect(() => {
    getNewInfo();
  }, []);
  const getNewInfo = async () => {
    await GET_INFO_BANER_QUERY().then((res) => {
      console.log(res.data[0]);
      const newButton = {
        href: res.data[1].href,
        en_content: res.data[1].en_content,
        pl_content: res.data[1].pl_content,
      };
      const newTitle = {
        en_title: res.data[0].en_title,
        pl_title: res.data[0].pl_title,
      };
      setButton(newButton);
      setTitle(newTitle);
    });
  };
  return (
    <div className="flex w-full rounded-xl pt-14  h-custom_h_5 justify-center   items-center ">
      <div
        className="h-full flex justify-center items-center  w-4/5 rounded-xl "
        style={customStyle}
      >
        <section className="flex justify-center items-center flex-col gap-8">
          <h1 className={`text-red-700 font-bold text-4xl`}>
            {lang === "en" ? title?.en_title : title?.pl_title}
          </h1>
          <a
            className="pl-14 font-medium text-lg pr-14 pt-3 pb-3 rounded-xl bg-red-700"
            href={button?.href}
          >
            {lang === "en" ? button?.en_content : button?.pl_content}
          </a>
        </section>
      </div>
    </div>
  );
}
