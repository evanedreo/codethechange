import { FEATURES } from '@/constants'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden pb-24'>
      <div className=' flex max-container padding-container relative w-full justify-center'>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image 
              src="/codethechangelogo.png"
              alt="logo"
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='text-softcyan-100 bold-40 lg:bold-64'>Benefits of Joining Us</h2>
          </div>
          <ul className='text-white mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-24'>
            {FEATURES.map((feature)=>(
              <FeatureItem
                 title ={feature.title}
                 icon ={feature.icon}
                 description ={feature.description}
                 />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description:string;
}

const FeatureItem = ({title, icon, description}: FeatureItem) => {
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-vividblue-400'>
        <Image 
          src={icon}
          alt="map"
          width={28}
          height ={28}
          />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
          {title}
      </h2>
      <p className='regular-16 lg:regular-18 xl:regular-20 min-w-[280px] mt-5 text-white lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default Features