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
  // firestore: Firestore = inject(Firestore);

  constructor() { }

  projects: any = [
    {
      id: 1,
      title: 'MovieDB App',
      desc: 'Movie details app with live data. Can bookmark and search movies.',
      img: '../../assets/images/movies.png',
      languages: [
        'Flutter',
        'Dart',
        'MovieDB API',
        'Firebase: Auth, Firestore, Storage',
        'Provider & GetX'
      ],
      isApp: true,
      git: 'https://github.com/eizarphyo/moviedb_flutter',
      deployed: null,
      download: 'https://docs.google.com/uc?export=download&id=1XlDXYd61xx5kqqZqIGwWj5H2chWBIKeL',
    },
    {
      id: 2,
      title: 'Note Taker',
      desc: 'Typical note taking web app that supports create, edit and delete notes. Connect to MongoDB database with RESTful APIs.',
      img: '../../assets/images/notes.png',
      languages: [
        'Angular',
        'TypeScript',
        'MongoDB',
        'NodeJS',
        'Express',
        'AWS - EC2'
      ],
      isApp: false,
      git: 'https://github.com/eizarphyo/note_taker',
      deployed: 'https://notetakerangular.netlify.app',
      download: null,
    },
  ];

  // projects: any = [];

  ngOnInit() {
    // this.getProjects();
  }

  // async getProjects() {
  //   const colleRef: CollectionReference<DocumentData> = collection(
  //     this.firestore,
  //     'projects'
  //   );

  //   const querySnap = await getDocs(query(colleRef));
  //   querySnap.forEach((doc) => {
  //     // console.log(doc.data());
  //     this.projects.push(doc.data());
  //   });
  // }
}
