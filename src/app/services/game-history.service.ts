import { gameHisoryConverter } from './converters/game-history-converter';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GameResult } from './../../shared/model/game-result.';
import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  DocumentSnapshot,
  Firestore,
  getDocs,
  QuerySnapshot,
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class GameHistoryService {
  constructor(private firestore: Firestore) {}

  async add(newGame: GameResult) {
    await addDoc(
      collection(this.firestore, 'GameResult').withConverter(gameHisoryConverter),
      newGame
    );
  }

  async list(): Promise<GameResult[]> {
    const categoryCollection = collection(
      this.firestore,
      'GameResult'
    ).withConverter(gameHisoryConverter);
    const querySnapshot: QuerySnapshot<GameResult> = await getDocs(
      categoryCollection
    );
    const result: GameResult[] = [];
    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<GameResult>) => {
      const data = docSnap.data();
      if (data) {
        result.push(data);
      }
    });
    return result;
  }

  
}

