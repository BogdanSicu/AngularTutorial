import { Component } from '@angular/core';
import { Element } from './shared/element.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements:Element[] =[];

    constructor(){

    }

    ngOnInit() {  

    }

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
      this.serverElements.push(new Element("server", serverData.serverName, serverData.serverContent))
    }
  
    onBluePrintAdded(serverData: {serverName: string, serverContent: string}) {
      this.serverElements.push(new Element("blueprint", serverData.serverName, serverData.serverContent))
    }
}
