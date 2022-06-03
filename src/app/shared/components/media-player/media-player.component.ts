import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png',
    album: 'ACNH',
    name: 'Isabelle',
    url: 'https://localhost/track.mp3',
    _id: 1,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
