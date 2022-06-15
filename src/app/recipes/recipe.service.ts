import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Dal tadka',
            'This super flavorsome & delicious homemade',
            'https://c2.staticflickr.com/6/5134/30065852941_76d1d0a157_b.jpg',
            [
                new Ingredient('Moong Dal', 100),
                new Ingredient('Water', 500)
            ]),
        new Recipe(
            'Gulab Jamun',
            'Gulab jamun is a beloved Indian dessert',
            'https://c1.staticflickr.com/9/8409/30001106280_676f968089_b.jpg',
            [
                new Ingredient('Maida', 200),
                new Ingredient('Flour', 100)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}