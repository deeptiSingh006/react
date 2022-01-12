import {render,screen} from '@testing-library/react';
import Sanju from './Sanju';
import userEvent from '@testing-library/user-event';
test('onclick form loading in Sanju component',()=>{
    //Arrange
    render(<Sanju/>);
    //Act
    const linkElement=screen.getByPlaceholderText('enter item');
    //console.log(linkElement);
    userEvent.type(linkElement,"Sandwitch");
    
    const buttonElement=screen.getByRole('button');
    //console.log(buttonElement);
    userEvent.click(buttonElement);
    //Assert
    const h2Element=screen.getByText(/Sanju has cooked Sandwitchs/);
   // console.log(linkElement);
   expect(h2Element).toBeInTheDocument();


}) 