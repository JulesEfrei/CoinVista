import { getTranslation } from "./translation";

export default async function Home({ params }: { params: { lang: string } }) {
  const translation = await getTranslation(params.lang.split("-")[0]);
  return (
    <>
      <h1>{translation.home.title}</h1>
    </>
  );
}
