showPosts();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
let title =document.getElementById("title");
let postText =document.getElementById("inputText");
let allPosts=localStorage.getItem("posts");

if(allPosts==null){
    allPostsObj=[];
}
else{
    allPostsObj=JSON.parse(allPosts);
}
allPostsObj.push([postText.value,title.value]);
localStorage.setItem("posts",JSON.stringify(allPostsObj));
postText.value="";
title.value="";

showPosts();

}
)
function showPosts(){
    let allPosts=localStorage.getItem("posts");
if(allPosts==null){
    allPostsObj=[];
}
else{
    allPostsObj=JSON.parse(allPosts);
}

let html="";
allPostsObj.forEach(function(element,index) {
    html+=`<div class="noteCard card my-3" style="">
           
    <div class="card-body">
      <h5 class="card-title">${element[0]}</h5>
      <p class="card-text">${element[1]}</p>
      <a href="#" class="btn btn-outline-danger btn-sm">Remove</a>
    </div>
  </div>`;

    
});
let postsElem = document.getElementById("posts");
if(allPostsObj.length!=0){
    postsElem.innerHTML=html;
}
else{
    postsElem.innerHTML="No posts yet!"
}
}