import { Component, inject } from '@angular/core';
import { Database } from '@angular/fire/database';
import {
  Firestore,
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  firestore: Firestore = inject(Firestore);

  constructor() { }

  // projects: any = [
  //   {
  //     id: 1,
  //     title: 'MovieDB App',
  //     desc: 'Movie details app with live data. Can bookmark and search movies.',
  //     img: '../../assets/images/movies.png',
  //     languages: [
  //       'Flutter Framework',
  //       'Dart Language',
  //       'MovieDB API',
  //       'Firebase: Auth, Firestore, Storage',
  //     ],
  //     isApp: true,
  //     git: '',
  //     deployed: null,
  //     download: '',
  //   },
  //   {
  //     id: 2,
  //     title: 'Note Taker',
  //     desc: 'Typical note taking web app that supports create, edit and delete notes. Connect to MongoDB database with RESTful APIs.',
  //     img: '../../assets/images/notes.png',
  //     languages: [
  //       'Angular Framework',
  //       'TypeScript Language',
  //       'MongoDB',
  //       'NodeJS',
  //       'Express',
  //     ],
  //     isApp: false,
  //     git: 'https://github.com/eizarphyo/notes_taker',
  //     deployed: 'https://note-taking-app-angular.netlify.app',
  //     download: null,
  //   },
  // ];

  projects: any = [];

  async ngOnInit() {
    const colleRef: CollectionReference<DocumentData> = collection(
      this.firestore,
      'projects'
    );

    const querySnap = await getDocs(query(colleRef));
    querySnap.forEach((doc) => {
      // console.log(doc.data());
      this.projects.push(doc.data());
    });
  }
}
