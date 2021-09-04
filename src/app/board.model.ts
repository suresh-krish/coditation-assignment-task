export class Board{

    board: number[][] ;//2-d array board

    //Initiates new board with condition of random values or all 0 values
    constructor(pWidth:number, pheight:number, stat:boolean ){
        this.board = [];
        for(let i = 0; i<pWidth;i++){
            this.board[i] = [];
            for(let j= 0;j<pheight;j++){
                if(stat){
                    console.log(stat)
                    this.board[i][j] = (Math.random()>=0.5)? 1 : 0;
                }
                else{
                    this.board[i][j] = 0
                }
                
                
            }
        }

    }
    //Gives status of a particular cell
    status(X:number, Y:number):number{
        return this.board[X][Y];
    }

    //changes status from 1 t0 0, 0 to 1 when user click on particular cell
    changeStatus(X:number, Y:number){
        this.board[X][Y] = this.board[X][Y] === 0 ? 1 : 0;

    }

    /*In this function a duplicate board is created and after all the
     conditions satisfied by each cell it is again copied to orginal board*/
    checkBoard(){
        let tmboard: number[][] = [];
        for(let i = 0;i < this.board.length;i++){
            tmboard[i] = [];
            for(let j = 0; j< this.board[i].length;j++){
                tmboard[i].push(this.checkRules(i,j));


            }
        }

        this.board = [...tmboard];
    }
    /* 
    in this function, each cell check its conditions given according to the requirement and get updated with status
    */

    checkRules(X:number, Y:number):number {
        const width = this.board.length;
        const height = this.board[0].length;

        const xMinus = X - 1 < 0 ? width - 1 : X - 1;
        const xPlus = X +1 >= width ? 0 : X + 1;
        const yMinus = Y - 1 < 0 ? height - 1 : Y - 1;
        const yPlus = Y + 1 >= height ? 0 : Y + 1;
        const currentStatus = this.board[X][Y];
        const currentCell = this.board[xMinus][yMinus] + 
        this.board[xMinus][Y] + this.board[xMinus][yPlus] +
        this.board[X][yMinus] + this.board[X][yPlus] +
        this.board[xPlus][yMinus] + this.board[xPlus][Y] +
        this.board[xPlus][yPlus];

        if(currentStatus === 1 && (currentCell === 2 || currentCell === 3)) {
            return 1
        }

        if(currentStatus === 0 && currentCell === 3){
            return 1
        }

        return 0;

    }
}