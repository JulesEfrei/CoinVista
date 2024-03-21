import CLink from "@atoms/CLink";
import ThemeSwitcher from "@atoms/ThemeSwitcher";

function Navigation() {
  const isConnected = false;

  return (
    <>
      <nav className="w-fit h-14 sticky top-[90%] mx-auto">
        <ul className="w-full h-full bg-black dark:bg-white bg-opacity-50 rounded-lg flex justify-center gap-2 items-center px-1 py-1 text-sm">
          <li className="h-full">
            <CLink
              href={"/"}
              className="bg-gray-800 text-white border-1 border-slate-800 flex items-center px-3 rounded-md h-full dark:hover:bg-opacity-90 hover:bg-opacity-55"
            >
              C. Home
            </CLink>
          </li>
          <div className="bg-gray-800 bg-opacity-70 h-full flex justify-between items-center gap-3 rounded-md px-1 py-1">
            <li className="h-full">
              <CLink
                href={"/compare"}
                className="border-1 border-gray-500 text-white py-2 px-3 rounded-md flex items-center h-full hover:border-white"
              >
                Compare
              </CLink>
            </li>
            <li className="h-full">
              <CLink
                href={isConnected ? "/profile" : "/login"}
                className="border-1 border-gray-500 text-white py-2 px-3 rounded-md flex items-center h-full hover:border-white"
              >
                {isConnected ? "Profile" : "Login"}
              </CLink>
            </li>
            <li className="h-full">
              <ThemeSwitcher />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
