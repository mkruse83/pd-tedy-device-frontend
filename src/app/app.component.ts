import { Component, OnInit } from '@angular/core';
import { TedyapiService } from './tedyapi.service';
import { Statement } from '@angular/compiler';

class State {
  isOn: boolean;
  mode: String;
  brightness: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: String = "";
  classNames: String = "";
  thingName: String = "TEDyLight";
  opacity: Number = 1;

  constructor(private tedyService: TedyapiService) { }

  ngOnInit() {
    setInterval(() => {
      this.updateState();
    }, 1000);
    this.tedyService.init(this.thingName).subscribe(() => { });
  }

  onThingNameChanged(event: any) {
    this.thingName = event.target.value;
  }

  onClickConnect() {
    this.tedyService.init(this.thingName).subscribe(() => { });
  }

  private updateState() {
    this.tedyService.getState().subscribe((data: State) => {
      console.log(data);
      this.state = JSON.stringify(data);

      if (data.isOn) {
        this.classNames = "on";
      } else {
        this.classNames = "off";
      }

      if (data.mode === "DISCO") {
        this.classNames += " disco";
      }

      if (data.brightness) {
        this.opacity = data.brightness;
      } else {
        this.opacity = 1;
      }
    });
  }
}
