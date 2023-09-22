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

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // firestore: Firestore = inject(Firestore);

  skills: any = [
    {
      id: 0,
      title: 'Frontend',
      img: "../../assets/images/mobile-web.png",
      desc: "Design responsive web designs and Develop functioning websites and mobile applications.",

      languages: [
        "HTML, CSS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Angular",
        "Flutter"
      ]
    }, {
      id: 1,
      title: 'Backend',
      img: "../../assets/images/database.png",
      desc: "Build database, create servers, operate CRUD with RESTful APIs and cloud deployment.",
      languages: [
        "NodeJS",
        "Express",
        "MongoDB",
        "PostgresSQL",
        "Firebase",
        "AWS"
      ]
    }
  ]

  // skills: any[] = [];

  async ngOnInit() {
    // this.getSkills();
  }

  // async getSkills() {
  //   const colleRef: CollectionReference<DocumentData> = collection(this.firestore, 'skills');

  //   const querySnap = await getDocs(query(colleRef, orderBy('title', 'desc')));

  //   querySnap.forEach((doc) => {
  //     this.skills.push(doc.data());
  //   });
  // }
}
