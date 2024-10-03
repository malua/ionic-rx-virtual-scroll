import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  private navCtrl = inject(NavController);
  items = Array(1000)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: `Item ${i}`,
      text: this.generateRandomText(1, 300),
    }));

  constructor() {}

  trackByIdForRxFor(index: number, item: any) {
    return item.id;
  }

  itemTapped(item: any) {
    console.log(item);
    this.navCtrl.navigateForward(['/tabs/tab1/tab2']);
  }

  private generateRandomText(minLength: number, maxLength: number): string {
    const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const words = lorem.split(' ');
    let result = '';

    while (result.length < minLength) {
      // Add a random number of words (between 1 and 5) each iteration
      const wordCount = Math.floor(Math.random() * 10) + 1;
      for (let i = 0; i < wordCount; i++) {
        result += words[Math.floor(Math.random() * words.length)] + ' ';
      }
    }

    // Trim the result and ensure it doesn't exceed maxLength
    result = result.trim();
    return result.length > maxLength
      ? result.slice(0, maxLength).trim()
      : result;
  }
}
