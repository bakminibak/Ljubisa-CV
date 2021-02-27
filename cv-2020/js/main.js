//import "ui.js";
/*
let mainAnimationContainer = document.querySelector("main-animation");
let starsContainer = document.querySelector("#stars");
let layerBehind = starsContainer.querySelector(".behind");
let layerMiddle = starsContainer.querySelector(".middle");
let layerCloseup = starsContainer.querySelector(".closeup");
*/


class Panel {
    constructor(panelName, panelID, panelHolder, buttonsList) {
        let bottomResizerEnabled = true;
        this.panelID = panelID;
        this.enablePanelAnim = true;
        this.panelHolderElement = document.querySelector(panelHolder);
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

        if (!bottomResizerEnabled) {
            this.panelHolderElement.appendChild(this.newPanel);
        } else {
            let resierEl = this.panelHolderElement.querySelector('.panels-wrapper__resizer');
            this.panelHolderElement.insertBefore(this.newPanel, resierEl);
        }
    
        if (buttonsList) {this.initPanelHeaderButtons(buttonsList)}  

        
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
    updatePanelItem(itemRow, value){
        console.log('updatePanelItem: ', this);
        let items = this.newPanel.querySelectorAll('.info > div');
        let statValue = items[Number(itemRow)].querySelector('.stat-value');
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

        const panelCounterPrefix = 'p-item-';        
        const defaultButtons = ['minimize', 'more', 'close'];       

        this.panelList = [];   
        
        this.wrapperInput = document.createElement("input");
        this.wrapperInput.id = 'wrapperInput';

        panelHolderElement.insertBefore(this.wrapperInput, panelHolderElement.querySelector('.panels-wrapper__resizer'));
     

        console.log("PanelControler constructor: ", panelsWrapperControler);
        //this.wrapperInput = document.querySelector("#wrapperInput");
        this.wrapperInput.addEventListener("keyup", event =>{
            if (event.keyCode === 13) {
                this.addNewPanel(event.currentTarget.value, panelCounterPrefix + panelCounter, panelsWrapperControler, defaultButtons)
                panelCounter++;                
            }
        })
    }
    addNewPanel(value, panelID, panelsWrapperControler, defaultButtons){
        let newPanel = new Panel(value, panelID, panelsWrapperControler, defaultButtons);
        this.panelList.push(newPanel);
    }
    removePanel(panelID) {
        console.log('-- PanelController removePanel');
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
    let newPanel1 = new Panel('panel1', 'p1', '.panels-wrapper',['add', 'remove', 'minimize', 'close']);
    let newPanel2 = new Panel('panel2', 'p2', '.panels-wrapper',['add', 'remove', 'minimize', 'close']);
    
    //newPanel1.init();
    newPanel1.addSettingsInfo([["cookieEnabled", navigator.cookieEnabled], ["appCodeName", navigator.appCodeName], ["product", navigator.product]]);
    newPanel1.addTextarea('console', navigator.userAgent)
    newPanel2.addSettingsInfo([["typeof(Worker)", typeof(Worker)], ["s333ssss info", "value"], ["sss44ss info", "value"]]);
    newPanel2.updatePanelItem(2, 400);
    //initTicker();
    /**/
    console.log(navigator.userAgent);
}

function initTicker() {
    intervalID = setInterval(updateInterval, 1000);
}

function updateInterval(){
    console.log('updateInterval');
    newPanel2.updatePanelItem(2, new Date().getTime().toString());
}