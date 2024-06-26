import React, { useContext } from 'react';
import HeaderTitle from '../components/Layout/HeaderTitle';
import Button from '../components/Buttons/Button';
import FormField from '../components/Form/FormField';
import CenteredLayout from '../components/Layout/CenteredLayout';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useForm from '../hooks/useForm';

const UpdateUserPages = () => {
    const { updateUser } = useContext(AuthContext);
    const { formData, error, setError, handleChange } = useForm({ displayName: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const response = await updateUser({displayName:formData.displayName, photoUrl:formData.password});
        if (!response.success) {
            setError(response.message || 'Error al iniciar sesión');
            return;
        }
        navigate('/');
    };

    return (
        <CenteredLayout>
            <HeaderTitle subtitle="Actualizar Datos" textCenter={true} />
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <div className="grid gap-2 rounded-md shadow-sm">
                    <FormField
                        id="displayName"
                        name="displayName"
                        type="displayName"
                        placeholder="Nombre"
                        value={formData.displayName}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Photo Url"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <div className='flex justify-center items-center'>
                    <Button>Ingresar</Button>
                </div>
            </form>
        </CenteredLayout>
    );
};

export default UpdateUserPages;