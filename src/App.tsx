import { useState } from "react";
import Header from "./components/Header/header";
import { isActiveContext } from "./contexts/isActiveContext";
import MobileNav from "./components/MobileNav/mobileNav";
import Baner from "./components/Baner/baner";
import { langContext } from "./contexts/langContext";
import CategoryList from "./components/Category/categoryList";
function App() {
  const [isActive, setIsActive] = useState(false);
  const [lang, setLang] = useState("en")

  return (
    <>
      <isActiveContext.Provider value={isActive}>
        <langContext.Provider value={lang}>
        <Header setIsActive={setIsActive} setLang={setLang}/>
        <MobileNav setIsActive={setIsActive} />
        <Baner/>
        <CategoryList/>
        </langContext.Provider>
      </isActiveContext.Provider>
    </>
  );
}

export default App;
