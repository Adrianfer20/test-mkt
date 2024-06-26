import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white p-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h4 className='text-xl font-bold mb-4'>A|R</h4>
                    <p>A|R System facilita la creación y gestión de tickets.</p>
                </div>
                <div>
                    <h4 className='text-xl font-bold mb-4'>Enlaces Útiles</h4>
                    <ul>
                        <li><a href='#' className='text-blue-300 hover:text-blue-100'>Política de Privacidad</a></li>
                        <li><a href='#' className='text-blue-300 hover:text-blue-100'>Términos de Servicio</a></li>
                        <li><a href='#' className='text-blue-300 hover:text-blue-100'>Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold mb-4'>Síguenos</h4>
                    <div className='flex space-x-4'>
                        <a href='#' aria-label='Facebook' className='text-blue-300 hover:text-blue-100'><FaFacebook size={24} /></a>
                        <a href='#' aria-label='Twitter' className='text-blue-300 hover:text-blue-100'><FaTwitter size={24} /></a>
                        <a href='#' aria-label='Instagram' className='text-blue-300 hover:text-blue-100'><FaInstagram size={24} /></a>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8'>
                <p className='text-sm text-blue-300'>© 2024 A|R System. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
