import { render, screen } from '@testing-library/react';
import SayHello from './SayHello';
import userEvent from '@testing-library/user-event';
// Arrange 
// Act
// Asset Results

//Testing Suite 
describe('SayHello Component Test Suite',()=>{
    test('See if "Now you have new greetings" is on screen ',()=>{
        // Arrange 
        render(<SayHello/>)
    
        //Act 
        //... Nothing for now but actions likes button clicks can be written there 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        // Asset 
        const linkElement=screen.getByText(/Now you have new greetings/);
        expect(linkElement).toBeInTheDocument();
    })

    test('See if following text disappaears from screen "Disappear this text on click" ',()=>{
        // Arrange 
        render(<SayHello/>)
    
        //Act 
        //... Nothing for now but actions likes button clicks can be written there 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        // Asset 
        const linkElement=screen.queryByText(/Disappear this text on click/);
        expect(linkElement).not.toBeInTheDocument();
    })
})
    
    
    