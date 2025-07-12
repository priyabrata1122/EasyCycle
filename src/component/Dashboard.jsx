import React, { useContext } from 'react'
import {FirebaseContext} from '../context/firebase.jsx';

function Dashboard() {

	const context=useContext(FirebaseContext);
	const auth =context.auth;
	console.log(auth);

    return (
        <div className='w-[97%] h-auto min-h-[40rem] mt-22 relative left-5'>

			<div className='border-1 border-black rounded-2xl w-full h-auto min-h-[10rem] mt-22 relative '>

			</div>

            <div>
                <h1></h1>
                <h2></h2>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Dashboard
