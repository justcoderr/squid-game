import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {
  players :any;
  playerid:number;
  player ={
    "id": "1",
    "name": "شينع دونغ هيوك",
    "city": "---",
    "imglink": "imges/personage/squid-game-per-001.png",
    "inifo": "لاعب مسن  و مريض   ",
  }
  constructor() { 
    let data = new DataService()
    this.players = data.getPlayers();
  }
  findPlayer(id:number){
    if(id > 465 || id <1 ){
      Swal.fire({
        icon: 'error',
        title: 'خطأ...',
        text: 'يجب ان يكون رقم اللاعب بين 1 و 465 !',
      })
    }
    else if (id == undefined){
      Swal.fire({
        icon: 'error',
        title: 'خطأ...',
        text: 'انت لم تكتب أي شيئ في  خانة البحت!',
        
      })
    }
    else{
      this.player =  this.players.find((plyr:any) => plyr.id == id)
    }
  }
  ngOnInit(): void {
  }

}
