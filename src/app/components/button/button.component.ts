import { Component } from '@angular/core';
import { Person } from '../../interfaces/Person';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  people: Person[] =[];
  
  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getPerson().subscribe((person)=> this.people=person);
  }
}
