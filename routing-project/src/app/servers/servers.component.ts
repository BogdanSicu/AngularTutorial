import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    // relativeTo este path.ul relativ pe care il putem da optional pentru a face toate legaturile relative ale path.ului
    // this.route -> ActivatedRoute este tot path.ul activ
    
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
