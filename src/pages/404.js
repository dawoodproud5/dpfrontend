import Link from "next/link";
export default function Custom404() {
  return (
    <div className="min-h-screen bg-white w-full flex  justify-center items-center">
      <div className="mx-auto h-full flex flex-col justify-center items-center space-y-8">
        <h1 className=" font-bold animate-charcter text-[24px] md:text-[90px]">404 - Page Not Found</h1>
        <Link href={"/"}>
          <button className="bg-[blue] text-white font-semibold px-6 py-3 rounded-lg text-[18px]">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}
