import React, {useState} from 'react';

const useForm = (submitHandler) => {
    const [item, setItem] = useState({});

    const handleInputChange = e => {
        setItem({...item,[e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        submitHandler(item)
        const obj = {};
        setItem({obj});
    }

    return [item, setItem, handleInputChange, handleSubmit];
};

export default useForm;