import Link from "next/link";

function Navigation() {
  const isConnected = false;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare" },
    {
      name: isConnected ? "Profile" : "Login",
      href: isConnected ? "/profile" : "/login",
    },
  ];

  return (
    <>
      <ul className="w-2/5 bg-slate-300 rounded-lg sticky top-[90%] left-1/2 translate-x-[-50%] flex justify-around align-middle px-3">
        {navItems.map((navItem, index) => {
          return (
            <li key={`${navItem.name}-${index}`} className="my-2 py-2">
              <Link
                href={navItem.href}
                className="rounded-lg bg-slate-700 px-4 py-2 h-full hover:bg-slate-500 hover:cursor-pointer text-slate-50"
              >
                {navItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Navigation;
