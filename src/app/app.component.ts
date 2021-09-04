import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Board } from './board.model'


export interface DialogData {
  val: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  isChecked = true;
  generation: number;

  gameStatus:number;
  board: Board;
  numCols: number;
  numRows: number;
  public isVisible: boolean = false;
  public openMenu: boolean = false;
  isOver = false;
  val = '';
  cellName = '';
  name = '';
  result = ''
  list1:any = [];
  list2:any = []

  constructor(public dialog: MatDialog){

    this.numCols = 23;
    this.numRows = 22
    this.generation = 0;
    this.gameStatus = -1;

    this.board = new Board(this.numCols, this.numRows, this.isChecked)
  }

  ngOnInit(){
    console.log(this.isChecked)
    setInterval(() =>{ 
      if(this.gameStatus === 0){
        this.board.checkBoard();
        this.generation++
      }
    },10)
  }
  
  // Function checks menu button state
  clickMenu(){
    this.openMenu = !this.openMenu;
  }
/* 
This Function execute when user enter cell name. It takes input and search for the cell status and assign status to pop up
 */
  onNameSelect(){
    this.cellName = this.cellName
    console.log(this.cellName,typeof(this.cellName))
    console.log(this.list1,this.list2)
    this.name = this.list2[this.list1.indexOf(this.cellName)]
    console.log(this.name)
    if(this.list1.indexOf(this.cellName) == -1){
      this.result = "Cell name not found"
    }
    else{
    if(this.board.status(parseInt(this.name[0]),parseInt(this.name[1]))){
      console.log("ALIVE")
      this.result = "ALIVE"
    }
    else{
      this.result = "DEAD"
    }
  }
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  

  
  }
  /* 

  This function excutes when slider gets toggled.
  In on state, Random values are created for cells
  In off state, all values of the cells are 0(dead)
  */

  selectDynamic(e: any){
    if(this.isChecked == false){
      this.list1 = []
      this.list2 = []
      this.isChecked = true
      this.gameStatus = -1
      this.board = new Board(this.numCols, this.numRows, this.isChecked)
      
      
    }
    else{
      this.isChecked = false
      this.list1 = []
      this.list2 = []
      this.board = new Board(this.numCols, this.numRows, this.isChecked)
      
    }
  }
/*
This function is excuted when user selects the cell.
Dialog box is created to name cell
 */
  dab(pRow: number, pCol: number){
    // console.log(pRow,pCol)
    this.val = ''
    if(this.list1.length < 100 ){

    const dialogRef = this.dialog.open(DialogCell, {
      width: '350px',
      data:{val: this.val}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.val = result;
      console.log(this.val)
      const list = [pRow,pCol]
      this.list1.push(this.val)
      this.list2.push(list)
    });

    this.board.changeStatus(pRow,pCol);

  }
}
/*
This function used for start and stop of program execution */
  onPause(x:number){
    if (x === 0){
      this.gameStatus = 1
    }
    else  {
      this.gameStatus = 0
      
    } 
    // this.gameStatus = this.gameStatus === 0 ? 1 : 0;
  }

  
  


}

/*

New component. for dialog box
*/

@Component({
  selector: 'dialog-cell',
  templateUrl: 'dialog.component.html',
})
export class DialogCell {

  constructor(
    public dialogRef: MatDialogRef<DialogCell>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}
