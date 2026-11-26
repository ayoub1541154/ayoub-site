const Header = () => {
  return (
    <header className="text-center md:flex md:text-start bg-[#020617] h-20 py-5 px-10 justify-between items-center">
      <h2 className="text-[#38bdf8] sm:text-3xl flex-[0.6] font-black">
        SPORTS CLUB
      </h2>

      <nav className="text-white text-sm md:text-md xl:text-xl  flex-[0.4] flex justify-between font-bold items-center">
        <a href="#accueil">Accueil</a>
        <a href="#services">services</a>
        <a href="#abonnements">Contact</a>
        <a href="#apropos">A propos</a>
      </nav>
    </header>
  );
};

export default Header;
