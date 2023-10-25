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
        'Google Cloud - VM instance'
      ],
      isApp: false,
      git: 'https://github.com/eizarphyo/note_taker',
      deployed: 'https://notetakerangular.netlify.app',
      download: null,
    },
    {
      id: 3,
      title: 'Note it',
      desc: 'Typical note taking web app that supports create, edit and delete notes. Connect to MongoDB database with RESTful APIs.',
      img: '../../assets/images/noteit.png',
      languages: [
        'Flutter',
        'Dart',
        'MongoDB',
        'NodeJS',
        'Express',
        'Google Cloud - VM instance'
      ],
      isApp: true,
      git: 'https://github.com/eizarphyo/note_app',
      deployed: null,
      download: 'https://docs.google.com/uc?export=download&id=1tG82EINzB-SAgLNSb-AXlc-BMjY5S9e9',
    },
    {
      id: 4,
      title: 'Note API',
      desc: 'Typical note taking web app that supports create, edit and delete notes. Connect to MongoDB database with RESTful APIs.',
      img: '../../assets/images/note_api.png',
      languages: [
        'NodeJS',
        'JavaScript',
        'Express',
        'MongoDB',
        'Google Cloud - VM instance'
      ],
      isApp: false,
      git: 'https://github.com/eizarphyo/note_database',
      deployed: 'https://app.swaggerhub.com/apis/EIZARPHYO2601/Notes/1.0.0',
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
