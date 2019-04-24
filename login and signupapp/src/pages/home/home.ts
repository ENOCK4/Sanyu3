import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import {Storage} from '@ionic/storage'
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fullName:string;
  username:string;
  email:string;
  pass:string;
   
  key2:string = 'username'; 
  key3:string = 'email'; 
  key4:string = 'pass'; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage
  ) {
    
    
  }

  savData(){
  this.storage.set('this.key2', 'this.username');
  this.storage.set('this.key3', 'this.email');
  this.storage.set('this.key4', 'this.pass');

   this.navCtrl.push(LoginPage);

  } 

  loadData(){
    this.storage.get(this.key1).then((val) =>{
      console.log('Your username  is', val);
    }
  )
  }
  

}
