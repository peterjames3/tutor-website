// pages/index.tsx
import StudentImage from "./student-image";

export default function RightHero() {
  return (
    <div className="h-full  flex items-center justify-center p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
        <StudentImage
          src="/image1.png"
          alt="Student 1"
          rounded="rounded-tl-[100px]"
        />
        <StudentImage
          src="/image 2.png"
          alt="Student 2"
          rounded="rounded-tr-[100px]"
        />
        <StudentImage
          src="/image 3.png"
          alt="Student 3"
          rounded="rounded-bl-[100px]"
        />
        <StudentImage
          src="/image 4.png"
          alt="Student 4"
          rounded="rounded-br-[100px]"
        />
      </div>
    </div>
  );
}
