import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comp/frame/header/header.component';
import { FooterComponent } from './comp/frame/footer/footer.component';
import { LeftComponent } from './comp/frame/left/left.component';
import { AlramComponent } from './comp/frame/header/alram/alram.component';
import { ShortlistComponent } from './comp/shortlist/shortlist.component';
import { ShortboxComponent } from './comp/shortbox/shortbox.component';
import { MainComponent } from './comp/view/main/main.component';
import {routing} from './app.routing';
import { NoticeComponent } from './comp/view/alarm/notice/notice.component';
import { NoticeUComponent } from './comp/view/alarm/notice-u/notice-u.component';
import {FroalaEditorModule, FroalaViewModule} from "angular2-froala-wysiwyg";
import { DatePickDirective } from './comp/direc/date-pick.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    AlramComponent,
    ShortlistComponent,
    ShortboxComponent,
    MainComponent,
    NoticeComponent,
    NoticeUComponent,
    DatePickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
