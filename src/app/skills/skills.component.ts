import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  // desc: "Develop single page web applications with Angular and Mobile apps with Flutter.",
  // desc: "Build databases and APIs with SQL or No-SQL databases using Express."

  skills: any = [
    {
      id: 0,
      title: 'Frontend',
      img: "../../assets/images/mobile-web.png",
      desc: "Design and Develop functioning websites and mobile applications.",

      languages: [
        "HTML, CSS",
        "JavaScript",
        "TypeScript",
        "Angular",
        "Flutter"
      ]
    }, {
      id: 1,
      title: 'Backend',
      img: "../../assets/images/database.png",
      desc: "Build database, create servers, store data, build APIs and handle requests.",
      languages: [
        "NodeJS",
        "Express",
        "MongoDB",
        "Postgres",
        "Firebase"
      ]
    }
  ]
}
