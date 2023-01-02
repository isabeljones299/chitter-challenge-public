import PropTypes from 'prop-types';

import PeepModel from "./utils/Peep.model"
import "./css/peep.css"

const Peep = ({ peep }) => {
    const { peepMessage, date, peeperUsername, handle } = peep;
    const dateCreated = new Date(date).toUTCString();

    return (
        <>
            <div className="card" id='peepcard' >

                <div className="card-header">
                    <h5>{peeperUsername} @{handle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{peepMessage}<br /><br />~ {dateCreated}</li>
                </ul>
            </div>

        </>
    );
};

Peep.propTypes = {
    todo: PropTypes.instanceOf(PeepModel),
  
}

export default Peep;