import Upgrade from "./Upgrade";
import { useState } from "react";

export default function UpgradeList({
    handleUpgrade,
    counter,
    setCounter,
    checkNotation,
    updateDPS,
}) {
    const [upgrades, setUpgrades] = useState(
        [
            {
                index: 0,
                price: 10,
                DPS: 0,
                click: 1,
                name: "Cursor",
                upgradesRequired: 10,
                src: "https://pngimg.com/d/cursor_PNG100716.png",
            },
            {
                index: 1,
                price: 150,
                DPS: 100,
                click: 10,
                name: "Mine",
                upgradesRequired: 10,
                src: "https://images.vexels.com/media/users/3/314787/isolated/preview/45f3f525b3db6ecee6cecc1107b6f96d-gold-mine.png",
            },
            {
                index: 2,
                price: 2500,
                DPS: 1000,
                click: 100,
                name: "Barn",
                upgradesRequired: 10,
                src: "https://pics.clipartpng.com/Barn_PNG_Clip_Art-2288.png",
            },
            {
                index: 3,
                price: 50000,
                DPS: 10000,
                click: 1000,
                name: "Power Plant",
                upgradesRequired: 10,
                src: "https://cdn-icons-png.flaticon.com/512/3658/3658144.png",
            },
        ],
        []
    );

    return (
        <div className="upgradeList">
            {upgrades.map((upgrade) => (
                <Upgrade
                    key={upgrade.name}
                    price={upgrade.price}
                    DPS={upgrade.DPS}
                    click={upgrade.click}
                    name={upgrade.name}
                    handleUpgrade={handleUpgrade}
                    counter={counter}
                    index={upgrade.index}
                    increaseDPS={increaseDPS}
                    upgradesRequired={upgrade.upgradesRequired}
                    checkNotation={checkNotation}
                    src={upgrade.src}
                />
            ))}
        </div>
    );

    function increaseDPS(index, permanentUpgradePrice, upgradeCount) {
        if (counter >= permanentUpgradePrice) {
            setCounter(counter - permanentUpgradePrice);
            updateDPS(upgradeCount, upgrades[index].DPS, upgrades[index].click);
            upgrades[index].DPS *= 2;
            upgrades[index].upgradesRequired *= 2;
            upgrades[index].click *= 2;
        }
    }
}
