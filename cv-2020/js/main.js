//import "ui.js";
/*
let mainAnimationContainer = document.querySelector("main-animation");
let starsContainer = document.querySelector("#stars");
let layerBehind = starsContainer.querySelector(".behind");
let layerMiddle = starsContainer.querySelector(".middle");
let layerCloseup = starsContainer.querySelector(".closeup");
*/

class Game {
    constructor(gameBoardID){
        console.log('constructor New Game',gameBoardID);
        let container = document.querySelector(".front");
        let gameboard = {};
        gameboard.gameboardEl = document.createElement("div");
        gameboard.gameBoardSize = {
            boardRows: 50,
            boardCols: 50
        }
        
        let snake = new Snake();
        gameboard.gameboardEl.id = gameBoardID;
        gameboard.gameboardEl.classList.add('gameBoard');
        gameboard.gameboardEl.style.gridTemplateRows = `repeat(${gameboard.gameBoardSize.boardRows}, 1fr)`;
        gameboard.gameboardEl.style.gridTemplateColumns = `repeat(${gameboard.gameBoardSize.boardCols}, 1fr)`;
        container.appendChild(gameboard.gameboardEl);
        this.drawCells(gameboard);
        
        console.log("Game snake", snake);
        this.drawSnake(snake, gameboard);
    }

    drawCells(gameboard) {
        let boardCell;
        
        console.log('drawCells', gameboard);

        for (let index = 1; index < (gameboard.gameBoardSize.boardRows*gameboard.gameBoardSize.boardCols) + 1; index++) {
            console.log('Cell', index, gameboard.gameBoardSize.boardRows, gameboard.gameBoardSize.boardCols);
            //const element = array[index];
            boardCell = document.createElement("div");       
            boardCell.classList.add('active'); 
            let rows = Math.floor(((index)/gameboard.gameBoardSize.boardRows)+1);
            let cols = Math.floor((index % gameboard.gameBoardSize.boardCols));

            console.log(rows, cols);
            let cellNumber = document.createTextNode('('+index+') '+' X:'+rows +' Y:'+cols);
            boardCell.appendChild(cellNumber);
            gameboard.gameboardEl.appendChild(boardCell);
            
        }
    };
    drawSnake(snake, gameboard){
        console.log("drawSnake", snake);
        console.log("drawSnake", snake.snakeBody);
        let counter = 0
        let grid = gameboard.gameboardEl.querySelectorAll('div');
        let actives = gameboard.gameboardEl.querySelectorAll('.snake');
        actives.forEach(element => {element.classList.remove('snake', 'head');});
        console.log(grid.length);
        //gameboard.gameboardEl.innerHTML = '';

        snake.snakeBody.forEach(segment => {            
            console.log("drawSnake forEach", segment);
            let positionCell = ((segment.x-1) * gameboard.gameBoardSize.boardRows) + segment.y ;
            console.log('positionCell:',segment.x, segment.y, positionCell);
            grid[positionCell].classList.add('snake');
            if (counter == 0) grid[positionCell].classList.add('head');
            /*
            const snakeElement = document.createElement("div");
            snakeElement.style.gridRowStart = segment.x;
            snakeElement.style.gridColumnStart = segment.y;
            snakeElement.classList.add('snake');
            if (counter == 0) snakeElement.classList.add('head');
            gameboard.appendChild(snakeElement);
            */
            counter++
        });
    }
}
class Snake {
    constructor(){
        let position = {x: 10, y: 1};
        this._snakeBody = [
            {x: 10, y: 11},
            {x: 11, y: 11},
            {x: 11, y: 12},
            {x: 12, y: 12},
            {x: 13, y: 12}
        ];
    }
    get snakeBody() {
        return this._snakeBody;
    }

}
let myGameBoard = new Game("snakeBoard");

