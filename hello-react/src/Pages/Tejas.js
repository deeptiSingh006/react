
import { useSelector } from "react-redux";


function Tejas() {
  const valt=useSelector(state => state.valt);
    return (
      <div style={{color:'pink'}}>
       loving tejas from deepti by {valt}
      </div>
    );
  }
  
  
  export default Tejas;