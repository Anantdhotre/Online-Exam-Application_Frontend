import { Component, OnInit } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{

  score:any="";
  allanswers:Answer[]=[];

  constructor(private questionservice:QuestionService)
  {
    this.questionservice.getAllAnswers().subscribe(arrayfromresponse=>this.allanswers=arrayfromresponse);
  }

  ngOnInit(): void 
  {
    this.questionservice.endexam().subscribe(score=>this.score=score);
  }

}
