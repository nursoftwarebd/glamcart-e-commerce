import Image from "next/image";
import Link from "next/link";
import img from "@/assets/images/not-found-img.jpg";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="">
          <Image
            src={img}
            width={800}
            height={800}
            alt="404"
            className="mix-blend-multiply"
          />
        </div>
        <Link
          href={"/"}
          className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
