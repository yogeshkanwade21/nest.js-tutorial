import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("email", email);
        console.log("name", name);
        console.log("password", password);

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h2><center>Sign Up</center></h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input type="text"
                    required
                    placeholder='Enter Name' 
                    autoComplete='off' 
                    name='name' 
                    className='form-control rounded-0'
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    required
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={handleChange}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    required
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={handleChange}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Sign Up
                </button>
            </form>
            <div className="d-flex justify-content-start mt-3">
                <p className="mb-0">Already have an account?</p>
                <Link to="/login" className="text-decoration-none">
                    Login
                </Link>
            </div>
                
            
        </div>
    </div>
  );
}

export default Signup;