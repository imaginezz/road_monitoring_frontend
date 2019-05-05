import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Road, RoadRect, RoadRectType } from '../road-entities'
import { ROADS } from '../mock-road-entities'

import * as random from 'random'
import { CsvService } from './csv.service'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = ''
  private roads: Array<Road>

  constructor(private http: HttpClient, private csv: CsvService) {
    this.roads = new Array<Road>(...ROADS)
  }

  getRoads(): Observable<Array<Road>> {
    return of(this.roads)
  }
  getRoad(roadId?: number): Observable<Road> {
    if (this.roads.length > 0) {
      if (roadId) {
        return of(this.roads[roadId])
      } else {
        let rNum = random.int(0, this.roads.length - 1)
        return of(this.roads[rNum])
      }
    }
  }
  getRawData(): void {
    this.http
      .get(this.url + 'results.csv', { responseType: 'text' })
      .subscribe(data => {
        this.roads = this.csv.parseCsv(data)
      })
  }
}
