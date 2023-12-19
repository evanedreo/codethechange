import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-darkcyan-500 h-full py-12 flexCenter">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns)=>(
              <FooterColumn title ={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {columns.links.map((link)=>(
                    <Link 
                    href={link.url} 
                    key={link.label}>
                      <p className="text-gray-340 whitespace-nowrap">
                        {link.label}
                      </p>                     
                  </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className=" flex flex-col gap-5">
              <FooterColumn title ={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link)=>(
                    <Link 
                      href="/" 
                      key={link.label}>
                        <p className="text-gray-340 whitespace-nowrap">
                          {link.label}:
                        </p>
                        <p className="text-white medium-14 whitespace-nowrap">
                          {link.value}
                        </p>
                    </Link>
                  ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-10">
                  {SOCIALS.links.map((link)=>(
                    <Link
                    target="_blank"
                    href={link.url}
                    key={link.image}
                  >
                    <Image 
                      src={link.image}
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"/>
        <p className="bold-18 w-full text-center">2023 Code the Change | All rights reserved </p>
        <p className="regular-14 w-full text-center mt-[-40px] text-gray-10">Built with Next.js in React, Deployed on Vercel</p>
      </div>
    </footer>
  )
}

type FooterColumn ={
  title:string;
  children:React.ReactNode;
}

const FooterColumn = ({title, children}:FooterColumn) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )

}

export default Footer