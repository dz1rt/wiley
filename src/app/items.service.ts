import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  sortItemsByTitle(objectA, objectB) {
    const titleA = objectA.title.toLowerCase();
    const titleB = objectB.title.toLowerCase();
    return titleA > titleB ? -1 : 1;
  }
}
