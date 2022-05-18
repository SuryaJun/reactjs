import React, { useState } from "react";
import Register from "./Register";
import Valids from "./Valids";

const Form = () => {
    const [formSubmit, setFormSubmit] = useState(false);

    const submitForm = () => {
        setFormSubmit(true);
    };
    return (
    <div>
        {!formSubmit ? (
        <Register submitForm={submitForm}/>) : (<Valids />)};
    </div>
    );
};

export default Form;