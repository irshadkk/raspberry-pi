import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Dataservice {

  constructor(public http: HttpClient) {
    console.log('Hello DataserviceProvider Provider');
  }
  serviceurl = 'http://192.168.1.133/?on=';
  getData(url) {
    return this.http.get(url)
      .map((res: Response) => res);
  }
  getPostData(url, bodyParam) {
    return this.http.post(url, bodyParam)
      .map((res: Response) => res);
  }

}
