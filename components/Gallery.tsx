import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface PhotosProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Photos = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: PhotosProps) => {
  return (
    <div
      className={`min-h-[220px] md:min-h-[350px] lg:min-h-[590px] w-full min-w-[300px] md:min-w-[600px] lg:min-w-[1000px] ${backgroundImage} 
    bg-cover bg-no-repeat rounded-2xl lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="max-w-[30px] md:max-w-[50px] md:p-4 lg:w-full lg:p-4 rounded-full bg-cyan-700 p-2">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="text-xs md:text-md lg:text-lg flex flex-col">
            <h4 className="text-white font-bold">{title}</h4>
            <p className=" md:regular-10 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="mt-1 md:mt-2 lg:mt-6 flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="text-xs md:medium-14 lg:bold-20 text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className=" -mt-[100px] ml-1 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[300px] md:h-[500px] lg:h-[600px] xl:h-[640px] w-full items-start justify-start gap-3 overflow-x-auto">
        <Photos
          backgroundImage="bg-bg-img-1"
          title="Code the Change DVC"
          subtitle="Diablo Valley College"
          peopleJoined="50+ Joined"
        />
        <Photos
          backgroundImage="bg-bg-img-2"
          title="Code the Change DVC"
          subtitle="Diablo Valley College"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="xl:-mt-[150px] lg:-mt-20 -mt-10 md:-mt-20 flexEnd px-6 lg:mr-6">
        <div className="bg-vividblue-700 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>New to Coding</strong>? <br></br>Not a CS Student?
          </h2>
          <p className="regular-14 xl:regular-20 mt-5 text-white">
            Rest assured, prior experience and skills are not prerequisites.
            Your passion and commitment are what matter most. By joining us on
            this project, you'll be guided by our project
            leaders. We will help you develop and enhance your knowledge, skills, and experience throughout this exciting journey.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
