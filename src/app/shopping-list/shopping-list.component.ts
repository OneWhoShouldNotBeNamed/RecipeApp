import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('apple', 5),
  //   new Ingredient('tomato', 5),

  // ];
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    // onIngredientAdded(ingredient: Ingredient) {
    //   console.log(ingredient);
    //   this.ingredients.push(ingredient);
  }

}
