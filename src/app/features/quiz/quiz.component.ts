import { WordListService } from './../../shared/services/word-list.service';
import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/shared/services/interfaces/word';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  id:number=0;
  selectedCategory: any = null;  //checked answer will be stored in this variable
  answerdQuestions:any[]=[];    //array that contains all checked answers
  answers:any[]=[
    {name:"noun", key: 'A'},
    {name:"verb", key: 'B'},
    {name:"adjective", key: 'C'},
    {name:"adverb", key: 'D'}
  ];
  wordsArray:Word[]=[]; //words in TestData.json will be stored here
  currentQuestion:number=0;
  correctAnswer:number=0;
  inCorrectAnswer:number=0;
  value: number = ((this.correctAnswer+this.inCorrectAnswer)/15)*100; //used in progress bar

  progress: number=0;
  suitableAnswer:string='';
  constructor(private _words:WordListService,private _activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.getWords();
  }
  getWords(){
this._words.getWordList().subscribe(
  res=>{
    this.wordsArray=res;
    console.log("getword()==>",this.wordsArray)

  }
)
  }
  nextQuestion(){
    this.currentQuestion++;
    this.selectedCategory="";
  }
  prevQues(){ this.currentQuestion--;}
  answer(option:Word){
    if(this.selectedCategory=option.pos){
      this.correctAnswer++;
      this.currentQuestion++;
      this.getProgressPercentage();
    }else{

      this.inCorrectAnswer++;
      this.currentQuestion++;
    }
  }
  getProgressPercentage(){
    this.progress=(this.currentQuestion/this.wordsArray.length)*100;
    return this.progress;
  }

}
