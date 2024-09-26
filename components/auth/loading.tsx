import Image from "next/image";

export const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/loading.svg"
        alt="loading"
        height={120}
        width={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
