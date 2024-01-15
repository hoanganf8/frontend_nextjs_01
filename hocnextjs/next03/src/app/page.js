import clsx from "clsx";
import { Inter, Open_Sans } from "next/font/google";
import Image from "next/image";
import img01 from "@/assets/images/events-laravel-livewire.jpg";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Page = () => {
  return (
    <div>
      <h1 className="text-5xl font-black p-5 text-center text-orange-600 border-4 border-red-600 border-dashed rounded-xl shadow-2xl shadow-orange-800 bg-orange-200 italic hover:bg-sky-700 hover:text-white">
        F8 - Học lập trình để đi làm
      </h1>
      <h2 className={clsx("text-5xl mt-10", inter.className)}>
        Học lập trình để đi làm
      </h2>
      <h2 className={clsx("text-5xl mt-10", openSans.className)}>
        Học lập trình để đi làm
      </h2>
      {/* <Image src={img01} alt="F8 - Học lập trình không khó" /> */}
      {/* <Image
        src="/images/next.svg"
        alt="F8 - Học lập trình không khó"
        width={300}
        height={200}
      /> */}
      <Image
        src="https://cdnphoto.dantri.com.vn/b61rM_01WqNpFn_gVb-ughhfseE=/zoom/1032_688/2024/01/15/downloaderla-65a4d7442f4c5-1705301875616.jpg"
        alt="F8"
        width={400}
        height={300}
      />
    </div>
  );
};

export default Page;
