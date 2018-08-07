import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './components/event/event.component';
import { FormsComponent } from './Components/forms/forms.component';
import { CartComponent } from './Components/cart/cart.component';
import { HeroFormComponent } from './component/hero-form/hero-form.component';
import { DataServiceService } from "./Services/data-service.service";
import { DataComponentComponent } from './components/data-component/data-component.component';
import { StreamService } from './Services/stream.service';
import { StreamComponent } from './stream/stream.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { CallApiComponent } from './Components/call-api/call-api.component';
import { CallApiService } from './Services/call-api.service';
import { NgxPaginationModule } from "ngx-pagination";
import { HomeComponent } from './components/route/home/home.component';
import { FirstComponent } from './components/route/first/first.component';
import { SecondComponent } from './components/route/second/second.component';
import { ThirdComponent } from './components/route/third/third.component';
import { PageNotFoundComponent } from './components/route/page-not-found/page-not-found.component';
import { UsersPostsComponent } from './components/route/users-posts/users-posts.component';


const appRoutes:Routes= [
  { path: 'users', component: FirstComponent },
  { path: 'posts', component: SecondComponent },
  { path: 'comments', component: ThirdComponent },
  { path: 'userspost', component: UsersPostsComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, EventComponent, FormsComponent, CartComponent, HeroFormComponent, DataComponentComponent, StreamComponent, CallApiComponent, HomeComponent, FirstComponent, SecondComponent, ThirdComponent,PageNotFoundComponent, UsersPostsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [DataServiceService,StreamService,CallApiService,UsersPostsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  }