class Panel {
    constructor(panelName, panelID, _panelHolderElement, buttonsList, infoElements = null) {
        console.log("Panel constructor: ", _panelHolderElement);
        let bottomResizerEnabled = true;
        this.panelID = panelID;
        this.enablePanelAnim = true;
        this.panelHolderElement = _panelHolderElement; //document.querySelector(_panelHolderElement);
        this._panelName = panelName;
        this.newPanel = document.createElement("div");
        this.newPanelHeader = document.createElement("header");
        this.newPanelHeaderLabel = document.createElement("div");
        this.newPanelInfo = document.createElement("div");
        const newPanelTitle = document.createTextNode(panelName);
    
        this.newPanel.classList.add("panel", panelID);
        this.newPanel.id = panelID;
        this.newPanelInfo.classList.add("info");
        this.newPanelHeaderLabel.classList.add('label');
        this.newPanelHeaderLabel.appendChild(newPanelTitle);
    
        this.newPanelHeader.appendChild(this.newPanelHeaderLabel);
        this.newPanel.appendChild(this.newPanelHeader);
        //this.newPanel.appendChild(this.wrapperInput);
        this.newPanel.appendChild(this.newPanelInfo);

        //this.panelHolderElement.draggable = true;
        this.newPanel.draggable = true;
        console.log(this.panelHolderElement);

        if (!bottomResizerEnabled) {
            this.panelHolderElement.appendChild(this.newPanel);
        } else {
            let resierEl = this.panelHolderElement.querySelector('.panels-wrapper__resizer');
            this.panelHolderElement.insertBefore(this.newPanel, resierEl);
        }
    
        if (buttonsList) {this.initPanelHeaderButtons(buttonsList)};
        if (infoElements) {this.addSettingsInfo(infoElements)};
    }

    initElements() {
        console.log('init');
        this.panelHolderElement = panelController.panelHolderElement; //document.querySelector(panelHolder);
        this._panelName = panelName;
        this.newPanel = document.createElement("div");
        this.newPanelHeader = document.createElement("header");
        this.newPanelHeaderLabel = document.createElement("div");
        this.newPanelInfo = document.createElement("div");
        
        const newPanelTitle = document.createTextNode(panelName);
    
        this.newPanel.classList.add("panel", panelID);
        this.newPanelInfo.classList.add("info");
        this.newPanelHeaderLabel.classList.add('label');
        this.newPanelHeaderLabel.appendChild(newPanelTitle);
    
        this.newPanelHeader.appendChild(this.newPanelHeaderLabel);
        this.newPanel.appendChild(this.newPanelHeader);
        this.newPanel.appendChild(this.newPanelInfo);

        if (!bottomResizerEnabled) {
            panelHolderElement.appendChild(this.newPanel);
        } else {
            let resierEl = panelHolderElement.querySelector('.panels-wrapper__resizer');
            panelHolderElement.insertBefore(this.newPanel, resierEl);
        }
    
        if (buttonsList) {this.initPanelHeaderButtons(buttonsList)}  
    }
    addBottomResizer(){
        this.addTextarea('panels-wrapper__resizer', '')
    }
    removePanelFunction(){
        console.log('removePanelFunction');
        const panel = this.newPanel; //this.parentElement.parentElement.parentElement;
        panel.classList.add('removing');
        setTimeout(function(){ panel.remove()}, 300);
    }
    addPanelHeaderButton(btnType, buttonWrapper) {        
        let panelButton = document.createElement("button");
        let panelAnimation = this.enablePanelAnim;
        panelButton.classList.add('button', btnType, 'dark');
        //buttonWrapper.appendChild(panelButton);
        buttonWrapper.appendChild(panelButton, buttonWrapper);

        switch(btnType) {
            case 'close':
                panelButton.addEventListener("click", function(evt) {
                    panelController.setPanelWrapperState('status-working');
                    
                    console.log("close clocked", panelAnimation);
                    const panel = this.parentElement.parentElement.parentElement;
                    
                    //panel.classList.add('removing');                    
                    //setTimeout(function(){ panel.remove()}, 300);            
                    
                    panelController.removePanel(panel.id);     
                }); 
                break;
            case 'minimize':
                panelButton.addEventListener("click", function() {
                    console.log("minimize clocked");
                    
                    panelController.setPanelWrapperState('status-working');
                    const panel = this.parentElement.parentElement.parentElement;
                    panel.classList.toggle('minimized');
                }); 
                break;
            case 'remove':
                panelButton.addEventListener("click", function() {
                    console.log("remove clocked", this.parentElement.parentElement.parentElement);                    
                    panelController.setPanelWrapperState('status-remove');
                }); 
                break;
            case ('add'):
                panelButton.addEventListener("click", function() {
                    console.log("add clocked");                    
                    panelController.setPanelWrapperState('status-add');
                }); 
                break;
            case 'expand':
                panelButton.addEventListener("click", function() {
                    console.log("expand clocked");                    
                    panelController.setPanelWrapperState('status-expand');
                }); 
                break;
            case 'more':
                panelButton.addEventListener("click", function() {
                    console.log("more clocked");
                }); 
                break;
        }

    }
    initPanelHeaderButtons(buttonsList){
            const buttonWrapper = document.createElement("div");
            this.newPanelHeader.appendChild(buttonWrapper);
            buttonWrapper.classList.add("buttons");        
            buttonsList.forEach(btnType => {
                this.addPanelHeaderButton(btnType, buttonWrapper);
            });
    }

