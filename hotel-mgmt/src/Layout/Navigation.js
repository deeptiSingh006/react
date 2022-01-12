import {Link} from 'react-router-dom';
import Tabs, { TabPane } from 'rc-tabs';
function Navigation (){
    return(
    <header>
      <div>
       <h1> Practo </h1>
      </div>
      <div>
        <nav>
        <Link to='/generalpath'><General/></Link>}>
        </nav>
      </div>
        
      
    </header>
       
   

    )};
export default Navigation;