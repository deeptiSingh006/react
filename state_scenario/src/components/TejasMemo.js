import {memo} from 'react';
function TejasMemo(props){
    console.log("in tejas");
    return(
        <div>
            <label>I am doing {props.tejashw}</label>
        </div>
    );
}
export default memo(TejasMemo);