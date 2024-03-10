import { useState } from "react";
import Header from "./components/Header/header";
import { isActiveContext } from "./contexts/isActiveContext";
import MobileNav from "./components/MobileNav/mobileNav";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <isActiveContext.Provider value={isActive}>
        <Header setIsActive={setIsActive} />
        <MobileNav setIsActive={setIsActive} />
      </isActiveContext.Provider>
    </>
  );
}

export default App;
