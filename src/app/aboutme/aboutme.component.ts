import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  // firestore: Firestore = inject(Firestore);
  aboutme!: any;
  socials: any[] = [];

  async ngOnInit() {
    // this.getData();
  }

  // async getData() {
  //   const aboutmeRef: CollectionReference<DocumentData> = collection(this.firestore, 'aboutme');
  //   const socialsRef: CollectionReference<DocumentData> = collection(this.firestore, 'social_acc');

  //   const aboutmeQuerySnap = await getDocs(query(aboutmeRef));
  //   const socialSnap = await getDocs(query(socialsRef));

  //   aboutmeQuerySnap.forEach((doc) => {
  //     this.aboutme = doc.data();
  //   });

  //   socialSnap.forEach((doc) => {
  //     this.socials.push(doc.data());
  //   })
  // }

}
