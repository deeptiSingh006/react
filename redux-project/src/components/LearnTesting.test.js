import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import LearnTesting from "./LearnTesting";

describe('Testing Jest',()=>{
test('check Deepti on screen',()=>{
    //Arrange
    render(<LearnTesting/>);
    //act

    //asset
    const linkElement = screen.getByText(/Deepti/i);
    expect(linkElement).toBeInTheDocument();
});

test('check Jagmeet not on  screen',()=>{
    //Arrange
    render(<LearnTesting/>);
    //act

    //asset
    const linkElement = screen.queryByText(/Jagmeet/i);
    expect(linkElement).not.toBeInTheDocument();
});

test('on submit does Jagmeet not on  screen',()=>{
    //Arrange
    render(<LearnTesting/>);
    //act
    const buttonElement = screen.getByRole('button',{name:'Appear'});
    userEvent.click(buttonElement);

    //asset
    const linkElement = screen.queryByText(/Jagmeet/i);
    expect(linkElement).toBeInTheDocument();
});

})


