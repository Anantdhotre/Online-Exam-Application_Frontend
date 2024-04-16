import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';
import { ScoreComponent } from './score/score.component';
import { QuestionComponent } from './question/question.component';





export const routes: Routes = [

    {path:'login',component:LoginComponent},
    
    {path:"register",component:UserComponent},

    {path:'question',component:QuestionComponent},

    {path:'score',component:ScoreComponent},

    
];