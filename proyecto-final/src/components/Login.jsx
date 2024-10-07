

const Login = () => {

    return (
        <div> 
        <div className="flex rounded-lg shadow-lg h-[500px] max-w-[900px] mx-auto mt-10 transition-all duration-1000 ease-in-out">
          <div className="w-[40%] flex items-center text-center bg-[#c7eef3] rounded-l-lg">
            <div className="w-full px-8">
              <h2 className="text-4xl text-gray-800">Bienvenido</h2>
              <p className="my-4 text-gray-600">Por favor Inicia Sesión con tus datos</p>
              <input
                type="button"
                value="Iniciar Sesión"
                className="bg-transparent outline-none border-2 border-[#9191bd] rounded-full py-2 px-6 text-[#9191bd] cursor-pointer hover:bg-[#9191bd] hover:text-white shadow-md transition-all duration-300"
                
              />
            </div>
          </div>

          <div className="w-[60%] flex items-center justify-center bg-[#f8f8f8] rounded-r-lg">
            <div className="px-8">
              <h2 className="text-3xl text-gray-800">Inicia sesion</h2>
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
                  value="Login"
                  className="bg-[#0E3C09] text-white rounded-full py-2 px-6 cursor-pointer hover:bg-[#224e1a] shadow-md transition-all duration-300"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Login;