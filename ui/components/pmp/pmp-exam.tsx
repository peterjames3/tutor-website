import LeftContent from "./what-is-pmp/left-content";
import RightContent from "./what-is-pmp/right-content";
import BottomSection from "./what-is-pmp/bottom-section";
export default function PMPEXAM() {
  return (
    <section className=" py-20 w-full ">
      <div className="mx-auto  max-w-310 px-4">
        <div className=" max-w-310 mx-auto flex  flex-col gap-10 lg:flex-row lg:items-center md:justify-between">
          <div className="w-full lg:w-1/2">
            <LeftContent />
          </div>
          <div className="w-full lg:w-1/2">
            {" "}
            <RightContent />{" "}
          </div>
        </div>
        <BottomSection />
      </div>
    </section>
  );
}
