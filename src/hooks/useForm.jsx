import { useState } from 'react';

const useForm = (initialValues) => {
    const [formData, setFormData] = useState(initialValues);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return { formData, error, setError, handleChange };
};

export default useForm;
