import { DetailHeader } from "@/components/DetailHeader";
import { DetailImages } from "@/components/DetailImages";
import { DetailTexts } from "@/components/DetailTexts";
import axios from "axios";

export default async function moviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const getSelectedMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY",
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div>
      <div className="px-[180px] pt-[52px] pb-[112px] ">
        <DetailHeader id={id}></DetailHeader>
        <DetailImages id={id}></DetailImages>
        <DetailTexts id={id}></DetailTexts>
      </div>
    </div>
  );
}
