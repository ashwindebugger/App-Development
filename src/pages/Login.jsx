import React, { useState } from 'react'
import Header from '../components/Home/Header'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = {};
        if (!formData.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid';
        }
        if (!formData.password) errors.password = 'Password is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            console.log(formData);
        }
    }
  return (
    <div>
        <Header />
        <div className="flex justify-center items-center h-[80vh]">
            <div className="w-[600px] p-5 border border-gray-300 rounded-xl shadow-xl bg-red-300">
                <h1 className="text-2xl font-semibold text-center ">Login</h1>
                <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name='email' className="p-2 border border-gray-300" value={formData.email} onChange={handleChange}/>
                    {errors.email && <p className='text-red-500'>{errors.email}</p>}
                    <input type="password" placeholder="Password" name='password' className="p-2 border border-gray-300" value={formData.password} onChange={handleChange}/>
                    {errors.password && <p className='text-red-500'>{errors.password}</p>}
                    <button type="submit" className="bg-black text-white p-2 rounded-lg">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login