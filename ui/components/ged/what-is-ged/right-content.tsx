import Image from "next/image";
export default function RIGHTCONTENT() {
  return (
    <figcaption className="h-full">
      <Image
        src="/banner image desktop.png"
        alt="student holding a book"
        width={700}
        height={900}
        quality={70}
        className=" object-fill h-[30rem] rounded-[3rem] rounded-tl-none "
      />
    </figcaption>
  );
}
