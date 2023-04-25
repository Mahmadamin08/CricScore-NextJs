import React, { useState } from 'react'
import Score from './score';
import Router from 'next/router';

const MatchEntry = () => {

    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [batFirst, setBatFisrt] = useState("");
    const [noOfOver, setNoOfOver] = useState("");
    const [noOfPlay, setNoOfPlay] = useState("");

    const Submit = (e) => {

        e.preventDefault();
        alert(team1 + " " + team2 + "  " + batFirst + " " + noOfOver);
        Router.push({
            pathname: "/score",
            query: {
                team1,
                team2,
                batFirst,
                noOfOver,
                noOfPlay
            },
        });
    }

    return (
        <div className='m-auto bg-[url("/bg.jpg")] bg-cover lg:bg-cover h-screen lg:h-screen bg-white px-20 py-10 '>
            <h1 className='text-black font-extrabold text-3xl
            text-center mb-10'>Score Your Match</h1>
            <form className='text-black border-2 px-4 py-6 ' onSubmit={Submit} >
                <div className="m-2">
                    <label htmlFor="team1">Team 1 :- </label>
                    <input required type="text" onChange={e => setTeam1(e.target.value)} className='border-black border-b-2 te' name='team1' id='team1' />
                </div>
                <div className="m-2">
                    <label htmlFor="team1">Team 2 :- </label>
                    <input required type="text" onChange={e => setTeam2(e.target.value)} className='border-black border-b-2 te' name='team1' id='team1' />
                </div>
                <div className="m-2">
                    <label htmlFor="team1">Batting Team :- </label>
                    <select required name="batTeam" id="" onChange={e => setBatFisrt(e.target.value)}>
                        <option value="team1">{team1}</option>
                        <option value="team2">{team2}</option>
                    </select>
                </div>
                <div className="m-2">
                    <label htmlFor="team1">Number of Overs :- </label>
                    <input required type="number" onChange={e => setNoOfOver(e.target.value)} className='border-black border-b-2 te' name='team1' id='team1' />
                </div>
                <div className="m-2">
                    <label htmlFor="team1">Number of Players :- </label>
                    <input required type="number" onChange={e => setNoOfPlay(e.target.value)} className='border-black border-b-2 te' name='team1' id='team1' />
                </div>
                <button type='submit' className='bg-red-400 justify-center items-center px-4 mx-auto'>Start </button>
            </form>
        </div>
    )
}

export default MatchEntry
