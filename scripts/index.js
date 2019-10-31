function article(){
  var title = "Second Coming Of Crypto";
  var blurb = "The world's most-traded cryptocurrency has jumped 25% in a matter of days, rising above $9,300 in Monday trading from just under $7,500 on Oct. 25.";
  return "<article><h3>"+ title + "</h3><p>" + blurb + "</p><div class='button center'><a href='article.html'>View Article</a></div></article>";
}
function addArticle(){
    document.getElementsByTagName('section')[j].insertAdjacentHTML('beforeend', article());
}


function bodyLoaded() {
  var category = document.getElementsByClassName("category");
  for(var i = 0; i < category.length; i++){
    category[i].addEventListener("click", function(){
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      var img = this.getElementsByTagName("img")[0];
      if(content.style.display === "block"){
        content.style.display = "none";
        img.src = "images/up.png";
      }
      else{ 
        content.style.display = "block";
        img.src = "images/down.png";
        content.getElementsByTagName('section')[0].innerHTML = '';
        content.getElementsByTagName('section')[0].insertAdjacentHTML('beforeend', article().repeat(Math.floor(Math.random() * 12) + 4));
      }
    })
  };
}