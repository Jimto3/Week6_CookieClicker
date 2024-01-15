import { useEffect, useState } from "react";
import Cookie from "./components/Cookie";
import UpgradeList from "./components/UpgradeList";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [DPS, setDPS] = useState(1);
    const [mult, setMult] = useState(1);
    const [clickValue, setClickValue] = useState(1);
    const [increaseDPS, setIncreaseDPS] = useState(1);

    useEffect(() => {
        // if (localStorage.length) {
        //     setCounter(Number(localStorage.getItem("counter")));
        //     setDPS(Number(localStorage.getItem("DPS")));
        //     setMult(Number(localStorage.getItem("mult")));
        //     setClickValue(Number(localStorage.getItem("clickValue")));
        //     setIncreaseDPS(Number(localStorage.getItem("increaseDPS")));
        // }

        const countIncrease = setInterval(() => {
            setCounter((count) => count + mult);
        }, 1000 / DPS);

        setLocalStorage();

        return () => {
            clearInterval(countIncrease);
        };
    }, [DPS, mult]);

    return (
        <main>
            <div className="backgroundImage"></div>
            <Cookie
                counter={counter}
                setCounter={setCounter}
                clickValue={clickValue}
                checkNotation={checkNotation}
            />
            <div className="damageDisplay">
                <h2>DPS : {increaseDPS}</h2>
                <h2>DPC : {clickValue}</h2>
            </div>
            <UpgradeList
                handleUpgrade={handleUpgrade}
                counter={counter}
                setCounter={setCounter}
                checkNotation={checkNotation}
                updateDPS={updateDPS}
            />
        </main>
    );

    async function handleUpgrade(
        price,
        DPSIncrease,
        clickIncrease,
        multiplier,
        setMultiplier
    ) {
        if (counter >= price * multiplier) {
            setCounter(counter - price * multiplier);
            setMultiplier(multiplier * 2);
            setIncreaseDPS(increaseDPS + DPSIncrease);
            if (DPS + DPSIncrease > 50) {
                setMult(mult + (DPS + DPSIncrease - 50) / 50);
                setDPS(50);
            } else {
                setDPS(DPS + DPSIncrease);
            }

            setClickValue(clickValue + clickIncrease);
        }
        setLocalStorage();
    }

    function checkNotation(value) {
        if (value >= 10000) {
            const magnitude = Math.floor(Math.log10(value));
            const newValue =
                Math.round(value * 10 ** (2 - magnitude)) /
                10 ** (2 - magnitude);
            return (Math.round(newValue * 10 ** 2) / 10 ** 2).toExponential();
        } else return Math.round(value);
    }

    function updateDPS(upgradeCount, upgradeDPS, upgradeDPC) {
        setClickValue(clickValue + upgradeCount * upgradeDPC);
        setIncreaseDPS(increaseDPS + upgradeCount * upgradeDPS);

        if (DPS + upgradeCount * upgradeDPS > 50) {
            setMult(mult + (DPS + upgradeCount * upgradeDPS - 50) / 50);
            setDPS(50);
        } else {
            setDPS(DPS + upgradeCount * upgradeDPS);
        }
        setLocalStorage();
    }

    function setLocalStorage() {
        localStorage.setItem("counter", counter);
        localStorage.setItem("DPS", DPS);
        localStorage.setItem("mult", mult);
        localStorage.setItem("clickValue", clickValue);
        localStorage.setItem("increaseDPS", increaseDPS);
    }
}
