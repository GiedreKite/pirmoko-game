import style from './Game.module.css';
import { plus } from '../data/plus.js';
import React, { useEffect, useState } from "react";
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';



export function Plus(params) {
    const [start, setStart] = useState(true);
    const [randomNumber, setRandomNumber] = useState(1);
    const [hidden, setHiddenWord] = useState('');
    let [guessed, setGuessed] = useState([]);
    const [life, setLife] = useState(6);
    const [revealed, setRevealed] = useState('');
    const [end, setEnd] = useState(false);
    const [pushedkey, setpushedkey] = useState([]);

    const storageWinPlusKey = 'winPlus';
    const storageLosePlusKey = 'losePlus';
    const [winPlus, setWinPlus] = useState(readLocalWin());
    const [losePlus, setLosePlus] = useState(readLocalLose())


    readLocalData();
    useEffect(() => {
        localStorage.setItem(storageWinPlusKey, JSON.stringify(winPlus));
    }, [winPlus]);

    useEffect(() => {
        localStorage.setItem(storageLosePlusKey, JSON.stringify(losePlus));
    }, [losePlus]);

    function readLocalWin() {
        const localData = localStorage.getItem(storageWinPlusKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return 0;
    }

    function readLocalLose() {
        const localData = localStorage.getItem(storageLosePlusKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return 0;
    }
    function readLocalData() {
        const plus = localStorage.getItem('plus');
        if (plus) {
            return JSON.parse(plus);
        }
        return plus;
    }

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            const pushedkey = (e.key)[0].toUpperCase();
            const abc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '=',]
            console.log(!guessed.includes(pushedkey))

            console.log(abc.includes(pushedkey))
            console.log(!end)
            // end=false;

            if (!guessed.includes(pushedkey) && abc.includes(pushedkey) && !end) {
                //  guessed.push(pushedkey)
                //  setGuessed(guessed)
                guessLetter(pushedkey)
            }


            if (end) {
                guessed = [];
                startGame();

            }
        });
    },)



    startGame();

    function startGame() {
        if (start === true) {
            const temp_num = Math.floor(Math.random() * (101 - 1 + 1)) + 1;
            setRandomNumber(temp_num);
            setRevealed(plus[temp_num].word);
            setGuessed([]);
            setpushedkey([]);

            // Automatically reveal `+` and `=`
            const hiddenWord = Array.from(plus[temp_num].word).map(char => {
                return char === '+' || char === '=' ? char : '_ ';
            }).join("");

            setHiddenWord(hiddenWord);
            setStart(false);
            setLife(6);
            setEnd(false);
        }
    }

    function hideWord(guessed) {
        let tempHidden = '';
        let passed = true;

        for (let i = 0; i < revealed.length; i++) {
            const currentChar = revealed.charAt(i);

            // Automatically reveal `+` and `=` without guessing
            if (currentChar === '+' || currentChar === '=') {
                tempHidden += currentChar;
            } else if (guessed.includes(currentChar)) {
                tempHidden += currentChar;
            } else {
                tempHidden += '_ ';
                passed = false;
            }
        }

        // Check for win condition
        if (!tempHidden.includes('_') && life > 0) {
            passed = false;
            setEnd(true);
            alert('You Win the game!');
            setWinPlus(winPlus + 1);
        }

        setHiddenWord(tempHidden);
    }






    function guessLetter(letter) {
        guessed.push(letter);
        setGuessed(guessed)
        hideWord(guessed);

        console.log(letter);
        console.log(guessed);

        if (!revealed.includes(letter)) {
            if (life > 1)
                setLife(life - 1);
            else {
                setLosePlus(losePlus + 1)
                setEnd(true)
                setLife(life - 1);
                alert('You LOST the Game')
            }
        }
        console.log(life)
        if (setEnd === true) {
            life - 1
        }

    }
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            <Header />
            <main >


                <div className={ style.gameContainer }>
                    <h2 className={ style.gameCount }>- Atspėta:{ winPlus } - </h2>
                    <h2 className={ style.gameCount }> - Nepavyko:{ losePlus } -</h2>
                </div>


                <div className="play">

                    <p>Life:{ life }</p>

                </div>
                { end &&
                    <div> <h2> Buvo paslėpta: { revealed }</h2>
                        <button className="endbutton" onClick={ () => setStart(true) }>Žaisti iš naujo</button></div>
                }

                <h2>{ hidden }</h2>

                <section className={ style.keybord }>
                    <button onClick={ () => guessLetter('0') } disabled={ guessed.includes('0') || end } style={ guessed.includes('0') ? (revealed.includes('0') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>0</button>
                    <button onClick={ () => guessLetter('1') } disabled={ guessed.includes('1') || end } style={ guessed.includes('1') ? (revealed.includes('1') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>1</button>
                    <button onClick={ () => guessLetter('2') } disabled={ guessed.includes('2') || end } style={ guessed.includes('2') ? (revealed.includes('2') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>2</button>
                    <button onClick={ () => guessLetter('3') } disabled={ guessed.includes('3') || end } style={ guessed.includes('3') ? (revealed.includes('3') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>3</button>
                    <button onClick={ () => guessLetter('4') } disabled={ guessed.includes('4') || end } style={ guessed.includes('4') ? (revealed.includes('4') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>4</button>
                    <button onClick={ () => guessLetter('5') } disabled={ guessed.includes('5') || end } style={ guessed.includes('5') ? (revealed.includes('5') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>5</button>
                    <button onClick={ () => guessLetter('6') } disabled={ guessed.includes('6') || end } style={ guessed.includes('6') ? (revealed.includes('6') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>6</button>
                    <button onClick={ () => guessLetter('7') } disabled={ guessed.includes('7') || end } style={ guessed.includes('7') ? (revealed.includes('7') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>7</button>
                    <button onClick={ () => guessLetter('8') } disabled={ guessed.includes('8') || end } style={ guessed.includes('8') ? (revealed.includes('8') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>8</button>
                    <button onClick={ () => guessLetter('9') } disabled={ guessed.includes('9') || end } style={ guessed.includes('9') ? (revealed.includes('9') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>9</button>
                    <button onClick={ () => guessLetter('+') } disabled={ guessed.includes('+') || end } style={ guessed.includes('+') ? (revealed.includes('+') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>+</button>
                    <button onClick={ () => guessLetter('=') } disabled={ guessed.includes('=') || end } style={ guessed.includes('=') ? (revealed.includes('=') ? { backgroundColor: "green" } : { backgroundColor: "red" }) : {} } className={ style.key }>=</button>

                </section>
            </main>

            <Footer />
        </>
    );
}