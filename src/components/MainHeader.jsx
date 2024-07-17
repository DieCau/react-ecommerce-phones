import logoEmpresa from "@/assets/images/logo.svg";
import avatar from "@/assets/avatar/image-avatar.png";
import { CartIcon, MenuIcon, CloseIcon, Navlink } from "./ui";
import { useState } from "react";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:p-0",
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute left-0 top-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:static",
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:p-0",
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          className="mb-1 mr-auto h-5 md:mr-0"
          src={logoEmpresa}
          alt="logo empresa"
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <Navlink text="Colecciones" />
          <Navlink text="Hombres" />
          <Navlink text="Mujeres" />
          <Navlink text="Nosotros" />
          <Navlink text="Contacto" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img className="w-10" src={avatar} alt="avatar" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-200 md:block"></span>
    </>
  );
};

export default MainHeader;
