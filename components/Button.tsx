'use client'
import Image from "next/image";


type ButtonProps = {
  type:'button' | 'submit';
  title: string;
  icon?: string;
  variant:string;
  full?: boolean;
  url?: string;
}

const Button = ({ url, type, title, icon, variant, full}: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.location.href = url; // Redirect to the URL
    }
  };
  return (
    <button 
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}` }
      type={type}
      onClick={handleClick} // Add the onClick event
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button