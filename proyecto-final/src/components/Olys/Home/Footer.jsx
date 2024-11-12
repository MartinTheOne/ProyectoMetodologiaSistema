import { SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
    return (
        <div >
            <div className='h-[500px]'>
            </div>

            <div className="w-full h-[115px] bg-[#72bf78] border-t-[7px] border-t-[#0E3C09] border-opacity-25 flex items-center justify-evenly">
                <div className="flex items-center ml-2">
                <p className='font-julius text-lg'> Encuentranos en Instagram:</p>
                <a className='ml-1' target="_blank" href="https://www.instagram.com/olysonline/ "><SlSocialInstagram /></a>
                </div>
                <div className="flex text-[20px] items-center">
                    <p className="font-julius text-lg ">Hecho por</p>
                    <p className="mx-1 mb-1">:</p>
                    <p className='font-julius text-lg'>
                        Gonzalez Martin - Figueroa Santiago - Garcia Martin
                    </p>
                </div>
            </div>
            
        </div>)
}

export default Footer;