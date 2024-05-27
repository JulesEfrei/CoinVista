import CLink from "@atoms/CLink";

export default function page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>Something went wrong with the authentication</h1>
      <CLink href={"/auth/sign-in"}>Sign Up</CLink>
    </div>
  );
}
