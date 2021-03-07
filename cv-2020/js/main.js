//import "ui.js";
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

class Game {
    constructor(gameBoardID){
        console.log('constructor New Game',gameBoardID);        
        let self = this;
        this.boardCellTypes = {
            WALL: 'wall',
            BLOCK: 'block',
            FOOD: 'food',
            SNAKE_BODY: 'snake_body',
            EMPTY: 'empty'
        }
        this.moveDirectionsTEMP = {
            LEFT: [0,-1],
            RIGHT: [0,1],
            UP: [-1,0],
            DOWN: [1,0]
        }
        let moveDirections = {
            LEFT: 1,
            RIGHT: 2,
            UP: 3,
            DOWN: 4,
        }
        this.gridBlocks = {
            single:         [[1,1]],
            squere:         [[1,1],[1,2],[2,1],[2,2]],
            doubleSquere:   [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]],
            lineX:          [[1,1],[1,2],[1,3],[1,4],[2,1],[2,2],[2,3],[2,4]],
            lineY:          [[1,1],[1,2],[2,1],[2,2],[3,1],[3,2],[4,1],[4,2]],
        }
        let container = document.querySelector(".front .container");
        let gameboard = {};
        this._gameboard = gameboard;
        let localInterval;
        gameboard.gameboardEl = document.createElement("div");
        let _gameboardEl = gameboard.gameboardEl;
        gameboard.gameBoardSize = {
            boardRows: 25,
            boardCols: 75
        }        
       //_gameboardEl.style.gridTemplateRows = `repeat(${gameboard.gameBoardSize.boardRows}, 1fr)`;
        //_gameboardEl.style.gridTemplateColumns = `repeat(${gameboard.gameBoardSize.boardCols}, 1fr)`;

        gameboard.gridBoard = [];
        this.createRandomGrid(gameboard);

        this.snake = new Snake();
        gameboard.gameboardEl.id = gameBoardID;
        gameboard.gameboardEl.classList.add('gameBoard');
        gameboard.gameboardEl.style.gridTemplateRows = `repeat(${gameboard.gameBoardSize.boardRows}, 1fr)`;
        gameboard.gameboardEl.style.gridTemplateColumns = `repeat(${gameboard.gameBoardSize.boardCols}, 1fr)`;
        container.appendChild(gameboard.gameboardEl); 
        
