import { DetailHeader } from "@/components/DetailHeader";
import { DetailImages } from "@/components/DetailImages";
import { DetailRelatedMovies } from "@/components/DetailRelatedMovies";
import { DetailTexts } from "@/components/DetailTexts";

export default async function moviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <div className="px-[180px] pt-[52px] pb-[112px] ">
        <DetailHeader id={id}></DetailHeader>
        <DetailImages id={id}></DetailImages>
        <DetailTexts id={id}></DetailTexts>
        <DetailRelatedMovies id={id}></DetailRelatedMovies>
      </div>
    </div>
  );
}
