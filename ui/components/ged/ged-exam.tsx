import LeftContent from "./what-is-ged/left-content";
import RightContent from "./what-is-ged/right-content";

export default function GEDEXAM() {
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
