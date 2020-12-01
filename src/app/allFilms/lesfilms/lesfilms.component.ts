import { Component, OnInit } from '@angular/core';
import { Film } from '../../modele/film';
@Component({
  selector: 'wadi-lesfilms',
  templateUrl: './lesfilms.component.html',
  styleUrls: ['./lesfilms.component.css']
})
export class LesfilmsComponent implements OnInit {
  lesFilms: Film[] = [
    {titre:'Coco', affiche:'assets/MyFilms/coco.jpg', duree:88, nouveau:false},
    {titre:'Anges & Démons', affiche:'assets/MyFilms/ange.jpg', duree:121, nouveau:true},
    {titre:'Coeur Nomade', affiche:'assets/MyFilms/nomade.bmp', duree:97, nouveau:false}
      ];
      nombreFilms()
      {

        alert("le nombre defilms d'une duree>100 est",);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
