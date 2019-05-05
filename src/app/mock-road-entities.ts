import { Road, RoadRect, RoadRectType } from './road-entities'

export const ROADS: Array<Road> = [
  {
    Id: 0,
    Src: 'assets/test_image.jpg',
    Name: 'ONLY FOR TEST',
    Rects: [
      { Type: RoadRectType.D00, Xmin: 0, Ymin: 0, Xmax: 40, Ymax: 60 },
      { Type: RoadRectType.D10, Xmin: 30, Ymin: 90, Xmax: 200, Ymax: 300 },
      { Type: RoadRectType.D40, Xmin: 240, Ymin: 320, Xmax: 400, Ymax: 500 },
      { Type: RoadRectType.D44, Xmin: 450, Ymin: 520, Xmax: 600, Ymax: 600 }
    ]
  }
]
