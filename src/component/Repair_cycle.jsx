import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../context/firebase.jsx'

function getVisTime(isUrgent) {
    const now = new Date();

    if (isUrgent) {
        const urgentDate = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        return changeVisTime(urgentDate, "(Urgent)");
    }
    else {
        const next = new Date(now);
        next.setDate(next.getDate() + 1);
        next.setHours(10, 0, 0, 0);
        return changeVisTime(next, "");
    }
}

function changeVisTime(dateObj, suffix = "") {
    const visitTime = dateObj.toLocaleString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    }) + (suffix ? `${suffix}` : "");

    const visitDate = dateObj.toISOString();
    return { visitTime, visitDate };
}

function Repair_cycle() {

    const context = useContext(FirebaseContext);
    const db = context.db;
    const [repair, setRepair] = useState({
        cycleID: "",
        issue: "",
        hostel: "",
        isUrgent: false,
    });


    const handleOnChange = (field, value) => {
        setRepair({
            ...repair,
            [field]: value
        });
    }

    // console.log(repair);

    return (
        <div className='w-[97%] h-auto mt-22 mb-10 relative left-5 flex flex-col items-center min-h-[34.5rem]'>
            <h2 className="text-2xl font-bold">🔧 Report Cycle for Repair</h2>
            <form className="w-[65%] mt-5 p-4 shadow-xl rounded space-y-4">

                <label className="block">
                    <span className="text-gray-700 text-[17px] md:text-[25px]">Cycle ID</span>
                    <input
                        onChange={(e) => {
                            handleOnChange("cycleID", e.target.value);
                        }}
                        type="text"
                        name="cycleID"
                        placeholder="Enter your Cycle ID"
                        className="mt-1 block w-full border rounded p-2"
                        required
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700 text-[17px] md:text-[25px]">Issue Description</span>
                    <textarea
                        onChange={(e) => {
                            handleOnChange("issue", e.target.value);
                        }}
                        name="issue"
                        placeholder="Describe the problem with your cycle"
                        className="mt-1 block w-full border rounded p-2"
                        required
                    ></textarea>
                </label>

                <label className="block">
                    <span className="text-gray-700 text-[17px] md:text-[25px]">Hostel</span>
                    <select
                        onChange={(e) => {
                            handleOnChange("hostel", e.target.value);
                        }}
                        name="hostel"
                        className="mt-1 block w-full border rounded p-2"
                        required
                    >
                        <option value="">Select Hostel</option>
                        <option value="VS Hall">VS Hall</option>
                        <option value="SD Hall">SD Hall</option>
                        <option value="MV Hall">MV Hall</option>
                        <option value="GDB Hall">GDB Hall</option>
                        <option value="DBA Hall">DBA Hall</option>
                        <option value="MSS Hall">MSS Hall</option>
                        <option value="HB Hall">HB Hall</option>
                        <option value="BF Hall">BF Hall</option>
                        <option value="KMS Hall">KMS Hall</option>
                        <option value="CVR Hall">CVR Hall</option>
                    </select>
                </label>

                <label className="block">
                    <span className="text-gray-700 text-[17px] md:text-[25px]">Mark as Urgent</span>
                    <div className="mt-2">
                        <input
                            type="checkbox"
                            name="isUrgent"
                            className="mr-2"
                            onChange={(e) => {
                                handleOnChange("isUrgent", e.target.value);
                            }}
                        />
                        <span className="text-gray-600">This issue needs quick attention</span>
                    </div>
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Submit Repair Request
                </button>
            </form>
        </div>
    )
}

export default Repair_cycle;
