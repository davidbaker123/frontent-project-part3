/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/category';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentSnapshot,
  Firestore,
  getDoc,
  getDocs,
  QuerySnapshot,
  setDoc,
} from '@angular/fire/firestore';
import { categoryConverter } from './converters/category-converter';


@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private firestore: Firestore) {}

  async add(newCategory: Category) {
    await addDoc(
      collection(this.firestore, 'categories').withConverter(categoryConverter),
      newCategory
    );
  }

  async list(): Promise<Category[]> {
    const categoryCollection = collection(
      this.firestore,
      'categories'
    ).withConverter(categoryConverter);
    const querySnapshot: QuerySnapshot<Category> = await getDocs(
      categoryCollection
    );
    const result: Category[] = [];
    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<Category>) => {
      const data = docSnap.data();
      if (data) {
        result.push(data);
      }
    });
    return result;
  }

  async get(id: string): Promise<Category | undefined> {
    const categoryDocRef = doc(this.firestore, 'categories', id).withConverter(
      categoryConverter
    );
    return (await getDoc(categoryDocRef)).data();
  }

  async update(existingCategory: Category): Promise<void> {
    const categoryDocRef = doc(
      this.firestore,
      'categories',
      existingCategory.id
    ).withConverter(categoryConverter);
    return setDoc(categoryDocRef, existingCategory);
  }

  async delete(existingId: string) {
    const categoryDocRef = doc(
      this.firestore,
      'categories',
      existingId
    ).withConverter(categoryConverter);
    return deleteDoc(categoryDocRef);
  }
}

