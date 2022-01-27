import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''; -> acestea erau folosite pentru 2 way binding, dar nu avem nevoie de asa ceva doar pentru preluarea datelor
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:any, contentInput: any) {
    console.log(nameInput)
    this.serverCreated.emit({serverName: nameInput.value, serverContent: contentInput.value});
  }

  onAddBlueprint(nameInput:any, contentInput: any) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: contentInput.value});
  }

}
