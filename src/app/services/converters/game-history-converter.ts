// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GameResult } from './../../../shared/model/game-result.';
import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from '@angular/fire/firestore';

export const gameHisoryConverter = {
  toFirestore: (GameHistoryToSave: GameResult) => {
    return {
      categoryId: GameHistoryToSave.categoryId,
      score: GameHistoryToSave.score,
      updateDate: Timestamp.fromDate(GameHistoryToSave.updateDate),
    };
  },

  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);

    const game = new GameResult(
      snapshot.id,
      data['categoryId'],
      data['score'],
      data['updateDate']?.toDate()
    );

    return game;
  },
};
