import Image from "next/image";

const Mission = () => {
  return (
    <section id="about_us" className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image src="/codethechangelogo.png" alt="logo" width={50} height={50} />
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 mt-[-20px] text-softcyan-400 lg:bold-64 xl:max-w-[390px]">
            Our Purpose
          </h2>
          <div className="flex-col max-container relative w-full">
            <div className="flex lg:flex-row flex-col w-full gap-10">
              <p className="m-auto regular-16 text-white xl:max-w-[820px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                
              </p>
              <Image
                src="/workshop.png"
                alt="workshop"
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="flex-col max-container relative w-full">
            <div className="flex lg:flex-row-reverse flex-col w-full gap-10">
              <p className="m-auto regular-16 text-white xl:max-w-[820px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor               
              </p>
              <Image
                src="/discussion.png"
                alt="discussion"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
