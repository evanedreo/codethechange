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
              <p className="m-auto regular-16 lg:regular-18 xl:regular-20 text-white xl:max-w-[820px]">
                Code the Change aims to engage and unite students who are eager
                to apply their technical skills for the betterment of the
                community. By facilitating connections between these students
                and non-profit organizations in need of technical assistance,
                the club aims to integrate social change into the heart of
                computer science culture, encouraging students to use their
                talents not just for professional advancement but also for
                meaningful societal impact.
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
              <p className="m-auto regular-16 lg:regular-18 xl:regular-20 text-white xl:max-w-[820px]">
                Code the Change is dedicated to empowering students with an
                interest in computer science and coding. To achieve this, Code
                the Change conducts various bootcamps and provides hands-on
                mentorship from experienced project leaders, with the dual aim
                of enhancing the technical skills of its members and fostering a
                learning environment for students eager to delve into computer
                science.
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
