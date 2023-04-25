import React, { useState } from 'react'
import { useRouter } from 'next/router';

const Score = () => {

    const router = useRouter();
    const {
        query: { team1, team2, batFirst, noOfOver, noOfPlay }
    } = router;
    const props = { team1, team2, batFirst, noOfOver, noOfPlay };

    const [CurrentBatingTeam, setCurrentBatingTeam] = useState(props.batFirst);
    const [runs, setRuns] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [players, setPlayers] = useState(props.noOfPlay)
    const [over, setOver] = useState(0);
    const [ball, setBall] = useState(0);
    const [currentRR, setCurrentRR] = useState(0);
    const [Extra, setExtra] = useState(0);
    const [thisOver, setThisOver] = useState([]);
    const [target, setTarget] = useState(0);
    const [runNeeded, setRunNeeded] = useState(target);
    const [ballremainning, setBallRemain] = useState(props.noOfOver * 6);
    const [requredRR, setRequredRR] = useState(0);
    const [isSecoundInnig, setIsSecoundInning] = useState(false);

    const UpdateOver = () => {
        if (ball == 5 && props.noOfOver - 1 != over) {
            if (!isSecoundInnig && over == props.noOfOver - 1) {
                
                // setIsSecoundInning(true);
            }
            else {
                setOver(over + 1);
            }
            setBall(0);
            setThisOver([]);
        }
        else if (ball == 6 && props.noOfOver - 1 == over) {
            alert("1 Inning Compelte");
            setTarget(runs + 1);
            setRunNeeded(runs + 1);
            RestartAfterOneInning();
            setIsSecoundInning(true);
        }
        isWinOrLose();
    }

    const Zero = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
        }
        setBall(ball + 1);
        setThisOver([...thisOver, "0  "]);
        UpdateOver();
        isWinOrLose()
    }
    const One = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - 1);
        }
        setRuns(runs + 1);
        setBall(ball + 1);
        setThisOver([...thisOver, "1  "]);
        UpdateOver();
        isWinOrLose()
    }
    const Two = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - 2);
        }
        setRuns(runs + 2);
        setBall(ball + 1);
        setThisOver([...thisOver, "2  "]);
        UpdateOver();
        isWinOrLose()
    }
    const Three = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - 3);
        }
        setRuns(runs + 3);
        setBall(ball + 1);
        setThisOver([...thisOver, "3  "]);
        UpdateOver();
        isWinOrLose()
    }
    const Four = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - 4);
        }
        setRuns(runs + 4);
        setBall(ball + 1);
        setThisOver([...thisOver, "4  "]);
        UpdateOver();
        isWinOrLose()
    }
    const Five = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - 5);
        }
        setRuns(runs + 5);
        setBall(ball + 1);
        setThisOver([...thisOver, "5  "]);
        UpdateOver();
        isWinOrLose()
    }
    const Six = () => {
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - 6);
        }
        setRuns(runs + 6);
        setBall(ball + 1);
        setThisOver([...thisOver, "6  "]);
        UpdateOver();
        isWinOrLose()
    }

    const WD = () => {
        let ext = prompt("Any Extra Runs ?");
        if (ext == '') {
            ext = 0;
        }
        if (isSecoundInnig) {
            setRunNeeded(runNeeded - 1 - parseInt(ext));
        }
        setRuns(runs + 1 + parseInt(ext))
        setExtra(Extra + parseInt(ext) + 1);
        setThisOver([...thisOver, "WD  "]);
        UpdateOver();
        isWinOrLose()
    }
    const NB = () => {
        let ext = prompt("Any Extra Runs ?");
        if (ext == '') {
            ext = 0;
        }
        if (isSecoundInnig) {
            setRunNeeded(runNeeded - 1 - parseInt(ext));
        }
        setRuns(runs + 1 + parseInt(ext))
        setExtra(Extra + parseInt(ext) + 1);
        setThisOver([...thisOver, "NB  "]);
        UpdateOver();
        isWinOrLose()
    }

    const BYE = () => {
        let ext = prompt("Enter Extra Runs ?");
        if (ext == '') {
            ext = 0;
        }
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - parseInt(ext));
        }
        setRuns(runs + parseInt(ext))
        setExtra(Extra + parseInt(ext))
        setBall(ball + 1);
        setThisOver([...thisOver, "BYE  "]);
        UpdateOver();
        isWinOrLose()
    }
    const LB = () => {
        let ext = prompt("Enter Extra Runs ?");
        if (ext == '') {
            ext = 0;
        }
        if (isSecoundInnig) {
            setBallRemain(ballremainning - 1)
            setRunNeeded(runNeeded - parseInt(ext));
        }
        setRuns(runs + parseInt(ext))
        setExtra(Extra + parseInt(ext))
        setBall(ball + 1);
        setThisOver([...thisOver, "LB  "]);
        UpdateOver();
        isWinOrLose()
    }
    const Out = () => {
        if (!isSecoundInnig && wicket == parseInt(players) - 2) {
            alert("All Out");
            setTarget(runs + 1);
            setRunNeeded(runs + 1);
            setIsSecoundInning(true);
            RestartAfterOneInning();
        }
        else if (isSecoundInnig && wicket == parseInt(players) - 1) {
            alert("You Lose a Match")
            Restart();
        }

    }
    const RestartAfterOneInning = () => {
        setBall(0);
        setWicket(0);
        setOver(0);
        setExtra(0);
        setRuns(0);
    }
    const RestartMatch = () => {
        setBall(0);
        setWicket(0);
        setOver(0);
        setExtra(0);
        setRuns(0);
        setBallRemain(0);
        setCurrentBatingTeam("");
        setCurrentRR(0)
        setIsSecoundInning(false)
        setRunNeeded(0)
        setRequredRR(0)
        setTarget(0)
        setThisOver([])
        setPlayers(0);
        router.push('/')
    }
    const isWinOrLose = () => {
        if (isSecoundInnig && wicket == parseInt(props.noOfPlay - 1) && runNeeded > 0) {
            alert("Lose the Match!!")
            RestartMatch();
        }
        else if (isSecoundInnig && runNeeded <= 0) {
            alert("You Won the Match!!")
            RestartMatch();
        }
        else if (isSecoundInnig && ballremainning < 0 && runNeeded > 0) {
            alert("Lose the Match!!")
            RestartMatch();
        }
    }
    const Bowled = () => {
        setWicket(wicket + 1);
        Out();
        isWinOrLose()
    }
    const RunCat = () => {
        let ext = prompt("Any Runs ?");
        if (ext == '') {
            ext = 0;
        }
        setRuns(runs + parseInt(ext))
        setWicket(wicket + 1);
        Out();
        isWinOrLose()
    }


    return (
        <div className='px-28 py-8'>
            <div>
                <h1 className='font-bold text-6xl text-center'>
                    {props.team1} Vs {props.team2}
                </h1>
            </div>
            <div className="scoreCard flex flex-row text-4xl">
                <div className="col-span-1 basis-1/4 ">
                    <h2 className='text-4xl  inline-block mr-4'>{CurrentBatingTeam == "team1" ? props.team1 : props.team2} - </h2>
                    <p className='inline-block text-4xl' > {runs} / {wicket}</p>
                    <p>Over :- {over}.{ball}</p>
                </div>
                <div className="col-span-1 basis-1/3 cursor-pointer ">
                    <p>Current RunRate :- {currentRR}</p>
                    <p>Extra :- {Extra}</p>
                </div>
                {
                    isSecoundInnig ?
                        <div className="col-span-1 basis-1/3 cursor-pointer ">
                            <p>Target {target}</p>
                            <p>Required RunRate :- {requredRR}</p>
                        </div> : ""
                }
            </div>
            <div className="thisOver text-4xl">
                <h2 className=' inline-block mr-4'>This Over :- </h2>
                <p className='inline-block text-4xl' > {thisOver} </p>
                {
                    isSecoundInnig ? <p>Runs Needed to Win :- {runNeeded} Out of {ballremainning} Balls</p> : ""
                }
            </div>

            <div className="btns  flex">
                <div className="run p-4 grid grid-cols-3">
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Zero}>0</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={One}>1</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Two}>2</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Three}>3</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Four}>4</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Five}>5</div>
                    <div className='m-2 cursor-pointer col-span-3 rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Six}>6</div>
                </div>
                <div className="run p-4 m-auto grid grid-cols-3">
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={WD}>WD</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={NB}>NB</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={LB}>LB</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={BYE}>BYE</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={Bowled}>Bowled</div>
                    <div className='m-2 cursor-pointer rounded-lg  bg-slate-500 text-4xl p-8 text-center' onClick={RunCat}>Run/Catch Out</div>
                    <div className='m-2 cursor-pointer col-span-3 rounded-lg  bg-slate-500 text-4xl p-8 text-center'>Undo</div>
                </div>

            </div>
        </div>
    )
}

export default Score
