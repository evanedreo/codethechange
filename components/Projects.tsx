import { TEAMS } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const Projects = () => {
  return (
    <section id="projects" className="flexCenter flex-col">
      <div className="lg:mt-20 padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <div className="w-full text-center mt-[-20px] ">
            <h2 className="bold-40 lg:bold-64 text-vividblue-200 ">Projects</h2>
            <h3 className="text-softcyan-400 mt-8 bold-20 lg:bold-40 ">
              Fall 2023
            </h3>
            <h3 className="text-softcyan-100 regular-16 lg:regular-28">
              Our Team
            </h3>
          </div>
          <div className="flex-col max-container relative w-full">
            <div className="mb-10 lg:mb-20 justify-center flex lg:flex-row flex-col w-full gap-2 xl:gap-20">
              <div className="max-h-[800px] justify-center flex items-center">
                <Image
                  src="/team.png"
                  alt="workshop"
                  width={600}
                  height={250}
                />
              </div>
              <div className=" items-center flex justify-center gap-5 md:gap-20 lg:gap-2 xl:gap-20 p-0 text-center flex-row">
                <TeamName>
                  {TEAMS.executives.map((link) => (
                    <div key={link.label}>
                      <p className="text-softcyan-200 regular-14 md:bold-18 xl:text-xl whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="text-white text-xs md:medium-12 xl:medium-16 whitespace-nowrap">
                        {link.value}
                      </p>
                    </div>
                  ))}
                </TeamName>
                <TeamName>
                  {TEAMS.projectLeader.map((link) => (
                    <div key={link.label}>
                      <p className="text-softcyan-200 regular-14 md:bold-16 xl:text-xl whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="text-white text-xs md:medium-12 xl:medium-16  whitespace-nowrap">
                        {link.value}
                      </p>
                    </div>
                  ))}
                </TeamName>
              </div>
            </div>
          </div>
          <div className="text-center flex-col max-container relative w-full">
            <div className="border lg:border-hidden rounded-xl border-vividblue-300 p-8 flex lg:flex-row flex-col w-full gap-10">
              <div className="m-auto items-center flex-col">
                <h4 className=" text-softcyan-100 mt-0 bold-20 lg:bold-32 lg:mb-8">
                  Team 1
                </h4>
                <p className="regular-12 md:regular-16 text-white lg:max-w-[620px] xl:max-w-[820px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </p>
              </div>
              <div className="mx-auto md:max-w-[400px] flex-col space-y-4 ">
                <Image
                  src="/team1.png"
                  alt="team 1"
                  width={400}
                  height={300}
                  style={{ borderRadius: "8%" }}
                />
                <Button
                  type="button"
                  title="Website"
                  variant="btn_blue"
                  url="https://thelittlehouse1jkt.netlify.app/"
                  full
                />
              </div>
            </div>
          </div>
          <div className="border lg:border-hidden rounded-xl border-vividblue-300 p-8 text-center flex-col max-container relative w-full">
            <div className="flex lg:flex-row flex-col w-full gap-10">
              <div className="m-auto items-center flex-col">
                <h4 className=" text-softcyan-100 mt-0 bold-20 lg:bold-32 lg:mb-8">
                  Team 2
                </h4>
                <p className="regular-12 md:regular-16 text-white lg:max-w-[620px] xl:max-w-[820px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </p>
              </div>
              <div className="mx-auto md:max-w-[400px] flex-col space-y-4 ">
                <Image
                  src="/team2.png"
                  alt="team 2"
                  width={400}
                  height={300}
                  style={{ borderRadius: "8%" }}
                />
                <Button
                  type="button"
                  title="Website"
                  variant="btn_blue"
                  url="https://socialprojectbali.netlify.app/"
                  full
                />
              </div>
            </div>
          </div>
          <div className="border rounded-xl lg:border-hidden border-vividblue-300 p-8 md:justify-center text-center flex-col max-container relative w-full">
            <div className="flex lg:flex-row flex-col w-full gap-10">
              <div className="m-auto items-center flex-col">
                <h4 className=" text-softcyan-100 mt-0 bold-20 lg:bold-32 lg:mb-8">
                  Team 3
                </h4>
                <p className="regular-12 md:regular-16 text-white lg:max-w-[620px] xl:max-w-[820px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </p>
              </div>
              <div className="flex-col space-y-4 mx-auto md:max-w-[400px]">
                <Image
                  src="/team3.png"
                  alt="team 3"
                  width={400}
                  height={300}
                  style={{ borderRadius: "8%" }}
                />
                <Button
                  type="button"
                  title="Website"
                  variant="btn_blue"
                  url="https://bercerita.netlify.app/"
                  full
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type TeamName = {
  children: React.ReactNode;
};

const TeamName = ({ children }: TeamName) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default Projects;
