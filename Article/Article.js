// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(oldArticle) {
    this.oldArticle = oldArticle;

    this.expandButton = this.oldArticle.querySelector('.expandButton');
    this.expandButton.textContent = '↓';
    // this.expandButton.addEventListener('click', expandArticle);
    this.expandButton.addEventListener('click', () => {
      oldArticle.classList.toggle('article-open');
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
    // this.expandButton.addEventListener('click', () => {
    //   oldArticle.classList.toggle('article-open');
    // });
  }
}

let articles = document.querySelectorAll('.article');
articles.forEach((oldArticle) => {
  console.log(oldArticle);
  const article = new Article(oldArticle);
})