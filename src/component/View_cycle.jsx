import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase.jsx'
import { collection, getDocs, query, where } from 'firebase/firestore';

function View_cycle() {

    const context=useContext(FirebaseContext);
    const db=context.db;

    const [cycle,setCycle]=useState([]);

    useEffect(()=>{
        const fetchCycle=async ()=>{
            const q=query(collection(db,"Lend"),where("present","==",true));
            const snapShot=await getDocs(q);
            const allCycles=snapShot.docs.map(doc=>({id:doc.id, ...doc.data()}));
            setCycle(allCycles);
        }

        fetchCycle();
    },[db]);

    console.log(cycle);

    return (
        <div className='w-[97%] h-auto mt-22 mb-10 relative left-5 flex flex-col items-center min-h-[37rem]'>
            <h1 className='text-2xl md:text-4xl font-bold'>🚲 View Available Cycles </h1>

        </div>
    )
}

export default View_cycle;
