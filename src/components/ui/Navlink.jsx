export const Navlink = ({ text }) => {
  return (
    <a href="#" className="group py-8 relative">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="absolute bottom-0 left-0 block w-full h-1 scale-x-0 group-hover:bg-orange-primary 
      transition-all duration-400 group-hover:scale-x-100"></span>
    </a>
  );
};
