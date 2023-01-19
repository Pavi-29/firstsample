import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import validation from './validation';

const SignupForm=() => {
    const [values, setValues] = useState ({
        name:"",
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState(false);
    const [submitted, setsumitted] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,[event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event)=>{
       event.preventDefault();
       setErrors(validation(values));
    };
    return (
        <div className="container">
            <form>
                <h1>Login Form</h1>
                <label>Username</label>
                <input type="text" className="form-control" name="name" value={values.name} 
                onChange="{handleChange}"/>
                {errors.name && <p>{errors.name}</p>}
                <label>Email</label>
                <input type="email" className="form-control" name="email" value={values.email}
                onChange="{handleChange}"/>
                {errors.email && <p>{errors.email}</p>}
                <label>Password</label>
                <input type="password" className="form-control" name="password" value={values.password}
                onChange="{handleChange}"/>
                {errors.password && <p>{errors.password}</p>}
                <button className="btn btn-primary button" type="submit" onClick="{handleFormSubmit}" >Sign Up</button>
            </form>
            
        </div>
    );
};

export default SignupForm; 