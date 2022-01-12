import { useSelector } from "react-redux";


function Aryan() {
  const vala=useSelector(state => state.vala);
    return (
      <div>
       loving aryan from deepti by {vala}
      </div>
    );
  }
  
  export default Aryan;