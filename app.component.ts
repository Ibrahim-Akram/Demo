import { Component } from '@angular/core';
export interface Data {
  Sun: string;
  Mon: string;
  Tus: number;
  Wed: string;
  Thus: number;
  Fri: number;
  Sat: string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  headers = ["Sun", "Mon", "Tus", "Wed", "Thus", "Fri", "Sat"];
  rows = [{
    "Sun": "1",
    "Mon": "2",
    "Tus": "3",
    "Wed": "4",
    "Thus": "5",
    "Fri": "6",
    "Sat": "7"
  },
  {"Sun": "8",
  "Mon": "9",
  "Tus": "10",
  "Wed": "11",
  "Thus": "12",
  "Fri": "13",
  "Sat": "14"
},
{    "Sun": "15",
"Mon": "16",
"Tus": "17",
"Wed": "18",
"Thus": "19",
"Fri": "20",
"Sat": "21"
},
{    "Sun": "22",
"Mon": "23",
"Tus": "24",
"Wed": "25",
"Thus": "26",
"Fri": "27",
"Sat": "28"
},
{    "Sun": "29",
"Mon": "30",
"Tus": "31",
"Wed": "1",
"Thus": "2",
"Fri": "3",
"Sat": "4"
}]
}
