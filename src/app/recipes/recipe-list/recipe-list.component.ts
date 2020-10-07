import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
     "https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-680x900.jpg"),
     new Recipe('A Test Recipe', 'This is simply a test',
     "https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-680x900.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
