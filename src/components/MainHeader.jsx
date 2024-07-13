import logoEmpresa from "@/assets/logoEmpresa.svg";
import avatar1 from "@/assets/avatar1.jpg";
import "@/../src/index.css";

const MainHeader = () => {
  return (
    <header className="flex container bg-slate-400 mx-auto px-4">
      <button className="md:hidden">
        <span className="material-symbols-outlined">Menu</span>
      </button>
      <img className="h-20 mr-auto md:mr-auto" src={logoEmpresa} alt="logo" />
      <nav className="hidden md:block md:mr-auto">
        <a href="#">Colecciones</a>
        <a href="#">Hombres</a>
        <a href="#">Mujeres</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
      </nav>
      <div className="flex gap-5">
        <button>
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={avatar1}
        alt=""
      />
    </header>
  );
};

export default MainHeader;
