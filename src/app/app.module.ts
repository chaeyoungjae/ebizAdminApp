import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comp/frame/header/header.component';
import { FooterComponent } from './comp/frame/footer/footer.component';
import { LeftComponent } from './comp/frame/left/left.component';
import { AlramComponent } from './comp/frame/header/alram/alram.component';
import { ShortlistComponent } from './comp/shortlist/shortlist.component';
import { ShortboxComponent } from './comp/shortbox/shortbox.component';
import { MainComponent } from './comp/view/main/main.component';
import {routing} from './app.routing';
import { NoticeComponent } from './comp/view/notice/notice.component';

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
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
