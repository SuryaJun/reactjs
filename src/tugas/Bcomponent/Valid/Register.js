import React from "react";
import Isi from "./Isi";


const Register = ({ submitForm}) => {

    const {handleChange, handleFormSubmit, values, errors} = Isi (submitForm);

    return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Creat Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="username">
                    <label className="label">Username</label>
                    <input className="input" type="text" name="username" value={values.username} onChange={handleChange} />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" type="email" name="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Register;