//import "ui.js";
/*
let mainAnimationContainer = document.querySelector("main-animation");
let starsContainer = document.querySelector("#stars");
let layerBehind = starsContainer.querySelector(".behind");
let layerMiddle = starsContainer.querySelector(".middle");
let layerCloseup = starsContainer.querySelector(".closeup");
*/


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
                    const panel = this.parentElement.parentElement.parentElement;
                    panel.classList.toggle('minimized');
                }); 
                break;
            case 'remove':
                panelButton.addEventListener("click", function() {
                    console.log("remove clocked", this.parentElement.parentElement.parentElement);
                }); 
                break;
            case ('add'):
                panelButton.addEventListener("click", function() {
                    console.log("add clocked");
                }); 
                break;
            case 'expand':
                panelButton.addEventListener("click", function() {
                    console.log("expand clocked");
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
        let panelCounter = 0;
        let panelsWrapperControler = _panelsWrapperControler;
        let panelHolderElement = document.querySelector(panelsWrapperControler);
        console.log("PanelController constructor: ", panelHolderElement);
        const panelCounterPrefix = 'p-item-';        
        const defaultButtons = ['minimize', 'more', 'close'];       

        this.panelList = [];   
        
        this.wrapperInput = document.createElement("input");
        this.wrapperInput.id = 'wrapperInput';
        this.wrapperInput.placeholder = 'Create New Panel';

        panelHolderElement.insertBefore(this.wrapperInput, panelHolderElement.querySelector('.panels-wrapper__resizer'));
     

        console.log("PanelControler constructor: ", panelsWrapperControler);
        //this.wrapperInput = document.querySelector("#wrapperInput");
        this.wrapperInput.addEventListener("keyup", event =>{
            if (event.keyCode === 13) {
                let foo = event.currentTarget.value;
                this.addNewPanel(foo, panelCounterPrefix + panelCounter, panelHolderElement, defaultButtons);
                panelCounter++;                
            }
        })
    }
    addNewPanel(value, panelID, panelsWrapperControler, defaultButtons, infoElement){
        console.log('PanelController addNewPanel:', panelsWrapperControler);
        let newPanel = new Panel(value, panelID, panelsWrapperControler, defaultButtons, infoElement);
        this.panelList.push(newPanel);
        return newPanel;
    }
    removePanel(panelID) {
        console.log('-- PanelController removePanel', panelID);
        let counter = 0;
        let panelIndex = 0;
        this.panelList.forEach(element => {
            if (element.newPanel.id === panelID) {                
                console.log('MATCH', element.newPanel.id,'=', panelID,'/', counter);
                panelIndex = counter;
                element.removePanelFunction();
            }                           
            counter++;
        });
        this.panelList = this.panelList.slice(0, panelIndex).concat(this.panelList.slice(panelIndex + 1, this.panelList.length));

    }
}


var intervalID;
let panelController = new PanelController(".panels-wrapper");
//panelController.addNewPanel('panel1', ['add', 'remove', 'minimize', 'close']);
//let newPanel1 = new Panel('panel1', 'p1', '.panels-wrapper',['add', 'remove', 'minimize', 'close']);
let mouseX = 0;
let mouseY = 0;
let initTime = new Date().getTime();

let currentTime = () => {
    //let passed = Math.round((new Date().getTime() - initTime)/1000)

    //console.log(secondsToHms(new Date().getTime()));
    return ;
}
let timePassed = () => {
    //console.log("timePassed", initTime);
    return secondsToHms(Math.round((new Date().getTime() - initTime)/1000));
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
    //let newPanel1 = new Panel('Browser Info', 'p1', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize', 'close']);
    //let newPanel2 = new Panel('System', 'p2', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize', 'close']);
    
    let newPanel1 = panelController.addNewPanel('Browser Info', 'p1', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize', 'close']);
    let newPanel2 = panelController.addNewPanel('System', 'p2', document.querySelector('.panels-wrapper'),['add', 'remove', 'minimize', 'close']);
    
    //newPanel1.init();
    newPanel1.addSettingsInfo([["cookieEnabled", navigator.cookieEnabled], ["appCodeName", navigator.appCodeName], ["product", navigator.product]]);
    newPanel1.addTextarea('console', navigator.userAgent)
    newPanel2.addSettingsInfo([["typeof(Worker)", typeof(Worker)], ["s333ssss info", "value"], ["sss44ss info", "value"]]);
    newPanel2.updatePanelItem(2,'DONT', 400);
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
    intervalID = setInterval(updateInterval, 500);
}

function updateInterval(){
    //console.log('TIK updateInterval', currentTime());
    //newPanel2.updatePanelItem(2, new Date().getTime().toString());
    //drawOnCanvas();
    panelController.panelList[1].updatePanelItem(0, 'Time', new Date().toLocaleTimeString());
    panelController.panelList[1].updatePanelItem(1, 'Time passed', timePassed());
}

function drawOnCanvas(x,y){
    const canvas = document.getElementById('infoViewCanvas');
    const yellow = 'rgba(240, 255, 0, 0.01)';
    const blue = 'rgba(0, 179, 255, 0.01)';
    
    //this.mouseX = 0;
    //this.mouseY = 0;
    this.ctx = canvas.getContext('2d');
    var radgrad = ctx.createRadialGradient(60,60,0,60,60,60);
  radgrad.addColorStop(0, 'rgba(0, 179, 255, 0.1');
  radgrad.addColorStop(0.8, 'rgba(0, 179, 255, 0.05');
  radgrad.addColorStop(1, 'rgba(0, 179, 255, 0.01)');
    //this.ctx.scale(0.5, 0.5);
    isDrawing = true;
    ctx.fillStyle = radgrad;
    ctx.fillRect(x, y, 4, 4);

    
}
function handleMouseMove(event) {
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
    
    this.mouseX = x =  event.pageX;
    this.mouseY = y = event.pageY;
    var sX = (window.innerWidth / document.getElementById(canvasName).width);
    var sY = (window.innerHeight / document.getElementById(canvasName).height);
    
    console.log(sX, sY)

    drawOnCanvas(x/sX, y/sY)
    // Use event.pageX / event.pageY here
}