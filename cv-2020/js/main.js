import {Game} from "../js/game/game.js";
import {PanelController} from "../js/ui.js";
/*
let mainAnimationContainer = document.querySelector("main-animation");
let starsContainer = document.querySelector("#stars");
let layerBehind = starsContainer.querySelector(".behind");
let layerMiddle = starsContainer.querySelector(".middle");
let layerCloseup = starsContainer.querySelector(".closeup");
*/



class TileGrid {
    constructor(containerSelector, elNumber) {
        let container = document.querySelector(containerSelector);
        let wrapper = document.createElement('div');
        wrapper.classList.add('tile-wrapper');
        container.appendChild(wrapper);
        for (let index = 0; index < elNumber; index++) {
            //const element = array[index];
            let max = 180;
            const element = document.createElement('div');
            console.log(Math.floor(Math.random() * Math.floor(max)));
            element.style.height = element.style.minHeight = Math.floor(Math.random() * Math.floor(max)) + 'px';
            wrapper.appendChild(element);
        }
    }
}

//let tileGrid = new TileGrid('main.front .container',130);

let myGameBoard;
var intervalID;
let panelController;
//panelController.addNewPanel('panel1', ['add', 'remove', 'minimize', 'close']);
let mouseX = 0;
let mouseY = 0;
let sX = 0;
let sY = 0
let initTime = new Date().getTime();
let lastStandingTime = new Date().getTime();

window.onload = function() {
    //init();
    //doSomethingElse();
    //myGameBoard = new Game("snakeBoard");
    panelController = new PanelController(".panels-wrapper");
    panelController.addNewPanel('panel1', ['add', 'remove', 'minimize', 'close']);
    //let newPanel1 = new Panel('panel1', 'p1', '.panels-wrapper',['add', 'remove', 'minimize', 'close']);
  };
