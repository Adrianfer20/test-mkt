import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Button from "../components/Buttons/Button";

const HomePages = () => {
    const { user } = useContext(AuthContext)
    return (
        <section className='min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center p-8'>
            <div className='py-12 max-w-4xl mx-auto'>
                <h1 className='text-5xl font-bold mb-4'>¡Bienvenido, {user.displayName}!</h1>
                <p className='text-xl mb-6'><span className="font-semibold text-blue-900">A|R System</span> es la solución definitiva para la administración y gestión de tickets en equipos MikroTik. Con nuestra plataforma, puedes simplificar el proceso de creación, seguimiento y resolución de tickets, garantizando una gestión eficiente y organizada.</p>
                {/* <p className='text-lg mb-6'>Optimiza tu flujo de trabajo y mejora la productividad de tu equipo con A|R System. Nuestra interfaz intuitiva y herramientas avanzadas te permiten manejar tus dispositivos MikroTik de manera efectiva, asegurando que cada problema se resuelva de forma rápida y precisa.</p> */}

                <Button variant="outline">
                    Descubre más
                </Button>
            </div>
        </section>
    )
}

export default HomePages;