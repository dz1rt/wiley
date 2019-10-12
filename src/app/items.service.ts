import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {

  public static sortItemsByTitle(objectA, objectB) {
    const titleA = objectA.title.toLowerCase();
    const titleB = objectB.title.toLowerCase();
    return titleA > titleB ? -1 : 1;
  }
}
