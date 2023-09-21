import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
  orderBy
} from '@angular/fire/firestore';
import { ref } from 'firebase/database';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  firestore: Firestore = inject(Firestore);

  // desc: "Develop single page web applications with Angular and Mobile apps with Flutter.",
  // desc: "Build databases and APIs with SQL or No-SQL databases using Express."

  // skills: any = [
  //   {
  //     id: 0,
  //     title: 'Frontend',
  //     img: "../../assets/images/mobile-web.png",
  //     desc: "Design responsive web designs and Develop functioning websites and mobile applications.",

  //     languages: [
  //       "HTML, CSS",
  //       "JavaScript",
  //       "TypeScript",
  //       "Angular",
  //       "Flutter"
  //     ]
  //   }, {
  //     id: 1,
  //     title: 'Backend',
  //     img: "../../assets/images/database.png",
  //     desc: "Build database, create servers, operate CRUD, build RESTful APIs and handle requests, responses and errors.",
  //     languages: [
  //       "NodeJS",
  //       "Express",
  //       "MongoDB",
  //       "Postgres",
  //       "Firebase"
  //     ]
  //   }
  // ]

  skills: any[] = [];

  async ngOnInit() {
    const colleRef: CollectionReference<DocumentData> = collection(this.firestore, 'skills');

    const ordered: any = colleRef;

    const querySnap = await getDocs(query(colleRef));

    querySnap.forEach((doc) => {
      this.skills.push(doc.data());
    })
  }
}
