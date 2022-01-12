import data from '../data/data.json'
function FamilyMembers(props){
    return( 
    <>
    <h1>Family Members </h1>
    <ul>
        {data.map( (i) => {
           return  <li key={i.id}>{i.name}</li>
         })}
    </ul>
    <h2>Hello how are all you  </h2>
    <h3>Hello {props.Name}</h3>
    </>
     )

}
export default FamilyMembers;