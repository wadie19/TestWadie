import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film';

@Component({
  selector: 'wadi-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input("film") t:Film;
  constructor() { }

  ngOnInit(): void {
  }

}
