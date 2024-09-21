import { QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "@angular/fire/firestore";
import { Category } from "../../../shared/model/category";
import { TranslatedWord } from "../../../shared/model/translated-word";


export const categoryConverter = {
toFirestore : (CategoryToSave : Category) => {
const wordsArr = [];


for (let i = 0 ; i <CategoryToSave.words.length;++i ){
    wordsArr.push(
        {
         origin:CategoryToSave.words[i].origin,
         target:CategoryToSave.words[i].target,
        });
}

    return {
        name: CategoryToSave.name,
        origin:CategoryToSave.origin,
        target: CategoryToSave.target,
        words: wordsArr,
        lastModifiedDate: Timestamp.fromDate(CategoryToSave.lastUpdateDate), 
    }
},

fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const words = data['words'];

    const category = new Category(
      snapshot.id,
      data['name'],
      data['origin'],
      data['target'],
      data['lastModifiedDate']?.toDate()
    );
    if (words) {
        for (let i = 0; i < words.length; ++i) {
          const translatedWord = new TranslatedWord(words[i].origin, words[i].target);
          translatedWord.guess = words[i].wordguess; // Assign the guess value
          category.words.push(translatedWord); // Push the created word into the category
        }
      }
    return category;
  }
}

