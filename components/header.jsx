import Logo from './Logo';

export default function header() {
  return (
    <header className="w-full">
      <div className="py-2 flex shadow-md justify-between items-center w-full px-[2%]">
        <div className="flex gap-5 items-center">
          <Logo />
        </div>

        <div className="flex gap-5 items-center">
          <nav className="hidden md:flex gap-3 font-bold text-gray-500 text-sm">
            jj
          </nav>

          <div className="flex gap-3 items-center">
            <div className="icon search-icon border border-green-200 p-1 rounded-full h-9 w-9 flex items-center justify-center hover:bg-green-600 cursor-pointer mr-4 hover:text-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
