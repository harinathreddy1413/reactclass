// npm i formik  and npm i yup
import React from 'react';
import {useFormik} from 'formik';

import * as Yup from 'yup';

const validate= values=>{
    const errors ={};
    if(!values.firstname){
        errors.firstname = "firstnName is required"
    }
    if(!values.email){
        errors.email = "email is requrired"
    }


    return errors;
}

export default function Signup() {


    const formik = useFormik({
        initialValues:{
            email:'',
            firstname:'',
            lastname:'',
            phoneNo:0
        },
        onSubmit:values=> alert(JSON.stringify(values)),
        // validate,
        validationSchema:Yup.object({
            firstname:Yup.string().max(20,"Must be less than 20 letters").required('reuired')
        })

    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div><label>email</label>
                <input 
                id="email"
                name="email"
                type="email"
                onChange = {formik.handleChange}
                value = {formik.values.email}
                /></div>
                {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:""}

                {/* firstname */}
                <div><label>firstname</label>
                <input 
                id="firstname"
                name="firstname"
                type="text"
                onChange = {formik.handleChange}
                value = {formik.values.firstname}
                /></div>
                {formik.errors.firstname ? <div>{formik.errors.firstname}</div>:""}
                {/* last name */}
                <div><label>last name</label>
                <input 
                id="lastname"
                name="lastname"
                type="text"
                onChange = {formik.handleChange}
                value = {formik.values.lastname}
                ></input></div>

            {/* phone no */}
            <div><label>phone-no</label>
                <input 
                id="phoneNo"
                name="phoneNo"
                type="number"
                onChange = {formik.handleChange}
                value = {formik.values.phoneNo}
                ></input></div>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}


// props drilling  