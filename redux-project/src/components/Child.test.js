import { screen , render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; 
import Child from "./Child";
describe('kids count',()=>{
    test('test for text KIDS',()=>{
        // ARRANGE
        render(<Child/>);

        //ACT

        //ASSERT
        const kid=screen.getByText(/KIDS/i);
        expect(kid).toBeInTheDocument();
    })
    test('test for Display button',()=>{
        // ARRANGE
        render(<Child/>);

        //ACT
        const button1=screen.getByRole('button',{name:'Display'});
        userEvent.click(button1)

        //ASSERT
        const kid1=screen.queryByText(/2/i);
        expect(kid1).toBeInTheDocument();
    })
})