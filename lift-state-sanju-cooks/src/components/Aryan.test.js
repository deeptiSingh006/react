import { render, screen } from '@testing-library/react';
import Aryan from './Aryan';

test("loading of Aryan component",()=>{
    render(<Aryan/>);
    const linkElement = screen.getByText(/=========In Aryan Component=========/);
    expect(linkElement).toBeInTheDocument();

})


test("Did aryan eat aloo",()=>{
    render(<Aryan lunchVal="aloo"/>);
    const linkElement = screen.getByText(/Today I ate aloo/i);
    expect(linkElement).toBeInTheDocument();

})