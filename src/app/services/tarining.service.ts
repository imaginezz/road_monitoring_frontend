import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TariningService {
  private url: string = '/backend/'

  constructor(private http: HttpClient) {}
  start(paras: object): void {
    console.log(paras)
    this.http.post(this.url + 'start', paras).subscribe(data => {
      console.log(data)
    })
  }
  end(): void {
    this.http.post(this.url + 'end', null).subscribe(data => {
      console.log(data)
    })
  }
  getOutput(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.url + 'getOutputs')
  }
}
