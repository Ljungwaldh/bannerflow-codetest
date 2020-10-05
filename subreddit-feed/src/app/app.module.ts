import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CommentsComponent } from './comments/comments.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EntriesToggleComponent } from './entries-toggle/entries-toggle.component';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', component: SearchBarComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SinglePostComponent,
    CommentsComponent,
    SearchBarComponent,
    EntriesToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
