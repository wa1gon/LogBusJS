import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-contact',
  templateUrl: './log-contact.component.html',
  styleUrls: ['./log-contact.component.css']
})
export class LogContactComponent implements OnInit {

  public modes = [
    { value: "USB", viewValue: "Upper Sideband" },
    { value: "LSB", viewValue: "Lower Sideband" },
    { value: "PSK-31", viewValue: "PSK-31" },
    { value: "JT9", viewValue: "JT-9" },
    { value: "JT64", viewValue: "JT-64" },
    { value: "AM", viewValue: "AM" }];

  ngOnInit() {
  }
}
