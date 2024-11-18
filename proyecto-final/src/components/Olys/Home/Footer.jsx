import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
    return (
        <div >
            <div className=' focus:outline-none  h-[500px] 700-md:h-[100px] movil-m:h-[100px] movil-s:h-[100px] movil-sm:h-[100px] '>
            </div>

            <div className="w-full h-[115px]  bg-[#72bf78] border-t-[7px] font-julius border-t-[#0E3C09] border-opacity-25 flex items-center justify-between ">
                
                <div className="">

                    <div className="flex items-center text-[12px] 700-md:text-[8px] movil-sm:text-[8px] max-e:text-[10px] movil-smm:text-[6px] mb-2 ml-2">
                        <p className='font-julius '> Encuentranos en nuetra red social:</p>
                        <a className='ml-1 flex gap-[2px] focus:outline-none     ' target="_blank" href="https://www.instagram.com/olysonline/ "> Instagram <p className="mt-[2px]"><SlSocialInstagram /></p></a>
                    </div>

                    <div className="flex text-[12px] max-e:text-[10px] 700-md:text-[8px] movil-sm:text-[8px] movil-smm:text-[6px]  ml-2 items-center">
                        <p className="font-julius">Hecho por</p>
                        <p className="mx-1 movil-smm:-mx-1 movil-s:-mx-2 mb-1">:</p>
                        <p className='font-julius '>
                            Gonzalez Martin - Figueroa Santiago - Garcia Martin
                        </p>
                    </div>

                </div>

                <div className="flex text-[12px] max-e:text-[10px] 700-md:text-[8px] movil-sm:text-[8px] movil-smm:text-[6px] mr-2">
                    <p className="mr-1 movil-sm:text-[10px] movil-smm:text-[6px]">Puedes encontranos en:</p>
                    <ul>
                        <li className="flex">
                        <MdOutlineLocationOn className="mt-[1px]" /> Santa Fe 440 - SMT    
                        </li>

                        <li className="flex">
                        <MdOutlineLocationOn className="mt-[1px]" /> Salta 78 - SMT
                        </li>

                        <li className="flex">
                        <MdOutlineLocationOn className="mt-[1px]" /> Lobo de la Vega 850 - YB
                        </li>
                    </ul>
                </div>


            </div>
            
        </div>)
}

export default Footer;