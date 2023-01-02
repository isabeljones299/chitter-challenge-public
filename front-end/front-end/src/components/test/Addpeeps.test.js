// import { render, screen, waitFor, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
// import submitPeep from '../AddPeeps.jsx';
// import mockPeeps from '../../../../../back-end/testdata/mockpeeps.js'
// import AddPeepForm from '../AddPeeps.jsx';



// describe('Submit peep and update peep render tests', () => {

//     describe('handler call tests', () => {
//         test('should call submitPeep in Addpeeps when adding a new todo', async () => {

//             render(<MemoryRouter><AddPeepForm username={mockPeeps[0].peeperUsername} handle={mockPeeps[0].mockhandle} /></MemoryRouter>);

//             // const addLink = screen.getByText(/add todo/i);
//             // fireEvent.click(addLink);   // fireEvent wraps the act(() =>) which await waitFor(()=>) wraps

//             await waitFor(() => {
//                 const peepMessageInput = screen.getByPlaceholderText(/Enter your peep here/i)
//                 userEvent.type(peepMessageInput, mockPeeps[0].peepInputField);
//             })

            // jest.mock('../AddPeeps.jsx', () => {
            //     const submitPeep = jest.requireActual('../AddPeeps.jsx');

            //     return {
            //         ...submitPeep,
            //         __esModule: true,
            //         default: jest.fn(submitPeep.default)
            //     };
            // });

    //         const submitButton = screen.getByText(/Post/i)
    //         fireEvent.click(submitButton);
    //         // const spy = jest.spyOn(addPeepForm, 'submitPeep')
    //         await waitFor(() => screen.findByText(/Feed/i));  // Need this to let the component settle

    //         expect(this.submitPeep).toHaveBeenCalledTimes(1);
    //         expect(AddPeepForm.submitPeep).toHaveBeenCalledWith({
    //             peepMessage: mockPeeps[0].peepMessage,
    //             date: expect.any(String),
    //             peeperUsername: mockPeeps[0].peeperUsername,
    //             _id: null,
    //             handle: mockPeeps[0].mockhandle
    //         });
    //     });
    // })

    //         //   test('should call updateTodo in App when updating a new todo', async () => {

    //         //     const expectedReturn = { todos: sampleTodos };

    //         //     api.getTodos.mockImplementation(() => expectedReturn);
    //         //     api.updateTodo.mockImplementation(() => { return { todo: sampleTodos[2], status: 201 } });

    //         //     render(<MemoryRouter><App /></MemoryRouter>);

    //         //     await waitFor(() => {
    //         //       const editLinks = screen.getAllByText(/edit/i);
    //         //       userEvent.click(editLinks[0]);
    //         //       const submitButton = screen.getByDisplayValue(/submit/i)
    //         //       userEvent.click(submitButton);
    //         //     });

    //         //     // await waitFor(() => screen.getByText(/todo updated/i));
    //         //     await waitFor(async () => await waitFor(() => screen.getByText(/todo updated/i)));

    //         //     expect(api.updateTodo).toHaveBeenCalledTimes(1);
    //         //     expect(api.updateTodo).toHaveBeenCalledWith(sampleTodos[2]);
    //         //   });
    // });

    // describe('submit/update error tests', () => {

    //     test('should render post error message', async () => {

    //         api.submitTodo.mockImplementation(() => { return { error: { type: `post`, message: `Post error` } } });
    //         render(<MemoryRouter><App /></MemoryRouter>);

    //         const addLink = screen.getByText(/add todo/i);
    //         userEvent.click(addLink);
    //         const descInput = screen.getByPlaceholderText(/todo description/i);
    //         userEvent.type(descInput, sampleTodos[0].todoDescription);
    //         const submitButton = screen.getByDisplayValue(/submit/i)
    //         userEvent.click(submitButton);

    //         const postErrors = await waitFor(() => screen.getAllByText(/there was a problem adding the todo: post error/i));

    //         expect(postErrors.length).toBeGreaterThan(0);
    //     });
    // });
    //       test('should render a Put error message', async () => {
    //         const expectedReturn = { todos: sampleTodos };

    //         api.getTodos.mockImplementation(() => expectedReturn);
    //         api.updateTodo.mockImplementation(() => { return { error: { type: `put`, message: `Put error` } } });

    //         render(<MemoryRouter><App /></MemoryRouter>);

    //         await waitFor(() => {
    //           const editLinks = screen.getAllByText(/edit/i);
    //           userEvent.click(editLinks[0]);
    //           const submitButton = screen.getByDisplayValue(/submit/i)
    //           userEvent.click(submitButton);
    //         });

    //         const putError = await waitFor(() => screen.getByText(/there was a problem updating the todo: put error/i));

    //         expect(putError).toBeInTheDocument();
    //       });
    //     });
    //   });
// });