import Image from "next/image";
export default function RIGHTCONTENT() {
  return (
    <figcaption className="h-full">
      <Image
        src="/first-content-right.webp"
        alt="student holding a book"
        width={700}
        height={900}

        className=" object-fill h-[30rem] rounded-[3rem] rounded-tl-none "
      />
    </figcaption>
  );
}
