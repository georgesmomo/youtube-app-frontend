import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.http.get<any[]>('http://localhost:8080/list_video')
      .subscribe(data => {
        this.videos = data;
      });
  }

  deleteVideo(videoId: string): void {
    this.http.delete(`http://localhost:8080/delete_video?video_id=${videoId}`)
      .subscribe(() => {
        this.videos = this.videos.filter(video => video.videoId !== videoId);
      });
  }
}
