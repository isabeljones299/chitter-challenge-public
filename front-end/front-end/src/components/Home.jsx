import React from "react"

import AllPeeps from "./AllPeeps";
import { NavLink } from "react-router-dom";
import "./css/peep.css"

const Home = ({ setLoginUser, user }) => {

    return (
        <>


            <div className="card" id="home">


                <h2 style={{ padding: "10% 10% 0%", textAlign: "center" }}>Welcome {user.name}!</h2>
                <div className="guestview" style={{ padding: "5% 10% " }}>
                    <button onClick={() => setLoginUser({})}>Log out</button>
                </div>
                <hr></hr>


                <div className="newpeep">
                    <NavLink to={{ pathname: "/addpeeps" }} >
                        <button type="button" style={{ color: "#1abc9c" }} className="btn">
                            CREATE NEW PEEP
                        </button>
                    </NavLink>
                </div>

                <AllPeeps user={user} />
            </div>
        </>
    )
};

export default Home;