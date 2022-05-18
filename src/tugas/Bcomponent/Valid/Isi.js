import React, {useState, useEffect} from "react";
import validation from "./Validation";

const Isi = (submitForm) => {


const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
});

const [errors, setErrors] = useState({});
const [dataValid, setDataValid] = useState(false);

const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataValid(true);
};

useEffect(() => {
    if(Object.keys(errors).length === 0 && dataValid){
        submitForm(true);
    }
}, [errors]);

    return {handleChange, handleFormSubmit, errors, values };
};

export default Isi;