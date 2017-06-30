import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './comp/view/main/main.component';
import { NoticeComponent } from './comp/view/alarm/notice/notice.component';
import {NoticeUComponent} from "./comp/view/alarm/notice-u/notice-u.component";
const routes: Routes = [
    {path: '',   component: MainComponent},
    {path: 'notice', component: NoticeComponent},
    {path: 'notice/:id', component: NoticeUComponent}
];
export const routing = RouterModule.forRoot(routes);
