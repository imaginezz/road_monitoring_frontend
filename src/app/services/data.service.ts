import { Injectable } from '@angular/core'
import { Road, RoadRect, RoadRectType } from '../road-entities'
import { ROADS } from '../mock-road-entities'

import * as random from 'random'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}
  getRoads(): Array<Road> {
    return ROADS
  }
  getRoad(roadId?: number): Road {
    if (roadId) {
      return ROADS[roadId]
    } else {
      let rNum = random.int(0, ROADS.length - 1)
      return ROADS[rNum]
    }
  }
}
