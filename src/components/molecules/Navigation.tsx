import Link from "next/link";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/compare">Compare</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
