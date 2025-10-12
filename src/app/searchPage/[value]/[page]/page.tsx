import { axiosInstance } from "@/lib/utils";

export default async function Home({
  params,
}: {
  params: { value: string; page: number };
}) {
  const { value, page } = params;
  const getMoviesByName = async () => {
    const moviesByName = await axiosInstance.get(
      `/search/movie?query=${value}&language=en-US&page=${page}`
    );

    return moviesByName.data.results;
  };
  const moviesByName = await getMoviesByName();
  console.log(moviesByName);
  return (
    <div>
      <div>{value}</div>
      <div>{page}</div>
    </div>
  );
}
