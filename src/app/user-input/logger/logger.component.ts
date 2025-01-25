import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {
  @Input() logs: {condition: boolean; message: string;}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
