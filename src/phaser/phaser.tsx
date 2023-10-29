import Phaser from "phaser";
import React, {useEffect, useState} from "react";
import PlayGame from './scene';


export const PhaserRoot = () => {

    useEffect(() => {
        console.log("se reinicio")
    }, []);

    // Component centralized reference to the phaser instance if needed.
    const [phaser, setPhaser] = useState<Phaser.Game>();

    // Create a new Phaser.Game instance after the initial render.
    useEffect(() => {
        const _phaser = new Phaser.Game({
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                parent: "phaser-parent",
                width: 800,
                height: 600
            },
            backgroundColor: '#ffd13b',
            scene: [PlayGame],
        });
        // setPhaser(_phaser);
    }, []);

    return <div id="phaser-parent"></div>
}