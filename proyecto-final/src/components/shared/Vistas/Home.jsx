import imagen from '../../../../img/ensalada.png'
const Home = () => {

    return (
        <div>
            <div className="justify-center">
                <div className="grid grid-cols-4 gap-4 mt-40">
                    <div className="bg-[#9BC885]  p-20 pl-10 rounded-xl border-[2px] border-lime-700 ">
                        <div className=' p-40  rounded-xl border-[2px] border-lime-700 '>

                        </div>
                    </div>
                    <div className="bg-[#9BC885] p-20 pl-10 pr-20 rounded-xl  border-[2px] border-lime-700">
                        <div className=' p-40 rounded-xl border-[2px] border-lime-700 '>

                        </div>
                    </div>
                    <div className="bg-[#9BC885] p-20 pl-10  rounded-xl  border-[2px] border-lime-700">
                        <img src={imagen}></img>
                    </div>
                    <div className="bg-[#9BC885]  p-20 pl-10 rounded-xl  border-[2px] border-lime-700">
                        <img src={imagen}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;