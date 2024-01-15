import React, { useEffect, useState } from "react";
import PermanentUpgrade from "./PermanentUpgrade";

export default function Upgrade({
    price,
    DPS,
    click,
    name,
    handleUpgrade,
    counter,
    setCounter,
    upgrades,
    setUpgrades,
    index,
    increaseDPS,
    upgradesRequired,
    checkNotation,
    src,
}) {
    const [multiplier, setMultiplier] = useState(1);
    const [brightness, setBrightness] = useState(100);

    useEffect(() => {
        checkBrightness();
    }, [counter]);

    return (
        <div className="upgrades">
            <PermanentUpgrade
                upgradeCount={Math.log2(multiplier)}
                upgradesRequired={upgradesRequired}
                price={price}
                counter={counter}
                setCounter={setCounter}
                upgrades={upgrades}
                setUpgrades={setUpgrades}
                index={index}
                increaseDPS={increaseDPS}
                checkNotation={checkNotation}
            />

            <div
                className="upgradeContainer"
                style={{
                    filter: `brightness(${brightness}%)`,
                }}
                // backgroundSize: `contain`,
                // backgroundRepeat: `no-repeat`,
                // backgroundPosition: `center`,

                onClick={() => {
                    handleUpgrade(price, DPS, click, multiplier, setMultiplier);
                }}
            >
                <h2 className="upgradeCount">{Math.log2(multiplier)}</h2>
                <h2 className="upgradeName">{name}</h2>
                <h2 className="upgradePrice">
                    Price:{checkNotation(price * multiplier)}
                </h2>
                <div className="upgradeDamage">
                    <h2>{DPS ? `DPS + ${checkNotation(DPS)}` : null}</h2>
                    <h2>{click ? `DPC + ${click}` : null}</h2>
                </div>
                <img src={src}></img>
            </div>
        </div>
    );

    function checkBrightness() {
        if (price * multiplier <= counter) {
            setBrightness(100);
        } else {
            setBrightness(50);
        }
    }
}
