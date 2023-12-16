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
        <p className="regular-16 lg:leading-8 mt-11 tracking-wide text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row mt-10">
          <Button type="button" title="Students" variant="btn_blue" />
          <Button
            type="button"
            title="Non-Profits"
            variant="btn_white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
