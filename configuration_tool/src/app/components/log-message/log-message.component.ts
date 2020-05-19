import { Component, Input, SimpleChanges, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.css']
})
export class LogMessageComponent {

  @Input() logMessage: string;
  @Output() closeLogMessage = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void { }

  closeLog(): void {
    this.closeLogMessage.emit(true);
  }

}
