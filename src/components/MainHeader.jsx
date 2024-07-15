import logoEmpresa from "@/assets/images/logo.svg";
import avatar from "@/assets/avatar/image-avatar.png";
import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";

const MainHeader = () => {
  return (
    <header className="container mx-auto flex bg-slate-400 px-4">
      <button className="md:hidden">
        <MenuIcon />
      </button>
      <img className="mr-auto md:mr-0" src={logoEmpresa} alt="logo" />
      <nav className="hidden md:mr-auto md:block">
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
      </div>
      <img
        src={avatar}
        alt="avatar"
      />
    </header>
  );
};

export default MainHeader;
