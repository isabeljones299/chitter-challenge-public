import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../index.js';
import Peep from '../models/Peep.js';
import mockPeeps from '../testdata/mockpeeps.js';
import testPeep from "../testdata/oneTestPeep.js"
import badPeep from "../testdata/badPeep.js"

chai.use(chaiHttp);

describe('Server/DB integration tests on requests to "/allpeeps".', () => {

    beforeEach(async () => {

        try {
            await Peep.deleteMany();
            console.log(`peeps collection cleared`);
        } catch (error) {
            console.log(`Error clearing peeps collection`);
            throw new Error(`Clearing database error`);
        }

        try {
            await Peep.insertMany(mockPeeps);
            console.log(`Test peep inserted into peeps collection`);
        } catch (error) {
            console.log(error)
            console.log(`Error inserting into peeps collection`);
            throw new Error(`Insert into database error`);
        }
    });

    it('should return the mockpeep inserted into peeps collection', async () => {
        // Arrange
        console.log("in test")
        // Get a server running for the tests
        const res = await chai.request(server)
            // Act
            // Make the request to the server on the right route
            .get(`/allpeeps`)
            // Send the request
            .send();

        // Assert
        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.equal(mockPeeps.length);

    });

    describe('POST tests', () => {

        it('should add a new peep to the peeps collection with a POST request', async () => {
            // Arrange
            const res = await chai.request(server)
                // Act
                .post(`/addPeeps`)
                .send(testPeep[0]);
            // Assert
            expect(res).to.have.status(201);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`peeperUsername`).equal(testPeep[0].peeperUsername);
        });

        it('should return status 422 if bad peep object is sent', async () => {
            // Arrange
            const res = await chai.request(server)
                // Act
                .post(`/addPeeps`)
                .send(badPeep[0]);

            // Assert
            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`error`);
        });

    });

});