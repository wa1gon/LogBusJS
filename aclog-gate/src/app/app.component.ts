import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { WelcomeComponent } from './home/welcome.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACLog on the Bus';
  myData: Array<any>;

  constructor(private http: Http) {
    this.getPhotos();
  }
  public aboutClick() {

  }
  private getPhotos() {
    this.http.get("https://jsonplaceholder.typicode.com/photos")
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }
}

