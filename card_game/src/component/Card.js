import React from 'react';
import { useState, useEffect, useRef } from 'react';
import deck from './Deck';
function Card() {
    let card_index;


    const [deckcards, setdeckcards] = useState(deck);
    const [cc, setCC] = useState([]);
    const [pc, setPC] = useState([]);
    const [dealNum, setDealNum] = useState(0);
    const [winner,setWinner]=useState();

    useEffect(() => {
            console.log("Player Cards");
            console.log(pc);

            console.log("Computer Cards");
            console.log(cc);

            let sumCC = 0
            for (let i = 0; i < cc.length; i++) {
                sumCC = sumCC + Number(cc[i].value);
            }

            let sumPC = 0
            for (let i = 0; i < pc.length; i++) {
                sumPC = sumPC + Number(pc[i].value);
            }

            if (sumPC > 21 || sumCC > 21) {
                if (Math.abs(21 - sumPC) < Math.abs(21 - sumCC)) {
                    console.log("Player Won!");
                    setWinner("Player Won!");
                }
                else {
                    console.log("Computer Won!");
                    setWinner("Computer Won!");
                }
            }
    }, [cc]);



    useEffect(() => {
        if(dealNum >0 ){
        card_index = Math.floor(Math.random() * deckcards.length)
        let card=deckcards[card_index];
        deckcards.splice(card_index,1);
        setdeckcards([...deckcards]);
        setCC(cc => [...cc, card])
        }
    },[pc]);



    function handleDeal(event) {
        event.preventDefault();
        setDealNum(1)
        card_index = Math.floor(Math.random() * deckcards.length)
        let card=deckcards[card_index]
        deckcards.splice(card_index,1)
        setdeckcards([...deckcards]);
        //update dealcount 

        setPC(pc => [...pc, card]);
    }

    return (

        <div>
            <label >Computer cards</label>
            <div className="p-10 grid grid-cols-3 gap-2">
                {cc.map((a,index)=>{
                    let name=a.value+a.suit[0].toUpperCase()+'.png'
                    return (<div className="rounded overflow-hidden shadow-lg  " key={index}><img className="h-25 w-40" src={name} alt={name}></img></div>)})
                }

            </div>
            <label >Player cards</label>
            <div className="p-10 grid grid-cols-3 gap-2">
                {pc.map((a,index)=>{
                    let name=a.value+a.suit[0].toUpperCase()+'.png'
                    return (<div className="rounded overflow-hidden shadow-lg  " key={index}><img className="h-25 w-40" src={name} alt={name}></img></div>)})
                }

            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleDeal}>#DEAL</button>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >#SKIP</button>
            </div>
            <div className="px-10 pt-4 pb-2">
                <h3 className=" inline-block  border-8 border-double bg-gray-200 rounded-full px-3 py-1 text-2xl font-bold text-gray-700 mr-2 mb-2" >score is : {winner}</h3>
            </div>

        </div>


    );
}
export default Card;