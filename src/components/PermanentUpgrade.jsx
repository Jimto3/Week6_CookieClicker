import { useEffect, useState } from "react";

export default function PermanentUpgrade({
    upgradeCount,
    upgradesRequired,
    price,
    counter,
    index,
    increaseDPS,
    checkNotation,
}) {
    const [afford, setAfford] = useState(false);
    const [background, setBackground] = useState("red");
    const permanentUpgradePrice = price * 5 * 2 ** upgradesRequired;

    useEffect(() => {
        checkUpgradeCount();
    }, [counter]);
    return (
        <div className="permanentUpgradeBox">
            {afford ? (
                <button
                    className="permanentUpgrade"
                    onClick={() => {
                        increaseDPS(index, permanentUpgradePrice, upgradeCount);
                        upgradesRequired *= 2;
                    }}
                    style={{ background: background }}
                >
                    <h2>{checkNotation(permanentUpgradePrice)}</h2>
                    <h3>*2</h3>
                </button>
            ) : null}
        </div>
    );

    function checkUpgradeCount() {
        if (upgradeCount >= upgradesRequired) {
            setAfford(true);
        } else {
            setAfford(false);
        }
        if (counter >= permanentUpgradePrice) {
            setBackground("green");
        } else {
            setBackground("red");
        }
    }
}
