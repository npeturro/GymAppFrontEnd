import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">¡Bienvenido!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
                
                <div 
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => navigate('/newrutine')}
                >
                    <div className="relative">
                        <img 
                            className="w-full h-64 object-cover brightness-75 transition-all duration-300 hover:brightness-100"
                            src="https://img.freepik.com/fotos-premium/persona-corriendo-cinta-correr-gimnasio-creada-tecnologia-ia-generativa_853812-2594.jpg" 
                            alt="Crear Rutina" 
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Crear rutina</h2>
                        <p className="text-gray-600 mb-6">Comienza una nueva rutina personalizada.</p>
                        <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600">
                            Crear rutina
                        </button>
                    </div>
                </div>

                <div 
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => navigate('/rutines')}
                >
                    <div className="relative">
                        <img 
                            className="w-full h-64 object-cover brightness-75 transition-all duration-300 hover:brightness-100"
                            src="https://www.consumidorglobal.com/uploads/s1/37/06/60/una-persona-se-prepara-para-hacer-pesas-en-un-gimnasio-casero.webp" 
                            alt="Ver Rutina" 
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ver rutina</h2>
                        <p className="text-gray-600 mb-6">Revisa y ajusta tu rutina actual.</p>
                        <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600">
                            Ver rutina
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;
