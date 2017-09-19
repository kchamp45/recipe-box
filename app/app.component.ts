import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Our Delicious Recipes</h1>
    <h3>Category: {{foodType}}</h3>
    <ul>
      <li (click)="isTried(eachRecipe)" *ngFor="let eachRecipe of recipes">{{eachRecipe.title}} <button (click)= "editRecipe(eachRecipe)">Edit</button></li>:
    </ul>
    <hr>
    <div>
      <p>Tried recipe? {{selectedRecipe.tried}}</p>
      <h3>Edit recipe</h3>
      <div>
      <label>Enter Ingredients:</label>
      <input [(ngModel)]="selectedRecipe.ingredients">
      </div>
      <div>
      <label>Enter directions:</label>
      <input [(ngModel)]="selectedRecipe.directions">
    </div>
  </div>
  </div>
  `
})

export class AppComponent{
  foodType: string = 'Desserts';
  recipes: Recipe[] = [
    new Recipe('Banana Bread', ['Bananas', 'Sugar', 'Flour', 'Sour Cream', 'Love'], ['Preheat oven', 'Mix fats', 'Mix dry ingredients', 'Mash bananas', 'Mix all until smooth', 'Bake a while']),
    new Recipe('Chocolate Chip Cookies', ['Oatmeal flour', 'sugar', 'butter', 'semi-sweet chocolate chips', 'vanilla'], ["Bake at 350 degrees F whatever dough the kids don't eat"]),
    new Recipe('Banana Wonton', ['Bananas', 'Wonton wraps', 'cinnamon', 'sugar'], ['Wrap banana in wonton. Deep fry for 3 min.']),
    new Recipe('Baklava', ['Filo sheets', 'honey', 'walnuts', 'pistachios'], ['Magic'])
  ];
  selectedRecipe: Recipe = this.recipes[0];
  // selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  isTried(clickedRecipe: Recipe) {
    // if(clickedRecipe.tried === true) {
    //   alert("This recipe has been tried!");
    // }else{
    //   alert("This recipe has not been tried.");
    // }
  }
}

export class Recipe {
  public tried: boolean = false;
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
//Array<string>
// <li>Ingredients:
//   <ul>
//     <li *ngFor="let eachIng of eachRecipe.ingredients">{{eachIng}}</li>
//   </ul>
// </li>
// </ul>
// <ul>
// <li>Directions:
//   <ol>
//     <li *ngFor="let eachStep of eachRecipe.directions">{{eachStep}}</li>
//   </ol>
// </li>
// </ul>
// </li>
// </ul>
