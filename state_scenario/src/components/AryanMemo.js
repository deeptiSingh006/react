import {memo} from 'react';
function AryanMemo(props){
  console.log('in aryan');
    return(
        <div>
                        <label>I am doing {props.aryanhw}</label>
        </div>
    );
}
export default memo(AryanMemo);