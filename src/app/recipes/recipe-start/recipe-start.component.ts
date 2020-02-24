import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-start",
  templateUrl: "./recipe-start.component.html",
  styleUrls: ["./recipe-start.component.css"]
})
export class RecipeStartComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor() {}

  ngOnInit(): void {}
}
