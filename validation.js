import React from 'react';

const validation = (values) => {
    let errors ={};
    if(!values.name){
        errors.name ="Name is required";
        console.log(values.name);
    }
    if(!values.email){
        errors.email ="Email is required";
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email="Email is invalid";
    }
    if(!values.password){
        errors.password ="Password is required";
    }else if(values.password.length <5){
        errors.password="Password must be more than five characters. ";
    }
    
    return errors;
        
};

export default validation;