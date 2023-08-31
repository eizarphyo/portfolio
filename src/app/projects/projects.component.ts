import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: any = [
    {
      id: 1,
      title: 'MovieDB App',
      desc: "Movie details app with live data. Can bookmark and search movies.",
      img: "../../assets/images/movies.png",
      languages: ["Flutter Framework", "Dart Language", "MovieDB API", "Firebase for backend"],
      isApp: true,
      git: "",
      deployed: null,
      download: "",
    },
    {
      id: 2,
      title: "Note Taker",
      desc: "Typical note taking web app that supports edit and delete. Used local storage to save notes.",
      img: "../../assets/images/notes.png",
      languages: ["Angular Franmework", "TypeScript Language", "Local Storage"],
      isApp: false,
      git: "https://github.com/eizarphyo/notes_taker",
      deployed: "https://note-taking-app-angular.netlify.app",
      download: null
    },
  ];
}
