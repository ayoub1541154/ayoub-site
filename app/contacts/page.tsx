"use client"
import { useState } from "react"

export default function Contacts(){
    const [number, setNumber] = useState(0);

    function retier(){
        if(number > 0) {
            setNumber(()=>number-1);
        }else{
            setNumber(0);
        }
    }

    function ajouter(){
        setNumber(()=>number+1)
    }



    return (
        <div className="min-w-2xl mx-auto mt-20 flex justify-between items-center">
            <button onClick={()=>ajouter()} className="bg-blue-400 p-2 w-20 h-20 rounded text-2xl font-bold active:bg-blue-700">+</button>
                <div className="text-5xl font-bold">{number}</div>
             <button onClick={()=>retier()} className="bg-red-400 p-2 w-20 h-20 rounded text-2xl font-bold active:bg-red-700">-</button>
        </div>
    )
}