        this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 10, this.gridBlocks.squere);
        this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 50, this.gridBlocks.lineX);
       // this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 50, this.gridBlocks.lineY);
        //this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 5, this.gridBlocks.squere);
        //this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 15, this.gridBlocks.lineY);

        
        this.generateSpecialCells(gameboard, this.boardCellTypes.FOOD, 42);

        
        this.drawCells(gameboard);
        //self.localInterval = setInterval(function(){ self.updateRandomEmptyGrid(gameboard, maxEmpty)}, 100);
        //console.log("Game snake", snake);
        this.drawSnake(this.snake, gameboard);
        //document.addEventListener("keydown", logKey);
        /**/
        document.addEventListener("keydown", event =>{         
            console.log('keydown: ');
            myGameBoard.logKey(event);
        });
        
    }
    get getGameboard(){
        return  this._gameboard;
    }
     /*
    checkNextStep(nextStepCell, direction){
        console.log('checkNextStep');
        
        let rows = this._gameboard.gameBoardSize.boardRows;
        let cols = this._gameboard.gameBoardSize.boardCols;
        let nextCell_id = ((nextStepCell[0]-1) * rows) + nextStepCell[1]+1;
        
        console.log('positionCell', nextCell_id);
        let cellEl = this._gameboard.gameboardEl.querySelector('#cell-ID-'+nextCell_id);
        let myclass= cellEl.className;
        if (myclass==='') {
            console('move cool');
            return nextCell;
        } else  {
            //nextCellDirection = 
            //this.checkNextStep([],);
        }

    }
     */
    checkCellProp(snakeHead, direction){
        console.log('checkCellProp:', snakeHead, direction);
        let __gameBoard = this.getGameboard;
        let nextStepCell = [snakeHead.x + direction[0], snakeHead.y+direction[1]];
        let rows = __gameBoard.gameBoardSize.boardRows;
        let cols = __gameBoard.gameBoardSize.boardCols;
        //let nextStepCell;
        //getGameboard.
        let positionCell = 1 + ((nextStepCell[0]-1) * cols) + nextStepCell[1];
        //console.log('positionCell', positionCell);



        //CHECK OUT OF BOUNDS
        if ((nextStepCell[0] < 1) || (nextStepCell[0] > rows) || (nextStepCell[1] < 0 ) || (nextStepCell[1] >= cols)) {
            console.log("WALL REtURN");
            return [this.boardCellTypes.WALL];
        }
        else {
            let cellEl = __gameBoard.gameboardEl.querySelector('#cell-ID-'+positionCell);
            let myclass = cellEl.className;
            if ((cellEl.className.indexOf(this.boardCellTypes.BLOCK)>=0) || (cellEl.className.indexOf(this.boardCellTypes.WALL)>=0)) {            
                //cellEl.classList.add('selfBite');
                console.log("selfBite");
                return [this.boardCellTypes.BLOCK];
            } 
            if (cellEl.className.indexOf(this.boardCellTypes.SNAKE_BODY)>=0) {            
                //cellEl.classList.add('selfBite');
                console.log("selfBite");
                return [this.boardCellTypes.SNAKE_BODY];
            }            

            if (cellEl.className.indexOf(this.boardCellTypes.FOOD)>=0) {            
                //cellEl.classList.add('eating');
                console.log("eating");
                return [this.boardCellTypes.FOOD, 1];
            }

            return [this.boardCellTypes.EMPTY];
        }

    }

    logKey(e){/* Game movement */
        let nextCellType;
        switch (e.code) {
            case 'ArrowLeft':
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.moveDirectionsTEMP.LEFT);
                console.log('ArrowLeft: ', nextCellType);
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.moveDirectionsTEMP.LEFT, nextCellType);
                
                break;
            case 'ArrowRight':
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.moveDirectionsTEMP.RIGHT);
                console.log('ArrowRight: ', nextCellType);
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.moveDirectionsTEMP.RIGHT, nextCellType);
                
                break;                
            case 'ArrowUp': 
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.moveDirectionsTEMP.UP);
                console.log('ArrowUp: ', nextCellType);       
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.moveDirectionsTEMP.UP, nextCellType);
                
                break;      
            case 'ArrowDown':             
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.moveDirectionsTEMP.DOWN);
                console.log('ArrowDown: ', nextCellType);                 
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.moveDirectionsTEMP.DOWN, nextCellType);  
                
                break;            
            default:
                break;
        }
        //this.snake.moveSnake(e.code);
        this.updateBoard();
    }

    updateBoard() {
        console.log('updateBoard');
        this.drawSnake(this.snake, this._gameboard);
    }      
    createRandomGrid(gameboard){
        let rowList = [];
        
        for (let index = 1; index <= gameboard.gameBoardSize.boardRows; index++) {
            
            let colList = [];
            for (let indexC = 1; indexC <= gameboard.gameBoardSize.boardCols; indexC++) {
                //gameboard.gridBoard.unshift();
                colList.push('empty');                
                //rowList[index].push(indexC);
            }
            rowList.push(colList);
        }
        gameboard.gridBoard = rowList;
    }
    generateSpecialCells(gameboard, cellType, maxEmpty, blockSizeType = this.gridBlocks.single) {
        let offsetX = 2;
        let offsetY = 2;
        console.log('generateSpecialCells:', blockSizeType);
        console.log('generateSpecialCells:', cellType);
        console.log('gameboard:', gameboard.gridBoard);

        for (let index = 0; index < maxEmpty; index++) {
            let randomRow = Math.floor(Math.random() * Math.floor(gameboard.gameBoardSize.boardRows - (offsetX)));
            let randomCell = Math.floor(Math.random() * Math.floor(gameboard.gameBoardSize.boardCols - (offsetY)));
            if (cellType === this.boardCellTypes.FOOD) {
                let blockIndex = gameboard.gridBoard[randomRow][randomCell];               
                while ((gameboard.gridBoard[randomRow][randomCell].indexOf(this.boardCellTypes.EMPTY) > 0) && ((gameboard.gridBoard[randomRow][randomCell].indexOf(this.boardCellTypes.BLOCK) > 0))) {                    
                    //console.log("TEST3 ", gameboard.gridBoard[randomRow][randomCell]);
                    //console.log("TEST3 ", gameboard.gridBoard[randomRow][randomCell].indexOf(this.boardCellTypes.BLOCK));
                    randomRow = Math.floor(Math.random() * Math.floor(gameboard.gameBoardSize.boardRows - (offsetX)));
                    randomCell = Math.floor(Math.random() * Math.floor(gameboard.gameBoardSize.boardCols - (offsetY)));
                    
                }
                gameboard.gridBoard[randomRow][randomCell] = cellType;
                /**/
            } 
            else {
                blockSizeType.forEach(element => {
                    let x = element[0];
                    let y = element[1];
                    gameboard.gridBoard[randomRow + x][randomCell + y] = cellType;
                }); 
            }    

                       
        }    
    }
    randomEmptyGrid(gridBoard, maxEmpty) {       
        let maxCells = gameboard.gameBoardSize.boardRows*gameboard.gameBoardSize.boardCols;
        this.resetEmptyCells(gameboard.gameboardEl);
        for (let index = 0; index < maxEmpty; index++) {
            let elList = gameboard.gameboardEl.querySelectorAll('div');
            let randomCell = Math.floor(Math.random() * Math.floor(maxCells));
            while (elList[randomCell].className.indexOf('empty') > 0) {
                randomCell = Math.floor(Math.random() * Math.floor(maxCells));
            }
            
            elList[randomCell].setAttribute('data-food-weight', Math.floor(Math.random() * Math.floor(5)));
            elList[randomCell].classList.add('empty', 'food');            
        }
    }
    drawCells(gameboard) {
        let boardCell;
        let maxCells = gameboard.gameBoardSize.boardRows*gameboard.gameBoardSize.boardCols;

        console.log('drawCells', gameboard, maxCells);

        //for (let index = 1; index < (gameboard.gameBoardSize.boardRows*gameboard.gameBoardSize.boardCols) + 1; index++) {
            
            let index = 0;
            gameboard.gridBoard.forEach(element => {
                //console.log('Cell', index, gameboard.gameBoardSize.boardRows, gameboard.gameBoardSize.boardCols);
                //const element = array[index];
                //console.log("gameboard.gridBoard element", element);
                element.forEach(innerelement => {
                    index++;
                    
                    //console.log("innerelement", element);
                    boardCell = document.createElement("div");  
                    let newClass = (innerelement === 0) ? 'empty' : innerelement;
                    boardCell.classList.add(newClass); 
                    let rows = Math.round(((index)/gameboard.gameBoardSize.boardCols));
                    let cols = (Math.round((index % gameboard.gameBoardSize.boardCols)) === 0 ) ? gameboard.gameBoardSize.boardCols : Math.round(index % gameboard.gameBoardSize.boardCols);
                    let cellNumber = document.createTextNode('('+index+') '+' X:'+rows +' Y:'+cols);
                    
                    boardCell.title = '('+index+') '+' X:'+rows +' Y:'+cols; 
                    boardCell.id = 'cell-ID-' + index; 
    
                    
                    if (innerelement === 2) boardCell.classList.add('food');      
    
                    boardCell.appendChild(cellNumber);
                    gameboard.gameboardEl.appendChild(boardCell);                    
                });
            });
    };

    resetEmptyCells(gameboardEl){
        console.log('resetEmptyCells', gameboardEl);
        console.log('resetEmptyCells', gameboardEl.children);
        let el = gameboardEl.childNodes;

        el.forEach(element => {
            element.className = '';
        });

    }

    updateRandomEmptyGrid(gameboard, maxEmpty, blockType = this.gridBlocks.lineY) {       
        console.log('updateRandomEmptyGrid:', blockType);
        let maxCells = gameboard.gameBoardSize.boardRows*gameboard.gameBoardSize.boardCols;
        this.resetEmptyCells(gameboard.gameboardEl);
        for (let index = 0; index < maxEmpty; index++) {
            let elList = gameboard.gameboardEl.querySelectorAll('div');
            let randomCell = Math.floor(Math.random() * Math.floor(maxCells));
            while (elList[randomCell].className.indexOf('empty') > 0) {
                randomCell = Math.floor(Math.random() * Math.floor(maxCells));
            }
            
            elList[randomCell].setAttribute('data-food-weight', Math.floor(Math.random() * Math.floor(5)));
            elList[randomCell].classList.add('food');            
        }
    }

    drawSnake(snake, gameboard){
        console.log("drawSnake", snake.snakeBody);
        console.log("gameboard", gameboard);
        let counter = 0
        let grid = gameboard.gameboardEl.querySelectorAll('div');
        let actives = gameboard.gameboardEl.querySelectorAll('.snake');
        actives.forEach(element => {element.classList.remove('snake', 'head');});
        //gameboard.gameboardEl.innerHTML = '';

        snake.snakeBody.forEach(segment => {          
            
            //console.log("positionCell:", segment.x, gameboard.gameBoardSize.boardCols);  
            let positionCell = ((segment.x-1) * gameboard.gameBoardSize.boardCols) + segment.y;

            grid[positionCell].className = '';
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
            {x: 2, y: 2},
            {x: 2, y: 3},
            {x: 2, y: 4}
        ];
        this._foodWeightEaten = 0;
        let _snakeDirections = {
            LEFT: 'left',
            RIGHT: 'right',
            TOP: 'top',
            BOTTOM: 'bottom',
        }
        this.snakeDirection = _snakeDirections;
    }
    get snakeBody() {
        return this._snakeBody;
    }
    get snakeHead(){
        return this._snakeBody[0];
    }
    set foodWeightEaten(foodWeight) {
        this._foodWeightEaten = foodWeight;
    } 
    generateNewSnake(snakeWeight = 4){
        let newSnakeBody = [];
        for (let index = 0; index < array.length; index++) {
            for (let indexA = 0; indexA < array.length; indexA++) {
                const element = {index, indexA};
                
            }            
        }
    }
    moveSnake(direction, _cellType){
        console.log("moveSnake: ", _cellType);        
        let cellType = _cellType[0];
        let newWeight = 0;
        (_cellType[1]) ? newWeight = _cellType[1] : newWeight;

        let head = {};

               
        head.x = this._snakeBody[0].x+direction[0];
        head.y = this._snakeBody[0].y+direction[1];
        if (cellType === 'food') {
            this._foodWeightEaten += newWeight;
        }
        this._snakeBody.unshift(head);
        if (this._foodWeightEaten>0) {
            this._foodWeightEaten--;
        } else {
            this._snakeBody.pop();
        }
        console.log("moveSnake _snakeBody: ", this._snakeBody);
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
        let autoResults = [
            'Weather',
            'Browser',
            'Mouse Heat Map',
            'Exit',
        ];

        this.panelList = [];           
        
        this.createWrapperUI_Elements(autoResults);
        
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
      
    createWrapperUI_Elements(autoResults) {
        //createStatusBar
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