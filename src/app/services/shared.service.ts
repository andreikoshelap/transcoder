import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private HOST_DEV = '/api';

  private readonly SERVER_URL: string;

  constructor() {
    this.SERVER_URL = this.HOST_DEV;
  }

  getServerURL() {
    return this.SERVER_URL;
  }

}
