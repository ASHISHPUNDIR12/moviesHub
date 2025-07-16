const MobileNavMenu = () => {
  return (
    <div
      className={`
        fixed top-0 left-0 h-screen w-[90] z-50
        bg-white/10 backdrop-blur-md 
        shadow-xl ring-1 ring-white/10       
      `}
    >
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-white mb-6">MovieHub</h1>
        <ul className="flex flex-col gap-4 text-white text-lg">
          <li>Home</li>
          <li>About Us</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavMenu;
