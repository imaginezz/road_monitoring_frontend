import { Road, RoadRect, RoadRectType } from './road-entities'

export const ROADS: Array<Road> = [
  {
    Id: 0,
    Src: 'assets/test_image.jpg',
    Name: 'test_image1.jpg',
    Rects: [
      { Type: RoadRectType.D00, Xmin: 1, Ymin: 10, Xmax: 40, Ymax: 60 },
      { Type: RoadRectType.D10, Xmin: 30, Ymin: 90, Xmax: 200, Ymax: 300 }
    ]
  },
  {
    Id: 1,
    Src: 'assets/test_image.jpg',
    Name: 'test_image2.jpg',
    Rects: [{ Type: RoadRectType.D40, Xmin: 4, Ymin: 10, Xmax: 40, Ymax: 60 }]
  }
]
