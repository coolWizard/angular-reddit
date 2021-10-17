import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  /**
   * @param  {HTMLInputElement} title
   * @param  {HTMLInputElement} link
   * @returns boolean
   * This function will add new articles, clear inputs and return false to vaoid page reload
   */
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    if (title.value && link.value) {
      const article = new Article(title.value, link.value);
      this.articles.push(article);
      title.value = link.value = '';
    }
    return false;
  }
  /**
   * This will sort the list of Articles based on votes
   * @returns Article
   */
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => (a.votes - b.votes));
  }
  constructor() {
    this.articles = [
      new Article('Angular 2.0', 'http://angular.io', 10),
      new Article('Bootstrap 5.0', 'https://getbootstrap.com/docs/5.0/utilities/background/', 8),
      new Article('Laravel 5.7', 'https://laravel.com', 10)
    ];
  }
}
