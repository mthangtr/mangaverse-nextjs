import ContentPerPage from "@/components/HomeContent/ContentPerPage";
import Carousel from "@/components/Carousel/Carousel";
import { Manga } from "@/types/Global.d";

export default function HomeContent({
  carouselData,
  initialPaginationData,
}: {
  carouselData: Manga[];
  initialPaginationData: Manga[];
}) {
  return (
    <div className="">
      <div className="pt-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center pb-4">Hot Manga</h1>
        <Carousel carouselData={carouselData} />
      </div>
      <div className="pb-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold pb-4 text-center">New Updates</h1>
        <ContentPerPage initialPaginationData={initialPaginationData} />
      </div>
    </div>
  );
}
