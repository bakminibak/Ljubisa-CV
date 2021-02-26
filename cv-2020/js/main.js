/*
let mainAnimationContainer = document.querySelector("main-animation");
let starsContainer = document.querySelector("#stars");
let layerBehind = starsContainer.querySelector(".behind");
let layerMiddle = starsContainer.querySelector(".middle");
let layerCloseup = starsContainer.querySelector(".closeup");
*/

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

function addSettingsInfo(panel, title, value){
    console.log("addSettingsInfo:", title, value);
    let settingsEl = document.querySelector(panel+' .info');
    const newItem = document.createElement("div");
    const newItemTitleEl = document.createElement("div");
    const newItemValueEl = document.createElement("div");
    const newItemTitle = document.createTextNode(title);
    const newItemValue = document.createTextNode(value);
    newItemTitleEl.appendChild(newItemTitle);
    newItemValueEl.appendChild(newItemValue);
    newItem.appendChild(newItemTitleEl);
    newItem.appendChild(newItemValueEl);
    settingsEl.appendChild(newItem);
    

    //classList.add("foo");

}

function createPanel(panelName, panelID, panelHolder, buttonsList){    
    let panelHolderElement = document.querySelector(panelHolder);
    const newPanel = document.createElement("div");
    const newPanelHeader = document.createElement("header");
    const newPanelHeaderLabel = document.createElement("div");
    const newPanelInfo = document.createElement("div");
    
    const newPanelTitle = document.createTextNode(panelName);

    newPanel.classList.add("panel", panelID);
    newPanelInfo.classList.add("info");
    newPanelHeaderLabel.appendChild(newPanelTitle);

    newPanelHeader.appendChild(newPanelHeaderLabel);
    newPanel.appendChild(newPanelHeader);
    newPanel.appendChild(newPanelInfo);
    panelHolderElement.appendChild(newPanel);

    if (buttonsList) {
        const buttonWrapper = document.createElement("div");
        newPanelHeader.appendChild(buttonWrapper);
        buttonWrapper.classList.add("buttons");        
        buttonsList.forEach(element => {
            console.log("buttonlist:" , element);
            let panelButton = document.createElement("div");
            panelButton.classList.add('button', element);
            buttonWrapper.appendChild(panelButton);
        });
        newPanelHeader.appendChild(buttonWrapper);
    }
    console.log('createPanel:', panelHolderElement);
}
document.addEventListener("DOMContentLoaded",function(){
    console.log("doc ready");
    //here code
    //addSettingsInfo("#settings", "TEST Set", 'ready');
    //addStars();
    document.querySelector("#start").addEventListener('click', (event) => {
        console.log("clicked");
    });
    createPanel('panel1', 'panel1', '.panels-wrapper',['add', 'remove', 'close']);
    createPanel('panel2', 'panel2','.panels-wrapper');
    createPanel('panel3', 'panel3','.panels-wrapper');
});
