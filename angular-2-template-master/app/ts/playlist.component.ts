import {Component} from 'angular2/core';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['vid']
})

export class PlaylistComponent{
    public vid;
}