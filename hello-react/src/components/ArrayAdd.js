
function ArrayAdd(){
    const array1 = [1, 2, 3, 4];
    function addReduceHandler()
    { var sum=0;
        array1.map((i)=>{
            sum=sum+i;
        })
        console.log(sum);
    }

 
    return(
        <button onClick={addReduceHandler}>Add Array</button>
    )
}

export default ArrayAdd;