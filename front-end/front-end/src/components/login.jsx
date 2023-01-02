import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, Navigate, useLocation, NavLink } from 'react-router-dom';
import "./css/login.css"

const Login = ({ setLoginUser }) => {
    const [user, setUser] = useState({
        email: ``,
        password: ``
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });

    };
    useEffect(() => {
        if (loggedIn) {
            console.log(loggedIn)

        }
    }, [loggedIn]);

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:5000/login`, user);
        alert(res.data.message); // change this to a <span> or better
        setLoggedIn((res.data.user ? true : false))
        setLoginUser(res.data.user);
        setUser({ email: ``, password: `` })

    };


    return (

        <>
            {loggedIn && <Navigate to="/" state={{ from: location, loggedIn: loggedIn }} />}

            <div className="card w-60" style={{ margin: "5% 20%" }}>

                <div className="card-header" >
                    <div className="buttons">
                        <h4>Sign in</h4>

                        <NavLink to={{ pathname: "/allpeeps" }} state={user}>
                            <button type="button" className="btn">
                                Continue as guest
                            </button>
                        </NavLink>
                        <Link to="/register">
                            <button type="button" className="btn">
                                Register
                            </button>
                        </Link>

                    </div>
                </div>

                <form onSubmit={login}>
                    <input className='inputbox' style={{ margin: "5% 5% 0% 5%" }} type="email" id="sign-in-email" name="email" value={user.email} onChange={handleChange} placeholder="Your email" />
                    <br />
                    <input className='inputbox' style={{ margin: "5% 5% 0% 5%" }} type="password" id="sign-in-password" name="password" value={user.password} onChange={handleChange} placeholder="Your password" />
                    <br />

                    <input className='inputboxsubmit' style={{ margin: "5%" }} type="submit" value="Login" />
                </form>

            </div>

        </>
    );
}
export default Login;