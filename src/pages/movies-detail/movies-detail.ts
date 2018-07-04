import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesIntentPage } from '../movies-intent/movies-intent';

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

  selectedItem: any;
  text: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('c');
    this.text = this.selectedItem.MoviePlot;
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

}
