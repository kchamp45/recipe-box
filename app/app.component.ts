import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Our Delicious Recipes</h1>
    <h3>Category: {{foodType}}</h3>
    <ul>
      <li *ngFor="let eachRecipe of recipes">{{eachRecipe.title}}:
        <ul>
          <li>Ingredients:
            <ul>
              <li *ngFor="let eachIng of eachRecipe.ingredients">{{eachIng}}</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>Directions:
            <ol>
              <li *ngFor="let eachStep of eachRecipe.directions">{{eachStep}}</li>
            </ol>
          </li>
        </ul>
      </li>
    </ul>

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



}

export class Recipe {
  public tried: boolean = false;
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
//Array<string>
