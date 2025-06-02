import LeftHero from "./hero-left";
import RightHero from "./hero-right";
export default function MainHero() {
  return (
    <section className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-screen">
      <div className="pt-[10rem] py-2 w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1440px] flex  flex-col gap-10 md:flex-row  md:justify-between">
        <div className="w-full md:w-1/2">
          <LeftHero />
        </div>
        <div className="w-full md:w-1/2">
          {" "}
          <RightHero />{" "}
        </div>
      </div>
    </section>
  );
}
