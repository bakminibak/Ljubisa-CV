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
        this.enablePanelAnim = true;
        this.panelHolderElement = document.querySelector(panelHolder);
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
            this.panelHolderElement.appendChild(this.newPanel);
        } else {
            let resierEl = this.panelHolderElement.querySelector('.panels-wrapper__resizer');
            this.panelHolderElement.insertBefore(this.newPanel, resierEl);
        }
    
        if (buttonsList) {this.initPanelHeaderButtons(buttonsList)}  

        
    }

    initElements() {
        console.log('init');
        this.panelHolderElement = document.querySelector(panelHolder);
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
                    //removePanel
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
}


class PanelControler {
    constructor(panelsWrapperControler) {
        let panelCounter = 0;
        console.log("PanelControler",panelsWrapperControler);
        let panelList = [];
        //let newPanel11 = new Panel('TETET', 'p11', '.panels-wrapper',['minimize', 'more', 'close']);
        
        this.wrapperInput = document.querySelector("#wrapperInput");

        this.wrapperInput.addEventListener("keyup", event =>{
            //console.log("input changed", event);
            if (event.keyCode === 13) {
                panelCounter++;
                console.log( event.currentTarget.value);
                
                let newPanel = new Panel(event.currentTarget.value, `p${panelCounter}`, panelsWrapperControler,['minimize', 'more', 'close']);
                panelList.push(newPanel);
                console.log(panelList);
            }
        })
    }
    removePanel(panelID = '1') {
        console.log('removePanel', panelID, panelList);

    }
}




  const getRepaintInterval = () => {
    return new Promise((resolve) => {
        requestAnimationFrame((t1) => {
        requestAnimationFrame((t2) => {
            resolve(t2 - t1);
        });
        });
    });
};
const getFps = () => new Promise(resolve => {
    let repaint = 0;
    const start = performance.now();
    const withRepaint = () => {
        requestAnimationFrame(() => {
            if ((performance.now() - start) < 1000) {
                repaint += 1;
                withRepaint();
            } else {
                resolve(repaint);
            }
        });
    };
    withRepaint();
});

const fpsHandler = () => {
    let repaint;
    let stop;
    let ret;
    let start;
    const init = () => {
        ret = undefined;
        stop = false;
        repaint = 0;
        start = performance.now();
    };
    init();
    const withRepaint = () => {
        requestAnimationFrame(() => {
            if (!stop) {
                repaint += 1;
                withRepaint();
            }
        });
    };
    return {
        start: () => {
            init();
            withRepaint();
        },
        end: () => {
            stop = true;
            if (!ret) ret = repaint / ((performance.now() - start) / 1000);
            return ret;
        }
    }
};

const { start, end } = fpsHandler();

function addStars(){
    let maxStars = 30;
    let starEl = starsContainer.querySelector('.star');
    let cln; // = starEl.cloneNode(true);

    

    for (let i =0; i<maxStars; i++) {
        let step = getRandomInt(100);    
        let layer;
        console.log(step);
        
        if (step < 40) layer = starsContainer.querySelector('.behind');
        if (step > 40 && step < 70) layer = starsContainer.querySelector('.middle');                
        if (step > 70) layer = starsContainer.querySelector('.closeup');
        

        cln = starEl.cloneNode(true);
        resizeElement(cln, step);
        randomPositionElement(cln);
        //setTimeout(function(_layer){ _layer.appendChild(cln); }, 300, layer);
        layer.appendChild(cln); 
    }
    
}
function randomPositionElement(el){
    el.style.left=getRandomInt(100)+"%";
    el.style.top=getRandomInt(100)+"%";
};
function resizeElement(el, step = 80){    
    let svg = el.querySelector('svg');
    console.log("resizeElement", step);
    el.style.opacity = step/100;
    svg.style.width = step+"px";
    svg.style.height = step+"px";
    svg.style.border = "1px solid #ccc";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var intervalID;
let panelController = new PanelControler(".panels-wrapper");
//let newPanel1 = new Panel('panel1', 'p1', '.panels-wrapper',['add', 'remove', 'minimize', 'close']);



window.onload = function() {
    init();
    //doSomethingElse();
  };

function init(){
    console.log("doc ready", getRepaintInterval);
    //here code
    //addSettingsInfo("#settings", "TEST Set", 'ready');
    //addStars();
    document.querySelector("#start").addEventListener('click', (event) => {
        console.log("clicked");
    });

    /*
    newPanel1.init();
    newPanel1.addSettingsInfo([["cookieEnabled", navigator.cookieEnabled], ["appCodeName", navigator.appCodeName], ["product", navigator.product]]);
    newPanel1.addTextarea('console', navigator.userAgent)
    newPanel2.addSettingsInfo([["typeof(Worker)", typeof(Worker)], ["s333ssss info", "value"], ["sss44ss info", "value"]]);
    newPanel2.updatePanelItem(2, 400);
    //initTicker();
    */
    console.log(navigator.userAgent);
}

function initTicker() {
    intervalID = setInterval(updateInterval, 1000);
}

function updateInterval(){
    console.log('updateInterval');
    newPanel2.updatePanelItem(2, new Date().getTime().toString());
}