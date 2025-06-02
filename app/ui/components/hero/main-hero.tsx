import LeftHero from "./hero-left";
import RightHero from "./hero-right";
export default function MainHero() {
  return (
    <section className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-screen z-10">
      <div className="pt-[10rem] py-2 w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex  flex-col gap-10 lg:flex-row  md:justify-between">
        <div className="w-full lg:w-1/2">
          <LeftHero />
        </div>
        <div className="w-full lg:w-1/2">
          {" "}
          <RightHero />{" "}
        </div>
      </div>
    </section>
  );
}
