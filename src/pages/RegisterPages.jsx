import React, { useContext } from 'react';
import HeaderTitle from '../components/Layout/HeaderTitle';
import Button from '../components/Buttons/Button';
import FormField from '../components/Form/FormField';
import CenteredLayout from '../components/Layout/CenteredLayout';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useForm from '../hooks/useForm';

const RegisterPages = () => {
    const { register } = useContext(AuthContext);
    const { formData, error, setError, handleChange } = useForm({  passKey: '' ,email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const response = await register(formData.email, formData.password);
        if (!response.success) {
            setError(response.message || 'Error al registrar usuario');
            return;
        }
        navigate('/');
    };

    return (
        <CenteredLayout>
            <HeaderTitle subtitle="Registrar Administrador" textCenter={true} />
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <div className="grid gap-2 rounded-md shadow-sm">
                    <FormField
                        id="passkey"
                        name="passKey"
                        type="password"
                        placeholder="Codigo de Validacion"
                        value={formData.passKey}
                        onChange={handleChange}
                        required
                    /><FormField
                        id="email-address"
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <div className='flex justify-center items-center'>
                    <Button>Registrar</Button>
                </div>
            </form>
        </CenteredLayout>
    );
};

export default RegisterPages;