import { Injectable } from '@angular/core'
import { Road, RoadRect, RoadRectType } from '../road-entities'

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  constructor() {}
  parseCsv(rawContent: string): Array<Road> {
    let roads = new Array<Road>()
    let lines = rawContent.split('\n')
    for (let i in lines) {
      let road = new Road()
      road.Rects = new Array<RoadRect>()
      road.Id = parseInt(i) + 1
      let line = lines[i]
      let lineSplit = line.split(',')
      road.Name = lineSplit[0]
      road.Src = '/road_images/' + road.Name
      if (lineSplit.length < 2) continue
      let imgData = lineSplit[1].split(' ')
      let dataNum = imgData.length / 5
      for (let j = 0; j < dataNum - 1; j++) {
        let rect = new RoadRect()
        rect.Type = <RoadRectType>parseInt(imgData[5 * j + 0])
        rect.Xmin = parseInt(imgData[5 * j + 1])
        rect.Ymin = parseInt(imgData[5 * j + 2])
        rect.Xmax = parseInt(imgData[5 * j + 3])
        rect.Ymax = parseInt(imgData[5 * j + 4])
        road.Rects.push(rect)
      }
      roads.push(road)
    }
    return roads
  }
}
