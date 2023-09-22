import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { getStorage, ref, getDownloadURL } from '@angular/fire/storage';
import { getApp } from '@angular/fire/app';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  // firestore: Firestore = inject(Firestore);

  details!: any;

  constructor(
  ) { }

  ngOnInit() {
    // this.getData();
  }

  // async getData() {
  //   const colleRef: CollectionReference<DocumentData> = collection(
  //     this.firestore,
  //     'landing'
  //   );

  //   const querySnap = await getDocs(query(colleRef));
  //   querySnap.forEach((doc) => {
  //     this.details = doc.data();
  //   });
  //   console.log(this.details);
  // }

  downloadCV() {
    const url = "../../assets/CV.pdf";
    const name = "CV_eizarphyo.pdf";

    try {
      FileSaver.saveAs(url, name);
    } catch (err) {
      console.log(err);
    }
  }
}
