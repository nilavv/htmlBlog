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

let current_datetime = new Date();
let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
allPostsObj.push([postText.value,title.value,formatted_date]);
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
//     var dd = String(element[2].getDate()).padStart(2, '0');
// var mm = String(element[2].getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = element[2].getFullYear();
// var d= mm + '/' + dd + '/' + yyyy;
    html+=`<div class="noteCard card my-3" style="">
           
    <div class="card-body">
      <h5 class="card-title">${element[1]} </h5>
      <small>posted on ${element[2]} </small>
      <p class="card-text">${element[0]}</p>
      <a id ="${index}" onclick="deletePost(this.id)" class="btn btn-outline-danger btn-sm">Remove</a>
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
function deletePost(index){
    console.log("delete called");
    let allPosts=localStorage.getItem("posts");
    if(allPosts==null){
        allPostsObj=[];
    }
    else{
        allPostsObj=JSON.parse(allPosts);
    }
    allPostsObj.splice(index,1);
    localStorage.setItem("posts",JSON.stringify(allPostsObj));
    showPosts(); 
}