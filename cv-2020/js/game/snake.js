export class Snake {
    constructor(){
        let position = {x: 10, y: 1};
        this._snakeBody = [
            {x: 2, y: 2},
            {x: 2, y: 3},
            {x: 2, y: 4}
        ];
        this._foodWeightEaten = 0;
        this.defaultDirection = [0,0];
        this._currentDirection = this.defaultDirection;
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
    get currentDirection() {
        return this._currentDirection;
    }
    set currentDirection(_direction) {
        this._currentDirection = _direction;
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
        console.log("moveSnake _cellType: ", _cellType);
        this.currentDirection = direction;
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