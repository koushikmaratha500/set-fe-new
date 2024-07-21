import { Routes } from '@angular/router';
// pages
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// pages-products
import { CbseComponent } from './pages/cbse/cbse.component';
import { StateBoardComponent } from './pages/state-board/state-board.component';
import { SkillEducationComponent } from './pages/skill-education/skill-education.component';
import { RoboticsAiComponent } from './pages/robotics-ai/robotics-ai.component';
import { RoboticsIotComponent } from './pages/robotics-iot/robotics-iot.component';
import { RoboticsComponent } from './pages/robotics/robotics.component';
import { GameDevelopmentComponent } from './pages/game-development/game-development.component';
import { IitFoundationComponent } from './pages/iit-foundation/iit-foundation.component';
// Pages Primary
import { FirstGradeComponent } from './pages/first-grade/first-grade.component';
import { SecondGradeComponent } from './pages/second-grade/second-grade.component';
import { FifthGradeComponent } from './pages/fifth-grade/fifth-grade.component';
import { FourthGradeComponent } from './pages/fourth-grade/fourth-grade.component';
import { ThirdGradeComponent } from './pages/third-grade/third-grade.component';
// pages Secondary
import { Class6Component } from './pages/class-6/class-6.component';
import { Class7Component } from './pages/class-7/class-7.component';
import { Class8Component } from './pages/class-8/class-8.component';
import { Class9Component } from './pages/class-9/class-9.component';
import { Class10Component } from './pages/class-10/class-10.component';
// pages Secondary boards
import { CbseBoardComponent } from './pages/cbse-board/cbse-board.component';
import { AndhraBoardComponent } from './pages/andhra-board/andhra-board.component';
import { TelanganaBoardComponent } from './pages/telangana-board/telangana-board.component';
// Exams Engineering
import { TestsComponent } from './pages/tests/tests.component';
import { ExamsViteeeComponent } from './pages/exams-viteee/exams-viteee.component';
import { ExamsJeeadvComponent } from './pages/exams-jeeadv/exams-jeeadv.component';
import { ExamsJeemainComponent } from './pages/exams-jeemain/exams-jeemain.component';
import { ExamsVsatComponent } from './pages/exams-vsat/exams-vsat.component';
import { ExamsKleeeComponent } from './pages/exams-kleee/exams-kleee.component';
import { ExamsTsEamcetComponent } from './pages/exams-ts-eamcet/exams-ts-eamcet.component';
import { ExamsApEamcetComponent } from './pages/exams-ap-eamcet/exams-ap-eamcet.component';
import { ExamsAiimsComponent } from './pages/exams-aiims/exams-aiims.component';
import { ExamsNeetComponent } from './pages/exams-neet/exams-neet.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cbse', component: CbseComponent },
    { path: 'state', component: StateBoardComponent },
    { path: 'skill-education', component: SkillEducationComponent },
    { path: 'robotics', component: RoboticsComponent },
    { path: 'robotics-ai', component: RoboticsAiComponent },
    { path: 'robotics-iot', component: RoboticsIotComponent },
    { path: 'game-development', component: GameDevelopmentComponent },
    { path: 'iit-foundation', component: IitFoundationComponent },
    { path: 'first-grade', component: FirstGradeComponent },
    { path: 'second-grade', component: SecondGradeComponent },
    { path: 'third-grade', component: ThirdGradeComponent },
    { path: 'fourth-grade', component: FourthGradeComponent },
    { path: 'fifth-grade', component: FifthGradeComponent },
    { path: 'class-6', component: Class6Component },
    { path: 'class-7', component: Class7Component },
    { path: 'class-8', component: Class8Component },
    { path: 'class-9', component: Class9Component },
    { path: 'class-10', component: Class10Component },
    { path: 'cbse-board', component: CbseBoardComponent },
    { path: 'ap-state-board', component: AndhraBoardComponent },
    { path: 'ts-state-board', component: TelanganaBoardComponent },
    { path: 'tests', component: TestsComponent },
    { path: 'viteee', component: ExamsViteeeComponent },
    { path: 'jeemain', component: ExamsJeemainComponent },
    { path: 'jeeadv', component: ExamsJeeadvComponent },
    { path: 'vsat', component: ExamsVsatComponent },
    { path: 'kleee', component: ExamsKleeeComponent },
    { path: 'neet', component: ExamsNeetComponent },
    { path: 'aiims', component: ExamsAiimsComponent },
    { path: 'ap-eamcet', component: ExamsApEamcetComponent },
    { path: 'ts-eamcet', component: ExamsTsEamcetComponent },
    { path: '*', redirectTo: '/login' }
];
