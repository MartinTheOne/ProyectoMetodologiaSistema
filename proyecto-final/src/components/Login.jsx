import pelado from "../../img/Pelado.png"

const Login = () => {

    return (
        <div className="mt-56"> 
        <div className="flex rounded-lg shadow-lg h-[500px] max-w-[700px] mx-auto mt-10 transition-all duration-1000 ease-in-out">
          <div id="santi" className="w-[40%] flex items-center text-center bg-[#f8f8f8]  rounded-l-lg">
            <div id="nahuel" className="p-10">
             <img className="max-w-[310px] sticky "src={pelado} alt="" />
            </div>
          </div>

          <div className="w-[60%] flex items-center justify-center bg-[#f8f8f8] rounded-r-lg font-julius">
            <div className="px-8">
              <h2 className="text-3xl text-gray-800 ">Inicia sesion</h2>
              <form className="mt-8 space-y-4" >
                <div>
                  <label className="flex items-center mb-4 bg-white p-1 rounded-lg shadow-md">
                    <i className='bx bx-user text-gray-500'></i>
                    <input
                      type="text"
                      placeholder="Nombre Usuario"
                      name="userName"
                      required
                      className="w-full py-2 px-4 outline-none bg-transparent text-gray-800"
                      
                    />
                  </label>
                </div>
                <div>
                  <label className="flex items-center mb-4 bg-white p-1 rounded-lg shadow-md">
                    <i className='bx bx-lock-alt text-gray-500'></i>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      name="userPassword"
                      required
                      className="w-full py-2 px-4 outline-none bg-transparent text-gray-800"
                     
                    />
                  </label>
                </div>
                <input
                  type="submit"
                  value="Ingresar"
                  className="bg-[#224e1a] opacity-85 w-[150px] ml-9 text-white rounded-full py-2 px-6 cursor-pointer hover:bg-[#0E3C09] shadow-md transition-all duration-300"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Login;