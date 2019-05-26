import { Component, OnInit } from '@angular/core'
import { TariningService } from '../services/tarining.service'
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

  isStarted: boolean
  resultTimer: any

  results: Array<string>

  constructor(private trainingService: TariningService) {
    this.iters = '140000'
    this.stepSize = '[50000]'
    this.anchors = '[8,16,32]'
    this.ratios = '[0.5,1,2]'
    this.batchSize = '256'
    this.learningRate = '0.001'
    this.weightDecay = '0.0001'
    this.isStarted = false
  }

  ngOnInit() {}

  start() {
    let paras = {
      iters: this.iters,
      stepSize: this.stepSize,
      anchors: this.anchors,
      ratios: this.ratios,
      batchSize: this.batchSize,
      learningRate: this.learningRate,
      weightDecay: this.weightDecay
    }
    this.trainingService.start(paras)
    this.isStarted = true
    this.resultTimer = setInterval(() => {
      this.getOutputs()
    }, 1000)
  }
  end() {
    this.trainingService.end()
    clearInterval(this.resultTimer)
    this.isStarted = false
  }
  getOutputs() {
    this.trainingService.getOutput().subscribe(data => {
      this.results = data
      let outputEle = document.querySelector('.outputs')
      outputEle.scrollTop = outputEle.scrollHeight
    })
  }
}
