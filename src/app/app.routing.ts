import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './comp/view/main/main.component';
import { NoticeComponent } from './comp/view/notice/notice.component';
const routes: Routes = [
    {path: '',   component: MainComponent},
    {path: 'notice', component: NoticeComponent}
];
export const routing = RouterModule.forRoot(routes);
