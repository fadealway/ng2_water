import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WaterService {
  UTDaily: string = 'http://192.168.10.213:8084/api/UTDaily'
  UTMonthly: string = 'http://192.168.10.213:8084/api/UTMonthly'

  private extractData(res: Response) {
  let body = res.json();
  return body['Table'];
}

  constructor(private http:Http) { }

  get_data_daily():any {
    return this.getDaily_Water(this.UTDaily)
  }

  get_data_monthly():any {
    return this.getDaily_Water(this.UTMonthly)
  }

  getDaily_Water(url: string ):any {
    return this.http.get(url).map(this.extractData);
  }

}
