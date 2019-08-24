import {Component, Directive, Input } from 'angular2/core';
import { Config } from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {EmployeeListComponent} from './employee.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styles:[`h2 {
        color: yellow;
    }
    .myClass {
        color: blue;
    }`],
    directives: [PlaylistComponent, EmployeeListComponent ]              
})

export class AppComponent {
    mainHeading = Config.title;
    public applyred = true;
    public applyblue = true;
    videos:Array<Video>;
    constructor(){
        this.videos = [
            new Video(1, "hfbvf", "jfb", "jfbv"),
            new Video(2, "hvcf", "nfhb", "hfbv")
        ]
    }
    onClick(value){
        console.log(value);
    }
    public fname;
    public lname;
    public val = true;

}
  