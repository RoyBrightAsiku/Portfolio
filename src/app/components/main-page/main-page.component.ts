import { Component } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from '../../services/portfolio.service';
import { Person } from '../../interfaces/Person';
import { Card } from '../../interfaces/Cards';
import { school } from '../../interfaces/School';
import { TechStack } from '../../interfaces/TechStack';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  people: Person[]=[];
  chosenPerson?: Person;
  menuVisible:boolean=false;
  faEllipsisH = faEllipsisH;
  
  constructor(private porfolioService: PortfolioService){}
  
  cards: Card[] = [
    {
      image:"ycc.png",
      title:"York Community",
      description:"Test 1 2 3",
      website:"https://www.yorkcommunityconsulting.co.uk/"
    },
    {
      image:"llbb.png",
      title:"York Community",
      description:"Test 1 2 3",
      website:"https://www.landlordbroadband.com/"
    },
    {
      image:"nouse.png",
      title:"York Community",
      description:"Test 1 2 3",
      website:"https://nouse.co.uk/"
    }
  ];

  schools: school[]= [
    {
      school:"Seeta High School Green Campus Mukono",
      certification: "Uganda Certificate of Education",
      grades: ["Math (D1)","Biology (D1)","Computer (D1)","Physics (D2)","Chemistry (D2)","History (D2)","Geography (D2)","Commerce (D2)","French (D2)","English (C5)"],
      overallGrade: "12 in 8"
    },
    {
      school: "Uganda Martyr’s Secondary School Namugongo Kampala",
      certification: "Uganda Advanced Certificate of Education",
      grades: ["Pure Mathematics (A)", "Physics (C)", "Chemistry (D)", "General Paper (C4)", "Information Technology (C3)"],
      overallGrade: "15 points out of 20"
    },
    {
      school:" INTO Manchester Manchester",
      certification: "NCUK Foundation Degree",
      grades: ["Mathematics (A*)", "Physics (A)", "Further Mathematics (B)", "EAP (B)"]
    },
    {
      school: "University of York",
      certification: "Integrated Master of Engineering in Computer Science with Artificial Intelligence (with a year in industry)",
      grades: ["Systems and Devices (Pass 100%)", "Software 1(81%)", "Software 2(51%)", "Theory 1(58%)", "Theory 2(64%)", "Human Computer Interaction (66%)"],
      overallGrade: "1st class"
    }
  ];

  techStack: TechStack[] = [
      {
        title:"frontend",
        stack:["Angular.js", "React.js", "Astro.js", "Vue.js", "Future CSS"],
      },

      {
        title:"backend",
      stack:[".NET Core", "C#", "Node", "php", "laravel"]
    },

    {
        title:"devOps",
        stack:["Docker", "GitHub Actions", "Linux"]
      }
  ];

  ngOnInit():void{
    this.porfolioService.getPerson().subscribe(people=> this.people=people)
  }

  choosePortfolio(person: Person){
    this.chosenPerson = person;
    this.toggleMenu();
  }

  toggleMenu():void{
    this.menuVisible = !this.menuVisible;
    console.log(this.menuVisible);
  }
}
