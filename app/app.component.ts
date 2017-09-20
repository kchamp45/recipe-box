import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Our Delicious Recipes</h1>
    <h3>Category: {{foodType}}</h3>
    <ul>
      <li (click)="isTried(eachRecipe)" *ngFor="let eachRecipe of recipes">{{eachRecipe.title}} <button (click)= "editRecipe(eachRecipe)">Edit</button> <button (click)="display(eachRecipe)">Details</button></li>:
    </ul>
    <hr>
    <div *ngIf="selectedRecipe">
      <p>Tried recipe? {{selectedRecipe.tried}}</p>
      <h3>Edit recipe</h3>
      <div >
        <label>Enter new title:</label>
        <input [(ngModel)]="selectedRecipe.title">
      </div>
      <div >
        <label>Edit ingredients:</label>
        <input [(ngModel)]="selectedRecipe.ingredients">
      </div>
      <div>
        <label>Edit directions:</label>
        <input [(ngModel)]="selectedRecipe.directions"><br>
        <button (click)="finishedEditing()">Done!</button>
      </div>
    </div>
    <div *ngIf="aRecipe">
      <li>Ingredients:
       <ul>
        <li>{{aRecipe.ingredients}}</li>
       </ul>
     </li>
     <li>Directions:
       <ul>
         <li>{{aRecipe.directions}}</li>
       </ul>
     </li>
     <button (click)="finishedLooking()">Got it!</button>
    </div>
  </div>
  `
})

export class AppComponent{
  foodType: string = 'Desserts';
  recipes: Recipe[] = [
    new Recipe('Banana Bread', ['Bananas', 'Sugar', 'Flour', 'Sour Cream', 'Love'], ['Preheat oven', 'Mix fats', 'Mix dry ingredients', 'Mash bananas', 'Mix all until smooth', 'Bake a while']),
    new Recipe('Chocolate Chip Cookies', ['Oatmeal flour', 'sugar', 'butter', 'semi-sweet chocolate chips', 'vanilla'], ['Mix dry ingredients', 'Add in soften butter', 'Stir in chocolate chips', 'Bake at 350 degrees F for 10 minutes']),
    new Recipe('Banana Wonton', ['Bananas', 'Wonton wraps', 'cinnamon', 'sugar'], ['Wrap banana in wonton', 'Deep fry for 3 min.', 'Sprinkle sugar and cinnamon over the wontons']),
    new Recipe('Baklava', ['Filo sheets', 'honey', 'walnuts', 'pistachios'], ['Mix honey and nuts together', 'Lay down 2 filo sheets', 'Spread a thin layer of honey nut mixture over the sheets', 'Repeat steps 2 and 3', 'Finish over with a layer of filo sheets', 'Bake at 350 degrees F for 30 mins.'])
  ];
  selectedRecipe = null;
  aRecipe = null;


  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  display(theRecipe) {
    this.aRecipe = theRecipe;
  }

  finishedLooking() {
    this.aRecipe = null;
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
