import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import "./css/peep.css"



const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: ``,
        handle: ``,
        email: ``,
        password: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = async (e) => {
        e.preventDefault();
        const { name, handle, email, password } = user;
        if (name && handle && email && password) {
            const res = await axios.post(`http://localhost:5000/register`, user);
            (res.data.message === "successful") ? navigate('/login') : alert(res.data.message);
            return;
        }
        alert(`Invalid input`);
    }

    return (
        <>

            <div className='card w-60  text-center' id="registercard" style={{ margin: "5% 20%" }}>
                <div className="card-header" >
                    <h3 style={{ display: "inline-block" }}>Create new account</h3>
                    <br></br>
                    <p style={{ display: "inline-block" }}>
                        Already have an account?&nbsp; </p>
                    <p><Link to="/login">Sign In</Link></p>
                </div>


                <div className="card-body">
                    <form onSubmit={register}>
                        <input className="formelement" type="name" id="create-account-name" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
                        <br />
                        <input className="formelement" type="handle" id="create-account-handle" name="handle" value={user.handle} onChange={handleChange} placeholder="Handle" />
                        <br />
                        <input className="formelement" type="email" id="create-account-email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                        <br />
                        <input className="formelement" type="password" id="create-account-password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                        <br />
                        <button className="formelement" type="submit">
                            Register
                        </button>
                    </form>
                    <NavLink to={{ pathname: "/allpeeps" }}>
                        <p>Or continue as guest</p>
                    </NavLink>
                </div>
            </div>

        </>
    );
}

export default Register;