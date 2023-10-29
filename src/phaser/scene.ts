import Phaser from 'phaser';

// import store from '#/redux-logic';
// import { setMusic } from '#/redux-logic/features/appSettings/appSettingsSlice';
import logoImg from '../assets/img/logo.png';
import MusicOn from '../assets/img/Music_ON.png';
import MusicOff from '../assets/img/Music_OFF.png';
// This track is free to use (even for commercial purposes) with no attribution required. However, linking back is greatly appreciated. You can use the following text:
// https://www.chosic.com/free-music/all/
import riseShine from '../assets/img/rise-and-shine.mp3';
import {useContext} from "react";
import {context} from "../context/store";

export default class PlayGame extends Phaser.Scene {


    private musicButtonOn!: Phaser.GameObjects.Sprite;
    private musicButtonOff!: Phaser.GameObjects.Sprite;
    private bgMusic!: Phaser.Sound.WebAudioSound;

    constructor() {
        super("PlayGame");
    }
    preload() {

        this.load.image("logo", logoImg);
        this.load.image("sound-on", MusicOn);
        this.load.image("sound-off", MusicOff);
        this.load.audio("bgMusic", riseShine);

    }
    create() {
        const centerW = 800 / 2;
        const centerH = 600 / 2;

        this.add.text(centerW - 120, 400, "Phaser button", { fontSize: "30px", color: "blue", align: "left" });
        this.add.text(0, 0, "Phaser/Canvas root (yellow bg)", { fontSize: "30px", color: "blue", align: "left" });

        const logo = this.add.image(centerW, 150, "logo");

        this.musicButtonOn = this.add.sprite(centerW, 300, "sound-on").setInteractive();
        this.musicButtonOff = this.add.sprite(centerW, 300, "sound-off").setVisible(false);

        this.musicButtonOn.on("pointerup", this.onMusicOff, this);
        this.musicButtonOff.on("pointerup", this.onMusicOn, this);

        this.bgMusic = this.sound.add("bgMusic") as Phaser.Sound.WebAudioSound;
        this.bgMusic.setVolume(0.1);
        // this.bgMusic.setLoop(true);

        this.bgMusic.play();


        // store.subscribe(this.onStoreChange.bind(this))

        this.tweens.add({
            targets: logo,
            y: centerH,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
    onStoreChange(){
        // const state = store.getState();
        // if(state.appSettings.musicOn && this.musicButtonOff.visible){
        //     this.onMusicOn();
        // } else if(!state.appSettings.musicOn && this.musicButtonOn.visible){
        //     this.onMusicOff();
        // }
    }
    onMusicOff() {
        this.bgMusic.setVolume(0);
        this.musicButtonOn.setVisible(false);
        this.musicButtonOn.disableInteractive();
        this.musicButtonOff.setInteractive();
        this.musicButtonOff.setVisible(true);

        // store.dispatch(setMusic(false));

    }
    onMusicOn() {
        this.bgMusic.setVolume(0.1);
        this.musicButtonOff.setVisible(false);
        this.musicButtonOff.disableInteractive();
        this.musicButtonOn.setInteractive();
        this.musicButtonOn.setVisible(true);

        // store.dispatch(setMusic(true));
    }
}