    addSettingsInfo(settingParams) {
        settingParams.forEach((sandwich, index) => {
            const title = sandwich[0];
            const value = sandwich[1];
            let settingsEl = this.newPanel.querySelector(' .info');
            const newItem = document.createElement("div");
            const newItemTitleEl = document.createElement("div");
            newItemTitleEl.classList.add('title');
            const newItemValueEl = document.createElement("div");
            newItemValueEl.classList.add('stat-value');
            const newItemTitle = document.createTextNode(title);
            const newItemValue = document.createTextNode(value);
            newItemTitleEl.appendChild(newItemTitle);
            newItemValueEl.appendChild(newItemValue);
            newItem.appendChild(newItemTitleEl);
            newItem.appendChild(newItemValueEl);
            settingsEl.appendChild(newItem);/**/
        });
        
    }

    addTextarea(areaName, innerText = 'Copy text here!'){        
        const newArea = document.createElement("textarea");
        newArea.name = areaName;
        newArea.id = areaName;
        newArea.innerHTML = innerText;
        newArea.rows = 1;
        newArea.disabled = true;
        this.newPanel.appendChild(newArea)
    }
    updatePanelItem(itemRow, title, value){
        //console.log('updatePanelItem: ', this);
        let items = this.newPanel.querySelectorAll('.info > div');
        let statTitle = items[Number(itemRow)].querySelector('div');
        let statValue = items[Number(itemRow)].querySelector('.stat-value');
        statTitle.innerHTML = title;
        statValue.innerHTML = value;
    }
    destroy(){
        
    }
    
}

class PanelController {
    constructor(_panelsWrapperControler) {
        const panelCounterPrefix = 'p-item-';        
        const defaultButtons = ['minimize', 'more', 'close'];   
        let panelCounter = 0;
        let panelsWrapperControler = _panelsWrapperControler;
        this.panelHolderElement = document.querySelector(panelsWrapperControler);
        this.wrapperInput;
        this.topStatusBar;
        let timeoutID;
        this.intervalID3;
        this.dragg = {
            'dragging': false,
            'objStartX': 0,
            'objStartY': 0,
            'objX': 0,
            'objY': 0,
            'diffX': 0,
            'diffY': 0
        };

        this.panelList = [];           
        
        this.createWrapperUI_Elements();
        this.wrapperInput.addEventListener("keyup", event =>{            
            panelController.setPanelWrapperState('status-working');
            this.resetPanelWrapperState(100);
            if (event.keyCode === 13) {
                let foo = event.currentTarget.value;
                this.addNewPanel(foo, panelCounterPrefix + panelCounter, this.panelHolderElement, defaultButtons);
                this.resetPanelWrapperState(500);
                panelCounter++;                
            }
        });
        /*
        this.topStatusBar.addEventListener("mousemove", event =>{      
            //if (this.dragg.dragging) this.startDrag();
        });
        this.topStatusBar.addEventListener("mousedown", event =>{      
            let panelHolderElementRef = this; 
            console.log('topStatusBar mousedown', panelHolderElementRef);
            this.startDrag();
        });
        this.topStatusBar.addEventListener("mouseup", event =>{      
            let panelHolderElementRef = this; 
            console.log('topStatusBar mouseup', panelHolderElementRef);
            this.stopDrag();
        });
        this.topStatusBar.addEventListener("mouseleave", event =>{      
            let panelHolderElementRef = this; 
            console.log('topStatusBar mouseleave', panelHolderElementRef);
            //this.stopDrag();
        });
        */

        
    }
    dragstart_handler(ev) {
        // Add different types of drag data
        ev.dataTransfer.setData("text/plain", ev.target.innerText);
        ev.dataTransfer.setData("text/html", ev.target.outerHTML);
        ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
      }
      
