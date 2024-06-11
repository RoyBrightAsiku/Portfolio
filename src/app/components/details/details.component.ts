import { Component } from '@angular/core';
import { Person } from '../../interfaces/Person';
import { PortfolioService } from '../../services/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // firstName!:string;
  // middleName?:string;
  // lastName!:string;
  // picture?:File;

  // people: Person[] =[];
  // constructor(private porfolioService: PortfolioService) { }

  // ngOnInit(): void{
  //   this.refreshExistingUsers();
  // }

  // onSubmit(newPerson: Person) {
  //   newPerson = {
  //     firstName: this.firstName,
  //     middleName: this.middleName,
  //     lastName: this.lastName,
  //     picture: this.picture,
  //   }

  //   if (newPerson.picture == undefined) newPerson.picture="";
  //   this.porfolioService.postPerson(newPerson).subscribe();
  //   this.refreshExistingUsers();
  // }

  // refreshExistingUsers(){
  //     this.porfolioService.getPerson().subscribe((person) =>this.people= person);
  // }
}
