import {useSelector} from 'react-redux';
import classes from './Jagmeet.module.css';
function Jagmeet() {
  const valj=  useSelector(state => state.valj);

    return (
      <div className={classes.divStyle}>
        Telling About Jagmeet
        <h1> Love from Deepti :{valj} times</h1>
      </div>
    );
  }
  
  export default Jagmeet;