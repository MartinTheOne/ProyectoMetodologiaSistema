import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
    return (
        <div >
            <div className='h-[500px]'>
            </div>

            <div className="w-full h-[115px] bg-[#72bf78] border-t-[7px] font-julius border-t-[#0E3C09] border-opacity-25 flex items-center justify-between ">
                
                <div className="flex items-center text-[12px] ml-2">
                    <p className='font-julius '> Encuentranos en Instagram:</p>
                    <a className='ml-1' target="_blank" href="https://www.instagram.com/olysonline/ "><SlSocialInstagram /></a>
                </div>

                <div className="flex text-[12px] items-center">
                    <p className="font-julius">Hecho por</p>
                    <p className="mx-1 mb-1">:</p>
                    <p className='font-julius '>
                        Gonzalez Martin - Figueroa Santiago - Garcia Martin
                    </p>
                </div>

                <div className="flex text-[12px] mr-2">
                    <p className="mr-1">Puedes encontranos en:</p>
                    <ul>
                        <li className="flex">
                        <MdOutlineLocationOn className="mt-[1px]" /> Santa Fé 440 - SMT    
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