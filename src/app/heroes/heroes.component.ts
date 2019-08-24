import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroService: HeroService;
  selectedHero: Hero;
  heroes: Hero[]; //heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
    }
  
  // constructor(private heroService: HeroService) { }
  constructor() { 
    this.heroService = new HeroService();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