    createWrapperUI_Elements() {
        //createStatusBar
        let panelHolderEl =  this.panelHolderElement.querySelector('.panels-wrapper__resizer');

        this.topStatusBar = document.createElement("header");

        this.topStatusBar.id = "header-statusbar";
        //Create Input
        
        this.wrapperInput = document.createElement("input");
        this.wrapperInput.id = 'wrapperInput';
        this.wrapperInput.placeholder = 'Create New Panel';
        
        this.panelHolderElement.insertBefore(this.topStatusBar, panelHolderEl);
        this.panelHolderElement.insertBefore(this.wrapperInput, panelHolderEl);

        //
    }
    setPanelWrapperState(state = '') {
        console.log("setPanelWrapperState: ", state);
        
        let _panelHolderElement = this.panelHolderElement;
        let startsWith = "status-"; 
        let classes = _panelHolderElement.className.split(" ").filter(function(v) { 
            return v.lastIndexOf(startsWith, 0) !== 0; 
        }); 
        _panelHolderElement.className = classes.join(" ").trim();         
        (state) ? _panelHolderElement.classList.add(state) : state;
    }
    addNewPanel(value, panelID, panelsWrapperControler, defaultButtons, infoElement){
        console.log('PanelController addNewPanel:', panelsWrapperControler);
        let newPanel = new Panel(value, panelID, panelsWrapperControler, defaultButtons, infoElement);
        this.panelList.push(newPanel);
        return newPanel;
    }
    removePanel(panelID) {
        console.log('-- PanelController removePanel', panelID);
        let _panelHolderElement = this.panelHolderElement;
        let counter = 0;
        let panelIndex = 0;
        this.panelList.forEach(element => {
            if (element.newPanel.id === panelID) {                
                panelIndex = counter;
                element.removePanelFunction();
            }                           
            counter++;
        });
        this.panelList = this.panelList.slice(0, panelIndex).concat(this.panelList.slice(panelIndex + 1, this.panelList.length));
        this.resetPanelWrapperState();
    }
    resetPanelWrapperState(time = 500) {
        this.timeoutID = setTimeout(function(){ 
            console.log("setTimeout");
            panelController.setPanelWrapperState();
        }, time);
    }
    startDrag(){
        console.log('startDrag: ');
        //this.moveWrapper();        
        this.dragg.dragging = true;

        //this.intervalID3 = setInterval()
    }
    moveWrapper() {        

        //var element =  this.panelHolderElement = document.body.getBoundingClientRect(),
        let elemRect = this.panelHolderElement.getBoundingClientRect();
            
        console.log( 'elemRect', elemRect);

        this.panelHolderElement.style.position = 'absolute';

        console.log(this.panelHolderElement.clientX, this.panelHolderElement.clientLeft);
        if (!this.dragg.dragging) {
            this.dragg.diffX = elemRect.x - mouseX;
            this.dragg.diffY = elemRect.y-20 - mouseY;
        }

        console.log('moveWrapper: ', mouseX, mouseY);
        //let newpositionX = mouseX

        this.panelHolderElement.style.right = 'auto';
        this.panelHolderElement.style.left = (mouseX + this.dragg.diffX)+'px';
        this.panelHolderElement.style.top = (mouseY + this.dragg.diffY)+'px';
        
    }
    stopDrag(){
        console.log('stopDrag: ', this, this.dragg);
        this.dragg.dragging = false;
    }
}



var intervalID;
let panelController = new PanelController(".panels-wrapper");
//panelController.addNewPanel('panel1', ['add', 'remove', 'minimize', 'close']);
//let newPanel1 = new Panel('panel1', 'p1', '.panels-wrapper',['add', 'remove', 'minimize', 'close']);
let mouseX = 0;
let mouseY = 0;
let sX = 0;
let sY = 0
let initTime = new Date().getTime();
let lastStandingTime = new Date().getTime();
let idleTime = () => {
    return (currentTime() - lastStandingTime)
}

let currentTime = () => {
    //let passed = Math.round((new Date().getTime() - initTime)/1000)

    //console.log(secondsToHms(new Date().getTime()));
    return Math.round(new Date().getTime());
}
let timePassed = () => {
    //console.log("timePassed", initTime);
    return Math.round((new Date().getTime() - initTime)/1000);
}

let lastMousePosition = {
    'x': 0,
    'y':0
}

function secondsToHms(d) {
    //d = d +3600 * 2;
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    /*
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    */

    
    var hDisplay = h < 10 ? h= "0"+h : h;
    var mDisplay = m < 10 ? m= "0"+m : m;
    var sDisplay = s < 10 ? s= "0"+s : s;

    return hDisplay + ':' + mDisplay + ':'+ ':'+ sDisplay; 
}

window.onload = function() {
    init();
    //doSomethingElse();
  };

