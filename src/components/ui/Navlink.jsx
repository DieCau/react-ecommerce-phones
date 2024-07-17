export const Navlink = ({ text }) => {
  return (
    <a href="#" className="group py-8 relative">
      <span>{text}</span>
      <span className="absolute bottom-0 left-0 block w-full h-1 scale-x-0 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-x-100"></span>
    </a>
  );
};
