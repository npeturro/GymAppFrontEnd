import RutineForm from "../sections/NewRutine/RutineForm";

const NewRutine = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Crear rutinas</h1>
            <RutineForm />
        </div>
        </>
    );
};

export default NewRutine;