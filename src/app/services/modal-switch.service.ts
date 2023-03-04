import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSwitchService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
