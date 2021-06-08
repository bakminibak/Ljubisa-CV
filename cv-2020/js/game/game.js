import {Snake} from "../game/snake.js";

export class Game {
    constructor(gameBoardID){
        console.log('constructor New Game',gameBoardID);  
        
        const _SNAKE_SPEED = 1;      
        let _levelsTimers = {
            currentLevelTimer: 0,
            level1Timer: 3
        }
        let self = this;
        let _lastRenderTime = 0;
        let _boardCellTypes = {
            WALL: 'wall',
            BLOCK: 'block',
            FOOD: 'food',
            SNAKE_BODY: 'snake',
            EMPTY: 'empty'
        }
        let _snakeMoveDirections = {
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
        let _gridBlocks = {
            single:         [[1,1]],
            squere:         [[1,1],[1,2],[2,1],[2,2]],
            doubleSquere:   [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]],
            lineX:          [[1,1],[1,2],[1,3],[1,4],[2,1],[2,2],[2,3],[2,4]],
            lineY:          [[1,1],[1,2],[2,1],[2,2],[3,1],[3,2],[4,1],[4,2]],
        }
        let container = document.querySelector(".front .container");
        let gameboard = {};
        let localIntervalID;
        let gameInterval = 5000;
        gameboard.gameboardEl = document.createElement("div");
        gameboard.gameBoardSize = {
            boardRows: 45,
            boardCols: 45
        }        
        
        let _snake= new Snake();

        gameboard.gridBoard = [];
        this.levelsTimers = _levelsTimers;
        this.SNAKE_SPEED = _SNAKE_SPEED;
        this.snake = _snake;        
        this.lastRenderTime = _lastRenderTime;        
        this.boardCellTypes = _boardCellTypes;        
        this.snakeMoveDirections = _snakeMoveDirections;        
        this.gridBlocks = _gridBlocks;        
        this._gameboard = gameboard;

        this.createGrid(gameboard);
        gameboard.gameboardEl.id = gameBoardID;
        gameboard.gameboardEl.classList.add('gameBoard');
        gameboard.gameboardEl.style.gridTemplateRows = `repeat(${gameboard.gameBoardSize.boardRows}, 1fr)`;
        gameboard.gameboardEl.style.gridTemplateColumns = `repeat(${gameboard.gameBoardSize.boardCols}, 1fr)`;
        container.appendChild(gameboard.gameboardEl); 
        
        this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 3, this.gridBlocks.squere);
        this.generateSpecialCells(gameboard, this.boardCellTypes.BLOCK, 5, this.gridBlocks.lineX);       
        this.generateSpecialCells(gameboard, this.boardCellTypes.FOOD, 20);
        
        console.log('constructor:',gameboard.gridBoard);
        
        //let newAddedGrid = this.addNewLevelToGrid(10);
        //this.addNewRowsToView(newAddedGrid);

        this.drawCells(gameboard.gridBoard);

        this.drawSnake(this.snake, gameboard);
        //document.addEventListener("keydown", logKey);
        /**/ 
        document.addEventListener("keydown", event =>{         
            console.log('keydown: ');
            self.logKey(event);
        });
        
