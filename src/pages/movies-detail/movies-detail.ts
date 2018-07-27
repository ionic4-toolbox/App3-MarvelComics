import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesIntentPage } from '../movies-intent/movies-intent';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MoviesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-detail',
  templateUrl: 'movies-detail.html',
})
export class MoviesDetailPage {

  video_id: any;
  selectedItem: any;
  text: any;
  countries: any;
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public atrCtrl: AlertController, public rest: RestProvider) {
    this.selectedItem = navParams.get('c');
    this.text = this.selectedItem.MoviePlot;
  }

  getDownloads() {
    this.rest.getDownloads(this.selectedItem)
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
       }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesDetailPage');
    this.text = this.selectedItem.MoviePlot;
  }

  characters(event) {
    this.navCtrl.push(MoviesIntentPage, {
      c: this.selectedItem
    });
}

showDownloadAlert() {
  this.getDownloads();
  if(this.countries > 0){
  let alert = this.atrCtrl.create();
  alert.setTitle('Select Movies Print');

  alert.addInput({
    type: 'radio',
    label: '720p',
    value: '720p',
    checked: true
  });
   alert.addInput({
    type: 'radio',
    label: '1080p',
    value: '1080p',
    checked: false
  });
  alert.addInput({
    type: 'radio',
    label: '3D',
    value: '3D',
    checked: false
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      //this.testRadioOpen = false;
      //this.testRadioResult = data;
    }
  });
  alert.present();
}
else{
  let alert = this.atrCtrl.create({
    title: 'No Downloads',
    subTitle: 'Sorry !! No Downloads Available',
    buttons: ['OK']
  });
  alert.present();
}
}

}
