import { useState } from 'react';

// Custom Hook: useForm
export const CustomHook = () => {
    const initialState = {
        name: '',
        email: '',
        password:'',
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    console.log('form data', formData)

    const handleSubmit = () => {
        setFormData(initialState)
    };

    return { formData, handleChange, handleSubmit };
};