import { Component } from '@angular/core';
import {WaterService} from './water.service'
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/map';

export class data_water  {
  name: string
  total: number
  daily: number
  monthly: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WaterService]
})
export class AppComponent {

  ut_daily: any
  ut_monthly: any
  raw_water = new data_water;
  MMF_backwash = new data_water;
  
  constructor(private water: WaterService){

    let timer = TimerObservable.create(100, 5000);
    let x = timer.subscribe(t => {
      this.get_data_all()
      // console.log(this.raw_water)
    })

  }

    get_data_all():any {
      this.water.get_data_daily()
      .subscribe(ut_daily => { 
        // console.log("ut_daily",ut_daily)
        // {
        //   "Table": [
        //     {
        //       "ServerDT": "2016-12-19T16:23:11.16",
        //       "ResultType": "DAILY",
        //       "TagID": "TOT_RO_WATER",
        //       "mySUM": 37796.385
        //     },
        //     {
        //       "ServerDT": "2016-12-19T16:23:11.16",
        //       "ResultType": "DAILY",
        //       "TagID": "TOT_SCHOTDI",
        //       "mySUM": 38985.385
        //     }
        //   ]
        // }
        this.raw_water.name = "Raw/City water";
        this.raw_water.daily = ut_daily[0].mySUM;

        this.MMF_backwash.name = "MMF Backwash"
        this.MMF_backwash.daily = ut_daily[1].mySUM;


      });

      this.water.get_data_monthly()
      .subscribe(ut_monthly => { 
//  console.log("ut_monthly",ut_monthly)
// {
//   "Table": [
//     {
//       "ServerDT": "2016-12-19T16:23:19.903",
//       "ResultType": "MONTHLY",
//       "TagID": "TOT_RO_WATER",
//       "mySUM": 38671.01
//     },
//     {
//       "ServerDT": "2016-12-19T16:23:19.903",
//       "ResultType": "MONTHLY",
//       "TagID": "TOT_SCHOTDI",
//       "mySUM": 46904.39
//     }
//   ]
// }

        this.raw_water.monthly = ut_monthly[0].mySUM;
        this.MMF_backwash.monthly = ut_monthly[1].mySUM;
        
      })
    }

    setStyle(y){
      if(y < 50000 ){
let styles = {
  'background-color' : '#8bc34a'
};

return styles;
      }else if(y >= 50000 && y < 80000 ){
        let styles = {
  'background-color' : '#FFC107'
};

return styles;
      }else if(y >= 80000){
     let styles = {
  'background-color' : 'red'
};

return styles;
      }
    }

    FabStyle(y){

            if(y < 50000 ){
let styles = {
  'background-color' : '#CDDC39'
};

return styles;
      }else if(y >= 50000 && y < 80000 ){
        let styles = {
  'background-color' : '#FFAB40'
};

return styles;
      }else if(y >= 80000){
     let styles = {
  'background-color' : '#FF5722'
};

return styles;
      }
    }


}
