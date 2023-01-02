export default class PeepModel {
    constructor(peepMessage, date, peeperUsername, handle, _id) {
        this.peepMessage = peepMessage;
        this.handle = handle;
        this.date = date;
        this.peeperUsername = peeperUsername;
        this._id = _id

    }
}

//give peep form a real date when new peep posted

// alart if not signed in tring to post a peep will fail bc no username

//also:
// react_devtools_backend.js:4012 Warning: Each child in a list should have a unique "key" prop.
//Check the render method of`AllPeeps`.See https://reactjs.org/link/warning-keys for more information.