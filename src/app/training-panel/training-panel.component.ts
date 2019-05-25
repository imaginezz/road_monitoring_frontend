import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-training-panel',
  templateUrl: './training-panel.component.html',
  styleUrls: ['./training-panel.component.less']
})
export class TrainingPanelComponent implements OnInit {
  iters: string
  stepSize: string
  anchors: string
  ratios: string
  batchSize: string
  learningRate: string
  weightDecay: string

  constructor() {
    this.iters = '140000'
    this.stepSize = '[50000]'
    this.anchors = '[8,16,32]'
    this.ratios = '[0.5,1,2]'
    this.batchSize = '256'
    this.learningRate = '0.001'
    this.weightDecay = '0.0001'
  }

  ngOnInit() {}

  test() {
    console.log(this.iters)
  }
}
