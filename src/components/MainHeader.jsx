import logoEmpresa from "@/assets/images/logo.svg";
import avatar from "@/assets/avatar/image-avatar.png";
import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";

const MainHeader = () => {
  const handleOpenMenu = () => {
    console.log("click");
  };

  return (
    <header className="container mx-auto flex items-center gap-8 bg-gray-200 px-4 py-8">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img
        className="mb-1 mr-auto h-5 md:mr-0"
        src={logoEmpresa}
        alt="logo empresa"
      />
      <nav className="w-4/5 font-extrabold h-full p-8 gap-y-5 absolute top-0 left-0 bg-gray-400 flex flex-col md:mr-auto md:flex md:flex-row md:gap-4">
        <a href="#">Colecciones</a>
        <a href="#">Hombres</a>
        <a href="#">Mujeres</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img className="w-10" src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default MainHeader;
