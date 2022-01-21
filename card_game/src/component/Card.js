import React from 'react';
import {useState} from 'react';
function Card(){


    return(
       
<div> 
       <label >Computer cards</label>   
       <div class="p-10 grid grid-cols-3 gap-2">
       <div class="rounded overflow-hidden shadow-lg">
       <img class="w-full" src="/mountain1.jpg" alt="Mountain"></img></div>
      < div class="rounded overflow-hidden shadow-lg">
       <img class="w-full" src="/mountain2.jpg" alt="Mountain"></img></div>
      < div class="rounded overflow-hidden shadow-lg">
       <img class="w-full" src="/mountain3.jpg" alt="Mountain"></img></div>
       </div>
       <label >Player cards</label>   
       <div class="p-10  grid grid-cols-3 gap-2">
       <div class="rounded overflow-hidden shadow-lg">
       <img class="w-full" src="/1.jpg" alt="Mountain"></img></div>
      < div class="rounded overflow-hidden shadow-lg">
       <img class="w-full" src="/2.jpg" alt="Mountain"></img></div>
      < div class="rounded overflow-hidden shadow-lg">
       <img class="w-full" src="/3.jpg" alt="Mountain"></img></div>
       </div>
       <div class="px-6 pt-4 pb-2">
        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DEAL</button>
        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SKIP</button>
       </div> 
       <div class="px-10 pt-4 pb-2">
       <h3>score is :</h3>
       </div>

</div>
     
     
    );
}
export default Card;