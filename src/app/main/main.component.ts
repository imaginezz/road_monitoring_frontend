import { Component, OnInit } from '@angular/core'
import { DataService } from '../services/data.service'
import { Road, RoadRectType, RoadRect } from '../road-entities'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  roadRectTypes: Array<string>
  road: Road
  nowRectId: number
  prevRoads: Array<number>
  newRoad: Road

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.prevRoads = new Array<number>()
    this.getRoadData()
    this.roadRectTypes = new Array<string>()
    this.loadRoadRectTypes()

    this.dataService.getRawData()
  }

  getRoadData(roadId?: number): void {
    if (roadId) {
      this.dataService.getRoad(roadId).subscribe(road => (this.road = road))
    } else {
      this.dataService.getRoad().subscribe(road => (this.road = road))
    }
    if (this.road) {
      if (this.road.Rects.length == 0) {
        this.nowRectId = -1
      } else {
        this.nowRectId = 0
      }
    } else {
      console.log('no road loaded')
    }
    this.newRoad = JSON.parse(JSON.stringify(this.road))
  }

  loadRoadRectTypes(): void {
    for (let t in RoadRectType) {
      if (isNaN(parseInt(t))) {
        this.roadRectTypes.push(t)
      }
    }
  }

  getType(type: string) {
    console.log(type)
    return RoadRectType[type]
  }

  getNowType(): string {
    if (this.nowRectId == -1) {
      return ''
    } else {
      return RoadRectType[this.road.Rects[this.nowRectId].Type]
    }
  }

  moveToNextRect(): void {
    if (this.nowRectId == -1) return
    if (this.nowRectId == this.road.Rects.length - 1) {
      this.nowRectId = 0
    } else {
      this.nowRectId++
    }
  }

  moveToNextRoad(): void {
    this.prevRoads.push(this.road.Id)
    this.getRoadData()
  }

  moveToPrevRoad(): void {
    console.log(this.prevRoads)
    if (this.prevRoads.length > 0) {
      let prevId = this.prevRoads.pop()
      this.getRoadData(prevId)
    }
  }
  resetCorrectData() {
    this.newRoad = JSON.parse(JSON.stringify(this.road))
  }
}
