import Image from "next/image";
import Button from "./Button";
import { TEAMS, PROJECT_DESCRIPTIONS } from "@/constants";

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
              {/* Team Description */}
              <div className="items-center flex justify-center gap-2 md:gap-20 lg:gap-2 xl:gap-20 p-0 flex-row">
                <TeamName>
                  {TEAMS.executives.map((link) => (
                    <div key={link.label}>
                      <p className="text-softcyan-200 regular-16 lg:regular-18 xl:regular-20 md:bold-18 xl:bold-20 whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="text-white text-xs regular-16 lg:regular-18 xl:regular-20 xl:my-1 whitespace-nowrap">
                        {link.value}
                      </p>
                    </div>
                  ))}
                </TeamName>
                <TeamName>
                  {TEAMS.projectLeader.map((link) => (
                    <div key={link.label}>
                      <p className="text-softcyan-200 regular-16 lg:regular-18 xl:regular-20 md:bold-18 xl:bold-20 whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="text-white text-xs regular-16 lg:regular-18 xl:regular-20 xl:my-1 whitespace-nowrap">
                        {link.value}
                      </p>
                    </div>
                  ))}
                </TeamName>
              </div>
            </div>
          </div>
          {/* Project Descriptions */}
          {Object.values(PROJECT_DESCRIPTIONS).map((project, index) => (
            <div key={index} className="border lg:border-hidden rounded-xl border-vividblue-300 p-8 flex lg:flex-row flex-col w-full gap-10">
              <div className="m-auto items-center flex-col">
                <h4 className="text-center text-softcyan-100 mt-0 bold-20 lg:bold-32 lg:mb-8">
                  {project.title}
                </h4>
                <p className="regular-16 lg:regular-18 xl:regular-20 text-white lg:max-w-[620px] xl:max-w-[820px]">
                  {project.description}
                </p>
              </div>
              <div className="flex-col space-y-4 m-auto md:max-w-[400px]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  style={{ borderRadius: "8%" }}
                />
                <Button
                  type="button"
                  title="Website"
                  variant="btn_blue"
                  url={project.websiteUrl}
                  full
                />
              </div>
            </div>
          ))}
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
