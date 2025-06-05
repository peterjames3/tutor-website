
import Image from "next/image";
import type { FC } from "react";

interface StudentImageProps {
  src: string;
  alt: string;

  rounded: string;
}

const StudentImage: FC<StudentImageProps> = ({
  src,
  alt,

  rounded,
}) => {
  return (
    <div
      className={`  ${rounded}`}
      // initial={{ opacity: 0, y: 30 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={430}
        className="w-full h-auto object-fill rounded-lg"
      />
    </div>
  );
};

export default StudentImage;
