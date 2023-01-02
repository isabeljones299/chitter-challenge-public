import axios from "axios"
import React, { useState } from "react"
import "./css/newpeep.css"
import PeepModel from './utils/Peep.model';
import { NavLink, useNavigate } from "react-router-dom";


const AddPeepForm = ({ username, handle }) => {

    const [postError, setPostError] = useState(``);
    const navigate = useNavigate();


    const handleSubmit = async event => {
        console.log("handleSubmit called")
        event.preventDefault();

        const newPeep = new FormData(event.target);

        const value = Object.fromEntries(newPeep.entries());


        submitPeep(value)
    }



    const submitPeep = async peep => {
        console.log("submitPeep in addPeeps")
        try {

            const date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString()

            const newPeep = new PeepModel(peep.peepInputField, date, username, handle)

            const response = await axios.post(`http://localhost:5000/addPeeps`, newPeep);

            setPostError(`Peep added in submit peep`);
            alert("peep added")
            navigate(-1)
        }
        catch (e) {
            setPostError(`There was a problem adding the peep: ${e.message}`);
        }

    }


    return (
        <div>


            <div className="card w-50 text-right" style={{ backgroundColor: "#1abc9c", margin: "5% 25%" }}>

                <form onSubmit={handleSubmit}>


                    <textarea className="peepinput" style={{ minHeight: "100px", margin: "5%", verticalAlign: "text-top" }} type="text" id="peepInput" name="peepInputField" placeholder="Enter new peep here..." ></textarea>
                    <button className="peepinput" style={{ margin: "5%" }} type="submit">Post</button>
                </form>

                <NavLink to={{ pathname: "/" }}  >
                    <button type="button" style={{ backgroundColor: "#1abc9c", color: "white", borderRadius: "4px" }} className="btn">
                        <h2>GO BACK TO FEED</h2>
                    </button>
                </NavLink>


            </div>
        </div >
    )

}

export default AddPeepForm;