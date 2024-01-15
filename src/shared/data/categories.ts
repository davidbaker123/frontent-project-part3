import { Category } from "../model/category";
import { Language } from "../model/language";

let animalsCategory = 
    new Category(1, "Animals", Language.English, Language.Hebrew);
animalsCategory.words.set("dog","כלב");
animalsCategory.words.set("cat","חתול");
animalsCategory.words.set("snake","נחש");
animalsCategory.words.set("fish","דג");

let peopleCategory =
    new Category(2, "People", Language.English, Language.Hebrew);
peopleCategory.words.set("woman","אישה");
peopleCategory.words.set("boy","ילד");
peopleCategory.words.set("girl","ילדה");
peopleCategory.words.set("baby","תינוק");
peopleCategory.words.set("dad","אבא");

let placesCategory = 
    new Category(3, "Places", Language.English, Language.Hebrew);
placesCategory.words.set("forst", "יער");
placesCategory.words.set("school", "בית ספר");
placesCategory.words.set("classroom", "כיתה");
placesCategory.words.set("town", "עיר");
placesCategory.words.set("hotel", "מלון");
placesCategory.words.set("hospital", "בית חולים");

export var categories = [animalsCategory, peopleCategory, placesCategory];