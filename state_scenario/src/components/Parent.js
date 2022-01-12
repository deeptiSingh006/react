import Child1 from './Child1';
import Child2 from './Child2';
import {useState} from 'react';
function Parent()
{ const[hi,sethi]=useState('hi');
 const changeHi=(ab)=>{sethi(ab);}
    return(
        <div>
            <label> Child1 says {hi} to parent</label>
            <Child1 changehi={changeHi} check={hi} />
            <Child2 check={hi}/>
        </div>
    ); 

}
export default Parent;