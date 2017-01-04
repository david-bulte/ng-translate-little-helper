import {Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {MusicComponent} from "./music/music.component";

export const routes: Routes = [
  { path: 'books',
    component: BooksComponent
  },
  { path: 'music',
    component: MusicComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
