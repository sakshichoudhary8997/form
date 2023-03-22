import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = (props) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const [error, setError] = useState({
        perror: '',
        cerror: ''
    })
    const submitHandler = (event) => {
        localStorage.setItem('user', JSON.stringify(inputs));
        console.log(inputs)

    }
    const validate = (event) => {
        event.preventDefault();
        if (new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}/).test(inputs.password)) {
            if (inputs.password !== inputs.confirmpassword) {
            setError({ ...error, cerror: "passwords does not match" })
         }
            else {
            submitHandler();
            navigate('/login');
        }
    }
}


    const onChange = (event) => {
        let name = event.target.name;
        let input = event.target.value;
        setInputs({
            ...inputs,
            [name]: input
        })

    }
    const onChangePassword = (event) => {
        setInputs({ ...inputs, password: event.target.value })
        if (!new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}/).test(inputs.password)) {
            setError({
                ...error, perror: "Password must contain atleast one digit , one lowercase letter, one uppercase letter, and it must be between 8-14 characters long."
            })
        }
        else {
            setError('')
        }
    }



    return (
        <>
            <div className="container">
                <h2>Signup</h2>
                <form onSubmit={validate}>
                    <div className="md-3">
                        <label htmlFor="fname" className="form-label">
                      {props.data[0].label}
                        </label>
                        <input
                            name={props.data[0].name}
                            type={props.data[0].type}
                            id={props.data[0].id}
                            className="form-control"
                            value={inputs.firstname}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="md-3">
                        <label htmlFor="fname" className="form-label">
                       {props.data[1].label}
                        </label>
                        <input
                            name={props.data[1].name}
                            type={props.data[1].type}
                            className="form-control"
                            id={props.data[1].id}
                            value={inputs.lastname}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="md-3">
                        <label htmlFor="InputEmail1" className="form-label">
                      {props.data[2].label}
                        </label>
                        <input
                            name={props.data[2].name}
                            type={props.data[2].type}
                                id={props.data[2].id}
                        className="form-control"
                            value={inputs.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="md-3">
                        <label htmlFor="InputPassword1" className="form-label">
                            {" "}
                  {props.data[3].label}
                        </label>
                        <input
                            name={props.data[3].name}
                            type={props.data[3].type}
                            id={props.data[3].id}
                            className="form-control"
                            value={inputs.password}
                            onChange={onChangePassword}
                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}"
                            maxLength={14}
                            minLength={8}
                            required
                        />
                    </div>
                    <p>{error.perror}</p>
                    <div className="md-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            {" "}
                       {props.data[4].label}
                        </label>
                        <input
                            name={props.data[4].name}
                            type={props.data[4].type}
                            className="form-control"
                            id={props.data[4].id}
                            value={inputs.confirmpassword}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <p>{error.cerror}</p>
                    <button type="submit" className="btn btn-success" onClick={validate}>
                        Sign Up
                    </button>
                    <p id="p1">Already have an account?<a href="/login">Login here</a></p>
                </form>
            </div>
        </>
    );
}

export default Register;