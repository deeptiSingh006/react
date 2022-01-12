import {render,screen} from '@testing-library/react';
import Deepti from './Deepti';
test('test for h1 element in Deepti',()=>{
    render(<Deepti/>)
    const linkElement=screen.getByText(/=========In Deepti Component=========/);
   // console.log(linkElement);
   expect(linkElement).toBeInTheDocument();

})