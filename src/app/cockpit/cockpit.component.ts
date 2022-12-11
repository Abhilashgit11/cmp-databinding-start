import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = 'Abhi';
  newServerContent = 'Abhi Content';
  @ViewChild('newServerContent', { static: true })
  ServerContent!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName.value);
    this.serverCreated.emit({
      serverName: serverName.value, serverContent: this.newServerContent
    });
  }  

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, serverContent: this.ServerContent.nativeElement.value
    });
  }

}
