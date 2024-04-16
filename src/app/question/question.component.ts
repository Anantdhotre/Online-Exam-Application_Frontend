import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Answer, Question, QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  
  subject:any='';
  username:any='';
  question:Question=new Question(0,'','','','','','','');
  submittedAnswer:string='';
  answer:Answer=new Answer(0,'','','');
  remainingtime=121;
  durationMessage="";

  allanswers:Answer[]=[];
  selected=false;



  constructor(private questionService:QuestionService,private router:Router)
  {
    this.subject=sessionStorage.getItem("subject");
    this.username=sessionStorage.getItem("username");
  }
  
  ngOnInit(): void 
  {
    setInterval(()=>{

      this.remainingtime=this.remainingtime-1;

      if(this.remainingtime==0)
      {
        this.endexam();
      }

      let minutes=Math.floor(this.remainingtime/60);

      let seconds=Math.floor(this.remainingtime%60);

      this.durationMessage="Time Remaining :- " + minutes + ":" + seconds;

    } , 1000);
    
       this.questionService.getFirstQuestion(this.subject).subscribe((questionFromResponse: Question)=>this.question=questionFromResponse);

  }


    nextQuestion()
  {
    this.selected=false;
    this.questionService.getAllAnswers().subscribe(response=>this.allanswers=response);
        this.questionService.nextQuestion().subscribe(response=>this.question=response) ;
  }

  previousQuestion()
  {
    this.selected=false;
    this.questionService.getAllAnswers().subscribe(response=>this.allanswers=response);
    this.questionService.previousQuestion().subscribe(response=>this.question=response) ;
  }

  saveAnswer()
  {
    this.answer.originalAnswer=this.question.answer;
    this.answer.qno=this.question.qno;
    this.answer.qtext=this.question.qtext;
    this.answer.submittedAnswer=this.submittedAnswer;

    this.questionService.saveAnswer(this.answer).subscribe();
  }

  endexam()
  {
    this.router.navigate(['score']);
  }

  compare(currentOption:string)
  {
      for(var i=0;i<this.allanswers.length;i++)
      {
        var answer=this.allanswers[i];

          if(this.question.qno==answer.qno && answer.submittedAnswer==currentOption)
          {
            return  "green";
          }
      }

      return  "red";
  }

  compare2(currentOption:string)
  {
      for(var i=0;i<this.allanswers.length;i++)
      {
          var answer=this.allanswers[i];

          if(this.question.qno==answer.qno && answer.submittedAnswer==currentOption)
          {
            return true;
          }
      }

      return false;
  }

}

