import React from 'react'
import { FaUser, FaYahoo } from "react-icons/fa";
import './Form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { updateFormData } from '../../reduxSlice/formSlice';
import { Link } from 'react-router-dom';
// import DataCard from '../DataCard/DataCard';

const schema = yup
    .object({
        Username: yup.string().required("username is required"),
        Firstname: yup.string().required("firstname is required"),
        Lastname: yup.string().required("lastname is required"),
        // Email: yup.string().required("email is required"),
        gender: yup.string().required("Gender is required"),
        Phone: yup.number().required("number is required").min(10, "this must be a valid phone number"),
        Password: yup.string().required("password is required").min(6, "this must be a valid password"),
        ConfirmPassword: yup.string().required("password is required").min(6, "this must be a valid password").oneOf([yup.ref('Password'), 'your password does not match']),
    })
    .required()

export default function Form() {
    const dispatch = useDispatch();
    // const formData = useSelector(state => state.form.formData);
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });
    const gender = [
        { "text": "MALE", "value": "male" },
        { "text": "FEMALE", "value": "female" },
        { "text": "OTHER", "value": "other" }
    ]
    const onSubmit = (values) => {
        console.log(values);
        dispatch(updateFormData({ values }));
    }
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                    <input type="text" placeholder="Username" {...register("Username")} />
                    <FaUser className="icon" />
                </div>
                <span>{errors.Username?.message}</span>
                <div className="input-box">
                    <input type="text" placeholder="Firstname" {...register("Firstname")} />
                    <FaUser className="icon" />
                </div>
                <span>{errors.Firstname?.message}</span>
                <div className="input-box">
                    <input type="text" placeholder="Lastname" {...register("Lastname")} />
                    <FaUser className="icon" />
                </div>
                <span>{errors.Lastname?.message}</span>
                <div className="input-box">
                    <input type="text" placeholder="Email" {...register("email")} />
                    <FaYahoo className="icon" />
                </div>
                <span>{errors.Email?.message}</span>
                <div className="input-box">
                    <select {...register("gender")}>
                        <option value="">Select Gender</option>
                        {gender.map((option, index) => (
                            <option key={index} value={option.value}>{option.text}</option>
                        ))}
                    </select>
                    <FaYahoo className="icon" />
                </div>
                <span>{errors.gender?.message}</span>
                <div className="input-box">
                    <input type="number" placeholder="Phone Number" {...register("Phone")} />
                    <FaYahoo className="icon" />
                </div>
                <span>{errors.Phone?.message}</span>
                <div className="input-box">
                    <input type="password" placeholder="Password" {...register("Password")} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" {...register("ConfirmPassword")} />
                    <FaUser className="icon" />
                </div>
                <span>{errors.ConfirmPassword?.message}</span>

                <button type="submit">Submit</button>
            </form>
            <button><Link to="/display">View Submitted Data</Link></button>
        </div>
    )
}

// map filter reducer find

