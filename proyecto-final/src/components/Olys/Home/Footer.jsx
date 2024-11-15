import { SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
    return (
        <div >
            <div className='h-[500px]'>
            </div>

            <div className="w-full h-[115px] bg-[#72bf78] border-t-[7px] border-t-[#0E3C09] border-opacity-25 flex items-center ">
                
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

                <ul>
                    <li>
                        
                    </li>
                </ul>

            </div>
            
        </div>)
}

export default Footer;