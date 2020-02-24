import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingnm = this.nameInputRef.nativeElement.value;
    const ingamt = this.amountInputRef.nativeElement.value;
    console.log(ingamt);
    console.log(ingnm);
    const newIngredient = new Ingredient(ingnm, ingamt);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
