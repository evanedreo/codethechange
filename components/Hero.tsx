import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="padding-container max-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/codethechangelogo.png"
          alt="codethechange"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-20px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 text-green-100">Code the Change</h1>
        <p className="regular-16 lg:regular-18 xl:regular-20 lg:leading-8 mt-11 tracking-wide text-white">
          Code the Change, as the name suggests, is a club where students can
          use their coding and technical skills to drive social change. The club
          hopes to gather enthusiastic students willing to share their talents
          and abilities to make a difference in the community. Each semester,
          the club will collaborate with non-profit organizations to support its
          mission by offering technical support in various areas, including
          software development, website creation, and much more. Students with a
          heart to give back to the community through their skills and passion
          are more than welcome to join the club. Throughout the semester,
          students could also gain hands-on experience working on real-life
          projects, enhance their programming skills, and network with other
          like-minded students who share similar interests and goals..
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row mt-10">
          <Button
            type="button"
            title="Students"
            variant="btn_blue"
            url="https://forms.gle/dm8e1pDQECfDJ9zXA"
          />
          <Button
            type="button"
            title="Non-Profits"
            variant="btn_white"
            url="https://forms.gle/ZH386SbYDFZskVcE9"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
