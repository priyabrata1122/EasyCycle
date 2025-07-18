import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase.jsx'
import { collection, getDocs, query, where } from 'firebase/firestore';

function View_cycle() {

    const context = useContext(FirebaseContext);
    const db = context.db;

    const [cycle, setCycle] = useState(null);

    useEffect(() => {
        const fetchCycle = async () => {
            const q = query(collection(db, "Lend"), where("present", "==", true));
            const snapShot = await getDocs(q);
            const allCycles = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCycle(allCycles);
        }

        fetchCycle();
    }, [db]);

    // console.log(cycle);

    return (
        <div className='w-[97%] h-auto mt-22 mb-10 relative left-5 flex flex-col items-center min-h-[34.5rem]'>
            <h1 className='text-2xl md:text-4xl font-bold'>View Available Cycles 🚲</h1>

            {
                cycle ?
                    <div className='h-auto w-[90%] mt-10 flex flex-col gap-5'>
                        {
                            cycle.map((item, idx) => (
                                <div key={idx} className='h-auto w-full bg-gray-200 rounded-2xl p-3 flex flex-col justify-center items-center '>
                                    <img src={item.imgURL} alt="cycle_IMG" className='w-80 h-50 rounded-2xl' />
                                    <div className='w-auto'>
                                        <h1 className='text-xl'>Lender Name : <span className='text-xl text-gray-500'>{item.name}</span></h1>
                                        <h1 className='text-xl'>Cycle ID : <span className='text-xl text-gray-500'>{item.cycleID}</span></h1>
                                        <h1 className='text-xl'>Cycle Model : <span className='text-xl text-gray-500'>{item.cycleModel}</span></h1>
                                        <h1 className='text-xl'>Present Hostel : <span className='text-xl text-gray-500'>{item.hostel}</span></h1>
                                        <h1 className='text-xl'>Condition : <span className='text-xl text-gray-500'>{item.condition}</span></h1>
                                        <h1 className='text-xl'>Available From : <span className='text-xl text-gray-500'>{item.available}</span></h1>
                                        <h1 className='text-xl'>Description : <span className='text-xl text-gray-500'>{item.notes}</span></h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <h1 className='text-2xl mt-10'>Currently No available Cycles</h1>
            }


        </div>
    )
}

export default View_cycle;
