// In this component a prop will be pased form App.js
// In the prop a name will come and we will display that name in Hello i.e. Hello Deepti! 
function PropsEx(props){
    // Helps to write the JSX
    // props is the paramter that get passed from parent component we can name it anything but 
    // as a industry standard we name it prop 
    return (
        <div> 
            <text> {"Hello "+props.name + " !"}</text> 
        </div>
    );

}

export default PropsEx;