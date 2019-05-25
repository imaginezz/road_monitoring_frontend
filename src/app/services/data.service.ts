import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { saveAs } from 'file-saver'
import * as random from 'random'

import { CsvService } from './csv.service'
import { Road, RoadRect, RoadRectType } from '../road-entities'
import { ROADS } from '../mock-road-entities'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = '/file/'
  private roads: Array<Road>

  constructor(private http: HttpClient, private csv: CsvService) {
    this.roads = new Array<Road>(...ROADS)
    this.getRawData()
  }

  getRoads(): Observable<Array<Road>> {
    return of(this.roads)
  }
  getRoad(roadId?: number): Observable<Road> {
    if (this.roads.length > 0) {
      if (roadId) {
        roadId = roadId % this.roads.length
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
        this.roads.push(...this.csv.parseCsv(data))
      })
  }
  downCorrectDatas(): void {
    let data = this.csv.deparseCsv(this.roads.slice(1))
    var blob = new Blob([data], { type: 'text/plain;charset=utf-8' })
    saveAs.saveAs(blob, 'new_results.txt')
  }
}