function init(){
    //console.log("doc ready", getRepaintInterval);
    //here code
    //addSettingsInfo("#settings", "TEST Set", 'ready');
    //addStars();
    document.querySelector("#start").addEventListener('click', (event) => {
        console.log("clicked");
    });
    
    let newPanel1 = panelController.addNewPanel('Browser Info', 'p1', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize']);
    let newPanel2 = panelController.addNewPanel('System', 'p2', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize']);
    let newPanel3 = panelController.addNewPanel('test8', 'p28', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize', 'close']);

    newPanel1.addSettingsInfo([["cookieEnabled", navigator.cookieEnabled], ["appCodeName", navigator.appCodeName], ["product", navigator.product]]);
    newPanel1.addTextarea('console', navigator.userAgent);
    newPanel2.addSettingsInfo([["typeof(Worker)", typeof(Worker)], ["s333ssss info", "value"], ["sss44ss info", "value"], ["sss44ss info", "value"]]);
    newPanel2.updatePanelItem(2,'DONT', 400);
    newPanel3.addTextarea('console', navigator.userAgent);
    initTicker();
    document.addEventListener('mousemove', handleMouseMove);   
    /**/
    
    console.log(navigator.userAgent);
}

function getMousePos(evt) {
    let canvasName = "infoViewCanvas";
    var rect = document.getElementById(canvasName).getBoundingClientRect();
 
    var X = (evt.clientX - rect.left) / (document.getElementById(canvasName).clientWidth / document.getElementById(canvasName).width);
    var Y = (evt.clientY - rect.top) / (document.getElementById(canvasName).clientHeight / document.getElementById(canvasName).height);
    X = Math.ceil(X);
    Y = Math.ceil(Y);
 
    return {
        x: X,
        y: Y
    };
}
function initTicker() {
    intervalID = setInterval(updateInterval, 100);
}

function updateInterval(){
    let maxIdleTime = 70000;
    //console.log('TIK updateInterval',mouseX, mouseY,  (currentTime() - lastStandingTime)/100);
    //newPanel2.updatePanelItem(2, new Date().getTime().toString());
    //drawOnCanvas();

    if (idleTime() < maxIdleTime) drawOnCanvas(mouseX/sX, mouseY/sY, idleTime()/500);
    panelController.panelList[1].updatePanelItem(0, 'Time', new Date().toLocaleTimeString());
    panelController.panelList[1].updatePanelItem(1, 'Time passed', secondsToHms(timePassed()));
    panelController.panelList[1].updatePanelItem(2, 'LST', idleTime()/10);
    //panelController.panelList[1].updatePanelItem(3, 'Bruch Size', idleTime());
}

function drawOnCanvas(x,y, brushSize = 1, brushOpacity = 0.8){
    //console.log('drawOnCanvas',x,y,brushSize)
    const maxBrushSize = 150;
    const canvas = document.getElementById('infoViewCanvas');
    const yellow = '218, 214, 1';
    const blue = '0, 179, 255';
    const red = '218, 1, 128';
    //let brushFillColor = (idleTime() > 10000) ? yellow : blue;
    if (idleTime()> 40000) {brushFillColor = red; brushSize = brushSize/20}
    else if (idleTime()> 20000) {brushFillColor = yellow; brushSize = brushSize/4}
    else { brushFillColor = blue; brushSize = brushSize}
    brushSize = (brushSize > maxBrushSize) ? maxBrushSize : brushSize;

    panelController.panelList[1].updatePanelItem(3, 'Brush Size',  brushSize);
    //this.mouseX = 0;
    //this.mouseY = 0;
    this.ctx = canvas.getContext('2d');
    /**/
    var radgrad = ctx.createRadialGradient(60,60,0,60,60,60);
    radgrad.addColorStop(0, `rgba(${brushFillColor}, 0.1`);
    radgrad.addColorStop(0.5, `rgba(${brushFillColor}, 0.05`);
    radgrad.addColorStop(1, `rgba(${brushFillColor}, 0)`);
    

    //this.ctx.scale(0.5, 0.5);
    isDrawing = true;
    //ctx.fillStyle = radgrad;
    ctx.fillStyle = `rgba(${brushFillColor}, 0.05`;
    //ctx.fillRect(x, y, brushSize);
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, 2 * Math.PI);
    ctx.fill(); 

    
}
function handleMouseMove(event) {
    lastStandingTime = currentTime();
    let  canvasName = "infoViewCanvas";
    var eventDoc, doc, body;
    var rect = document.getElementById(canvasName).getBoundingClientRect();    
 
    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    
    x =  event.pageX;
    y = event.pageY;
    sX = (window.innerWidth / document.getElementById(canvasName).width);
    sY = (window.innerHeight / document.getElementById(canvasName).height);
    
    mouseX = x;
    mouseY = y;

    drawOnCanvas(x/sX, y/sY);
    // Use event.pageX / event.pageY here
}