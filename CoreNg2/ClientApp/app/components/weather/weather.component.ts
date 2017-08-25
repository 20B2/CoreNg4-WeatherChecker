import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    template: require('./weather.component.html')
})
export class WeatherComponent {
    public weather: Weather;

    //constructor(http: Http,
    //    @Inject('ORIGIN_URL') originUrl: string) {
    //    //this.weather = { temp: "12", summary: "Balmy", city: "London" };
    //    http.get(originUrl + '/api/weather/city/London').subscribe(result => {
    //        this.weather = result.json();
    //    });
    //}

    constructor(private http: Http) {
        //http.get('/api/weather/city/London').subscribe(result => {
        //    this.weather = result.json();
        //});
    }

    public getWeather(chosenCity: string) {
        this.http.get('/api/weather/city/' + chosenCity).subscribe(result => {
            this.weather = result.json();
        })
    }
}

interface Weather {
    temp: string;
    summary: string;
    city: string;
}