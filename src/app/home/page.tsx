import ContentPerPage from "@/components/HomeContent/ContentPerPage";
import { CarouselSSR } from "@/components/Carousel/CarouselSSR";

const Home = async (props: any) => {
  const page = props?.searchParams?.page - 1 || 0;
  return (
    <div>
      <div className="min-h-screen">
        <div className="py-4 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-center pb-4">Hot Manga</h1>
          <CarouselSSR />
        </div>
        <div className="pb-4 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold pb-4 text-center">Daily Updates</h1>
          <ContentPerPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
