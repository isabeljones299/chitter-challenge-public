
import React, { useState, useEffect } from "react"
import axios from 'axios';
import PeepModel from "./utils/Peep.model";
import Peep from "./Peep"
import "./css/login.css"
import { NavLink, useLocation } from "react-router-dom";



const AllPeeps = ({ loggedIn, setLoginUser, user }) => {


    const [peepData, setPeepData] = useState([]);
    const [errorStatus, setErrorStatus] = useState();


    const { state } = useLocation();
    console.log(loggedIn)
    const getPeepData = async () => {

        try {
            const res = await axios.get(`http://localhost:5000/allpeeps`);

            setPeepData(res.data);

        } catch (e) {
            console.log(e);
            setErrorStatus(e.message);
        }
    };

    useEffect(() => {

        getPeepData();

    }, []);


    const sortedPeepsList = peepData?.sort((a, b) => (new Date(b.date)) - (new Date(a.date)))
    const peepsList = sortedPeepsList.map(currentPeep => {
        const { peepMessage, date, peeperUsername, _id, handle } = currentPeep
        const peep = new PeepModel(peepMessage, date, peeperUsername, handle)
        return <Peep peep={peep} key={_id} />
    })


    if (!user.email) {

        return (
            <>
                <div className="card" id="home">
                    <h2 style={{ padding: "10% 10% 0%", textAlign: "center" }}>Hello guest!</h2>
                    <div className="guestview" style={{ padding: "5% 10% " }}>
                        <NavLink to="/login">
                            <button id="signin" >
                                Log In
                            </button>
                        </NavLink>

                    </div>
                    <hr></hr>
                    <p>Most recent peeps...</p>
                    {peepsList}
                </div>

            </>

        );
    } else {

        return (
            <>
                <p>Most recent peeps...</p>
                {peepsList}
            </>
        )
    }
}


export default AllPeeps;