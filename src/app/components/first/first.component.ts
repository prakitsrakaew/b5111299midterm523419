import { Component, OnInit } from '@angular/core';


interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6020187',
      name: 'prakit',
      gender: 'male',
      birthyear: 1999,
      email: 'prakitsra@gmail.com',
      phone: '0918310479',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }
  onUserClick($e){
    alert('You '+$e.type+' the button at ('+$e.clientY+')');
  }
  onUserDBclick($e){
    alert('You '+$e.type+' the button');
  }
  onclickB($e){
return this.profile.address;

  }
  ngOnInit(): void {
  }

}
