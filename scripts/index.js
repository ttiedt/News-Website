function article(category, num){
  var data = "{'ai': [{'title': 'AI 1','blurb': 'This is AI 1', 'content': 'Lorem ipsum dolor sit amet'}]}";
  var obj = JSON.parse(data);
  var title = obj.category[num-1].title;
  var blurb = obj.category[num-1].blurb;
  console.log(title + " " + blurb);
  //return "<article><h3>"+ title + "</h3><p>" + blurb + "</p><div class='button'><a href='#'>View Article</a></div></article>";
}
function addAi(){
  document.getElementById('ai').insertAdjacentHTML('beforeend', article("ai", 1));
}
function expandAi(event){
  var category = document.getElementsByClassName("category");
  category[0].classList.toggle("active");
  var content = this.nextElementSibling;
  var img = category[0].getElementsByTagName("img")[0];
  if (content.style.display === "block") {
    content.style.display = "none";
    img.src = "images/up.png";
  }
  else {
    content.style.display = "block";
    img.src = "images/down.png";
    addAi();
  }
}
function expandGamming(event){
  var category = document.getElementsByClassName("category");
  category[1].classList.toggle("active");
  var content = this.nextElementSibling;
  var img = category[1].getElementsByTagName("img")[0];
  if (content.style.display === "block") {
    content.style.display = "none";
    img.src = "images/up.png";
  }
  else {
    content.style.display = "block";
    img.src = "images/down.png";
  }
}
function expandTech(event){
  var category = document.getElementsByClassName("category");
  category[2].classList.toggle("active");
  var content = this.nextElementSibling;
  var img = category[2].getElementsByTagName("img")[0];
  if (content.style.display === "block") {
    content.style.display = "none";
    img.src = "images/up.png";
  }
  else {
    content.style.display = "block";
    img.src = "images/down.png";
  }
}
function expandCrypto(event){
  var category = document.getElementsByClassName("category");
  category[3].classList.toggle("active");
  var content = this.nextElementSibling;
  var img = category[3].getElementsByTagName("img")[0];
  if (content.style.display === "block") {
    content.style.display = "none";
    img.src = "images/up.png";
  }
  else {
    content.style.display = "block";
    img.src = "images/down.png";
  }
}
function bodyLoaded() {
  var category = document.getElementsByClassName("category");
  category[0].addEventListener("click", expandAi);
  category[1].addEventListener("click", expandGamming);
  category[2].addEventListener("click", expandTech);
  category[3].addEventListener("click", expandCrypto);
}