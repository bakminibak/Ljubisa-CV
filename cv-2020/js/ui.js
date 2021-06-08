export class Panel {
    constructor(panelName, panelID, _panelHolderElement, buttonsList, infoElements = null) {
        console.log("Panel constructor: ", buttonsList);
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

export class PanelController {
    constructor(_panelsWrapperControler) {
        console.log('PanelController:', _panelsWrapperControler);
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
        let commands = [
            'Weather',
            'Browser',
            'Mouse Heat Map',
            'Exit',
        ];

        this.panelList = [];           
        
        this.createWrapperUI_Elements(commands);
        
        this.wrapperInput.addEventListener("keyup", event =>{            
            this.setPanelWrapperState('status-working');
            this.resetPanelWrapperState(100);
            if (event.keyCode === 13) {
                let foo = event.currentTarget.value;
                this.addNewPanel(foo, panelCounterPrefix + panelCounter, defaultButtons);
                //this.generateWeatherPanel();
                //this.resetPanelWrapperState(500);
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
      
    createWrapperUI_Elements(commands) {
        //createStatusBar
        
        let autoResults = commands;
        let panelHolderEl =  this.panelHolderElement.querySelector('.panels-wrapper__resizer');

        this.topStatusBar = document.createElement("header");

        this.topStatusBar.id = "header-statusbar";
        //Create Input
        
        this.wrapperInput = document.createElement("input");
        this.wrapperInput.id = 'wrapperInput';
        this.wrapperInput.setAttribute('list', 'autoresult');
        this.wrapperInput.placeholder = 'Create New Panel';

        //Create Datalist 
        let datalistEl = document.createElement('datalist');
        datalistEl.id = 'autoresult';
        
        autoResults.forEach(element => {
            let itemOption= document.createElement('option');
            itemOption.value = element;
            //itemOption.id = 'autoresult';            
            datalistEl.appendChild(itemOption);
        });
        
        this.panelHolderElement.insertBefore(this.topStatusBar, panelHolderEl);
        this.panelHolderElement.insertBefore(this.wrapperInput, panelHolderEl);
        this.panelHolderElement.insertBefore(datalistEl, panelHolderEl);

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
    addNewPanel(value, panelID, defaultButtons, infoElement){
        console.log('PanelController addNewPanel:', value);
        let panelsWrapperControler = this.panelHolderElement;
        console.log('PanelController addNewPanel2:', panelsWrapperControler);
        console.log('PanelController defaultButtons:', defaultButtons);
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
        this.setPanelWrapperState();
        this.timeoutID = setTimeout(function(){ 
            console.log("setTimeout", this);
        }, time);
    }
    startDrag(){
        console.log('startDrag: ');
        //this.moveWrapper();        
        this.dragg.dragging = true;

        //this.intervalID3 = setInterval()
    }
    generateWeatherPanel(){
        const apiKey = "4d8fb5b93d4af21d66a2948710284366";
        
        //form.addEventListener("submit", e => {
        //e.preventDefault();
        const listItems = list.querySelectorAll(".ajax-section .city");
        const inputVal = this.wrapperInput.value;

        //ajax here
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
            }@2x.png`;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
                <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                <figure>
                <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
                <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
            `;
            li.innerHTML = markup;
            list.appendChild(li);
            })
            .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
            });

        msg.textContent = "";
        //form.reset();
        //input.focus();
        //});
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