// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(oldArticle) {
    this.oldArticle = oldArticle;

    this.expandButton = this.oldArticle.querySelector('.expandButton');
    this.expandButton.textContent = '↓';
    // this.expandButton.addEventListener('click', expandArticle);
    this.expandButton.addEventListener('click', () => {

      if(oldArticle.classList[1] != 'toggle-open') {
        TweenMax.set(oldArticle, {height: 'auto'});
        TweenMax.from(oldArticle, 0.5, {height: 70});
        oldArticle.classList.add('toggle-open');
        TweenMax.to(menu, 0.15, {width: 0});
        TweenMax.to(menuList, 0.15, {opacity: 0});
        menu.classList.remove('menu-open');
      } else {
        TweenMax.to(oldArticle, 0.5, {height: 70})
        oldArticle.classList.remove('toggle-open');
      }

      this.expandButton.classList.toggle('article-open--button')
      if(this.expandButton.textContent === '↓') {
        this.expandButton.textContent = '↑';
      } else {
        this.expandButton.textContent = '↓';
      }
    });
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    
  }
}

let articles = document.querySelectorAll('.article');
articles.forEach((oldArticle) => {
  const article = new Article(oldArticle);
})