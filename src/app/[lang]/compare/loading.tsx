import Spinner from "@atoms/Spinner";

export default function Loading() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <Spinner />
    </div>
  );
}