        localIntervalID = setInterval(
            this.updateInterval.bind(this),
            gameInterval
        )
        /**/
       window.requestAnimationFrame((t) => this.updateInterval(t));
        
    }
    
    checkCellProp(snakeHead, direction){
        let __gameBoard = this._gameboard;
        let nextStepCell = [snakeHead.x + direction[0], snakeHead.y+direction[1]];
        let rows = __gameBoard.gameBoardSize.boardRows;
        let cols = __gameBoard.gameBoardSize.boardCols;
        
        //console.log('checkCellProp:', nextStepCell);
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
            cellEl.className.indexOf(this.boardCellTypes.SNAKE_BODY);
            //console.log('myclass check: ', myclass);
            if ((myclass.indexOf(this.boardCellTypes.BLOCK)>=0) || (myclass.indexOf(this.boardCellTypes.WALL)>=0)) {            
                //cellEl.classList.add('selfBite');
                console.log("WALL");
                return [this.boardCellTypes.BLOCK];
            } 
            if (myclass.indexOf(this.boardCellTypes.SNAKE_BODY)>=0) {            
                //cellEl.classList.add('selfBite');
                console.log("selfBite");
                return [this.boardCellTypes.SNAKE_BODY];
            }            

            if (myclass.indexOf(this.boardCellTypes.FOOD)>=0) {            
                //cellEl.classList.add('eating');
                console.log("eating");
                return [this.boardCellTypes.FOOD, 1];
            }

            return [this.boardCellTypes.EMPTY];
        }

    }

    autoMoveSnake(){
        //console.log("auto move snake");
        let nextCellType = this.checkCellProp(this.snake.snakeHead, this.snake.currentDirection);
        //this.snake.moveSnake(this.snake.currentDirection, nextCellType);
    }
    logKey(e){/* Game movement */
        let nextCellType;
        switch (e.code) {
            case 'ArrowLeft':
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.snakeMoveDirections.LEFT);
                console.log('ArrowLeft: ', nextCellType);
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.snakeMoveDirections.LEFT, nextCellType);
                
                break;
            case 'ArrowRight':
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.snakeMoveDirections.RIGHT);
                console.log('ArrowRight: ', nextCellType);
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.snakeMoveDirections.RIGHT, nextCellType);
                
                break;                
            case 'ArrowUp': 
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.snakeMoveDirections.UP);
                console.log('ArrowUp: ', nextCellType);       
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.snakeMoveDirections.UP, nextCellType);
                
                break;      
            case 'ArrowDown':             
                nextCellType = this.checkCellProp(this.snake.snakeHead, this.snakeMoveDirections.DOWN);
                console.log('ArrowDown: ', nextCellType);                 
                if (nextCellType != this.boardCellTypes.WALL &&
                    nextCellType != this.boardCellTypes.BLOCK) this.snake.moveSnake(this.snakeMoveDirections.DOWN, nextCellType);  
                
                break;            
            default:
                break;
        }
        //this.snake.moveSnake(e.code);
        this.updateBoard();
    }
    updateInterval(currentTime) {        
        window.requestAnimationFrame((t) => this.updateInterval(t));
        const secondsSinceLastRender = (currentTime - this.lastRenderTime) /1000;
        if (secondsSinceLastRender < 1 / this.SNAKE_SPEED ) return;
        
        this.autoMoveSnake();
        this.levelsTimers.currentLevelTimer = this.levelsTimers.currentLevelTimer + 1;
        this.lastRenderTime = currentTime;        
        if (this.levelsTimers.currentLevelTimer >= this.levelsTimers.level1Timer) {
            //console.log('currentTime > this.levelsTimers.level1Timer', this.levelsTimers.currentLevelTimer > this.levelsTimers.level1Timer);
            this.levelsTimers.currentLevelTimer = 0;
            //let newAddedGrid = this.addNewLevelToGrid(2);
            //this.addNewRowsToView(newAddedGrid);
        }        
    }
    addNewRowsToView(newAddedGrid){
        console.log('addNewRowsToView: ', newAddedGrid);
        console.log('ROWS: ', this._gameboard.gridBoard.length);
        console.log('COLS: ', this._gameboard.gridBoard[0].length);

        this.drawCells(newAddedGrid);

    }
    updateBoard() {
        //console.log('updateBoard');
        //this.drawCells(this._gameboard)
        this.drawSnake(this.snake, this._gameboard);
    }      
    createGrid(gameboard){
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
            
            console.log('gameboard CEll:', gameboard.gridBoard[randomRow][randomCell].toUpperCase());
            console.log('gameboard cellType:', cellType.toUpperCase());
            console.log('gameboard this.boardCellTypes.FOOD:', this.boardCellTypes.FOOD.toUpperCase());
            console.log('====:', (cellType.toUpperCase() === this.boardCellTypes.FOOD.toUpperCase()));
            if (cellType.toUpperCase() === this.boardCellTypes.FOOD.toUpperCase()) {
                let blockIndex = gameboard.gridBoard[randomRow][randomCell];
                console.log("TEST2 ", gameboard.gridBoard[randomRow][randomCell]);
                while ((gameboard.gridBoard[randomRow][randomCell].indexOf(this.boardCellTypes.EMPTY) > 0) && ((gameboard.gridBoard[randomRow][randomCell].indexOf(this.boardCellTypes.BLOCK) > 0))) {                    
                    console.log("TEST3 ", gameboard.gridBoard[randomRow][randomCell]);
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
    drawCells(gridBoard) {
        
        console.log('drawCells',this._gameboard.gridBoard);
        let boardCell;
        let boardRows = gridBoard.length+1;
        let boardCols = gridBoard[0].length;
        let maxCells = boardRows*boardCols;
        let gameBoardLstID = 0; //this._gameboard.gridBoard.length;

        //for (let index = 1; index < (gameboard.gameBoardSize.boardRows*gameboard.gameBoardSize.boardCols) + 1; index++) {
            
            let index = gameBoardLstID;
            gridBoard.forEach(element => {
                //console.log('Cell', index, gameboard.gameBoardSize.boardRows, gameboard.gameBoardSize.boardCols);
                //const element = array[index];
                //console.log("gameboard.gridBoard element", element);
                element.forEach(innerelement => {
                    index++;
                    
                    //console.log("innerelement", element);
                    boardCell = document.createElement("div");  
                    let newClass = (innerelement === 0) ? 'empty' : innerelement;
                    boardCell.classList.add(newClass);
                    let rows = gameBoardLstID + 1 + Math.floor(((index)/boardCols));
                    let cols = ((index % boardCols) === 0 ) ? boardCols : (index % boardCols);
                    let cellNumber = document.createTextNode('('+index+') '+' X:'+rows +' Y:'+cols);
                    
                    boardCell.title = '('+index+') '+' X:'+rows +' Y:'+cols; 
                    boardCell.id = 'cell-ID-' + index; 
    
                    
                    //if (innerelement === 2) boardCell.classList.add('food');      
    
                    boardCell.appendChild(cellNumber);
                    this._gameboard.gameboardEl.appendChild(boardCell);                    
                });
            });
            
        this._gameboard.gameboardEl.style.gridTemplateRows = `repeat(${this._gameboard.gameBoardSize.boardRows}, 1fr)`;
        this._gameboard.gameboardEl.style.gridTemplateColumns = `repeat(${this._gameboard.gameBoardSize.boardCols}, 1fr)`;
    };

    resetEmptyCells(gameboardEl){
        console.log('resetEmptyCells', gameboardEl);
        console.log('resetEmptyCells', gameboardEl.children);
        let el = gameboardEl.childNodes;

        el.forEach(element => {
            element.className = '';
        });

    }

    drawSnake(snake, gameboard){
        //console.log("drawSnake", snake.snakeBody);
        //console.log("gameboard", gameboard);
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
    addNewLevelToGrid(rows2Add = 25){
        console.log('1 addNewLevelToGrid: ', this._gameboard, rows2Add);
        let rowList = [];
        
        for (let index = 1; index <= rows2Add; index++) {
            
            let colList = [];
            for (let indexC = 1; indexC <= this._gameboard.gameBoardSize.boardCols; indexC++) {
                //gameboard.gridBoard.unshift();
                colList.push('empty');                
                //rowList[index].push(indexC);
            }
            rowList.push(colList);
            this._gameboard.gridBoard.push(colList);
            //this._gameboard.gridBoard.push(colList);
        }
        //
        this._gameboard.gameBoardSize.boardRows += rows2Add;
        console.log('2 addNewLevelToGrid', this._gameboard, this._gameboard.length);
        return rowList;
    }

}