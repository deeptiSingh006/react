import { render, screen } from '@testing-library/react';
import App from '../App';
import FamilyMembers from './FamilyMembers';

// Arrange 
// Act
// Assess Results

//Testing Suite 
describe('Family Memebers Compoent ',()=>{
    test('See if Deepti is on screen ',()=>{
        // Arrange 
        render(<FamilyMembers  Name="Deepti Family"/>)
    
        //Act 
        //... Nothing for now but actions likes button clicks can be written there 
    
        // Asset 
        const linkElement=screen.getByText(/DeeptiJI/);
        expect(linkElement).toBeInTheDocument();
    })
    
    test('See if Jagmeet is on screen ',()=>{
        render(<FamilyMembers  Name="Deepti Family" />)
        const linkElement=screen.getByText(/Jagmeet/);
        expect(linkElement).toBeInTheDocument();
    })
    
    test('See if Aryan is on screen ',()=>{
        render(<FamilyMembers  Name="Deepti Family" />)
        const linkElement=screen.getByText(/Aryan/);
        expect(linkElement).toBeInTheDocument();
    })
    
    test('See if Tejas is on screen ',()=>{
        render(<FamilyMembers Name="Deepti Family" />)
        const linkElement=screen.getByText(/Tejas/);
        expect(linkElement).toBeInTheDocument();
    })

    test('See if "Hello Deepti Family" is on screen',()=>{
        render(<FamilyMembers Name="Deepti Family"/>)
        const linkElement=screen.getByText(/Hello Deepti Family/);
        expect(linkElement).toBeInTheDocument();
    })
    
    /*test('See if Romeo is on screen ',()=>{
        render(<FamilyMembers  />)
        const linkElement=screen.getByText(/Romeo/);
        expect(linkElement).toBeInTheDocument();
    })*/

})


