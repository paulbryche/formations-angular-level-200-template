import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models';

@Injectable({
  providedIn: 'root' // Tree shaking : on compile ce service que lorsqu'il est VRAIMENT appelé dans un constructor d'un composant
})
export class SearchStoreService {
  private readonly store = new BehaviorSubject<SearchItem>({value: ''});

  // Ecrire et prévenir
  update(value: string): void {
    // const item: SearchItem = {value};
    // this.store.next(item);

    this.store.next({value});
  }

  // Abonnement
  asObservable(): Observable<SearchItem> {
    return this.store.asObservable();
  }
}