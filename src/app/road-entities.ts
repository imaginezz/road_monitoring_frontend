enum RoadRectType {
  D00 = 1,
  D01,
  D10,
  D11,
  D20,
  D40,
  D43,
  D44
}
class RoadRect {
  public Type: RoadRectType
  public Xmin: number
  public Ymin: number
  public Xmax: number
  public Ymax: number
}

class Road {
  public Id: number
  public Src: string
  public Name: string
  public Rects: Array<RoadRect>
}

export { RoadRectType, RoadRect, Road }
