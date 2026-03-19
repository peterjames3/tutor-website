import LeftContent from "./what-is-pmp/left-content";
import RightContent from "./what-is-pmp/right-content";

export default function PMPEXAM() {
  return (
    <section className="pt-[10rem] py-2 w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex  flex-col gap-10 lg:flex-row lg:items-center md:justify-between">
      <div className="w-full lg:w-1/2">
        <LeftContent />
      </div>
      <div className="w-full lg:w-1/2">
        {" "}
        <RightContent />{" "}
      </div>
    </section>
  );
}
