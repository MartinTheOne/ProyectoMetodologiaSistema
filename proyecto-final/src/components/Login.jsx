import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isTokenvalid } from "../utils/isTokenValid";
import pelado from "../../img/Pelado.png";

const Login = () => {
  const [pass, setPass] = useState("");
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && isTokenvalid(token)) {
      navigate('/admin');
    }
  }, [navigate]); 

  const handlerLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: usuario,
        password: pass
      });

      if (response.status === 200) {
        const token = response.headers['authorization'];
        if (token) {
          console.log("Inicio de sesión exitoso");
          localStorage.setItem('token', token);
          navigate('/admin');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-56">
      <div className="flex rounded-lg shadow-lg h-[500px] max-w-[700px] mx-auto mt-10 transition-all duration-1000 ease-in-out">
        <div id="santi" className="w-[40%] flex items-center text-center bg-[#f8f8f8]  rounded-l-lg">
          <div id="nahuel" className="p-10">
            <img className="max-w-[310px] sticky" src={pelado} alt="" />
          </div>
        </div>

        <div className="w-[60%] flex items-center justify-center bg-[#f8f8f8] rounded-r-lg">
          <div className="px-8">
            <h2 className="text-3xl text-gray-800 font-julius">Inicia sesión</h2>
            <form onSubmit={handlerLogin} className="mt-8 space-y-4">
              <div>
                <label className="flex items-center mb-4 bg-white p-1 rounded-lg shadow-md">
                  <i className="bx bx-user text-gray-500 font-sans"></i>
                  <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="Nombre Usuario"
                    name="userName"
                    required
                    className="w-full py-2 px-4 outline-none bg-transparent text-gray-800 font-sans"
                  />
                </label>
              </div>
              <div>
                <label className="flex items-center mb-4 bg-white p-1 rounded-lg shadow-md">
                  <i className="bx bx-lock-alt text-gray-500"></i>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPass(e.target.value)}
                    name="userPassword"
                    required
                    value={pass}
                    className="w-full py-2 px-4 outline-none bg-transparent text-gray-800"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Ingresar"
                className="bg-[#224e1a] font-julius opacity-85 w-[150px] ml-9 text-white rounded-full py-2 px-6 cursor-pointer hover:bg-[#0E3C09] shadow-md transition-all duration-300"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
