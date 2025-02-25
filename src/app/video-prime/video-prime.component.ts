import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-prime',
  templateUrl: './video-prime.component.html',
  styleUrls: ['./video-prime.component.css']
})
export class VideoPrimeComponent implements OnInit {
  primes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPrimes();
  }

  loadPrimes(): void {
    this.http.get<any[]>('http://localhost:8080/list_primes')
      .subscribe(data => {
        this.primes = data;
      });
  }
}
