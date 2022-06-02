// ==========================================================================
// got an error for "import" every time npm run start
// ===========================================================================
// import "./js/taskList";
// import "./js/pomodoro";
// import "./js/kanban";
// import "./js/dictionary";
// import "./js/music";
//============================================================================
//============================================================================



//=============================================================================
// tried to make a smarter one by using code below but failed to debug
// ============================================================================
// ---------------------this is version 1--------------------------------------
// window.onload = function(){   
//     var tabItem = document.getElementsById("fList");
//     var item = tabItem[0].getElementsByTagName("div");
//     var tabContent = document.getElementsByClassName("main");
//     var content = tabContent[0].getElementsByTagName("div");

//     for(let i = 0; item < length; i++){
//         item[i].onclick = function(){

//             for (let j = 0; j < item.length; j++){
//                 item[j].className = ''
//             }

//             this.className = "active";

//             for (let j = 0; j < content.length; j++){
//                 content[j].className = "function contentHide"
//             }
//             content[this.index].className = "function contentShow";
//         }
//     }
// }
// -------------------------------this is version 2------------------------------
// var fList = document.getElementById("fList");
// var list = fList.getElementsByTagName("li");
// var fComp = document.getElementById("components")
// var con = fComp.getElementsByTagName("div");



// for(var i = 0;i<list.length;i++){
//     // 文档在执行的时候，从上向下执行，并且把页面中的所有代码包括js加载完成以后用户才可以去实现点击，因此当用户在点击的时候，i已经是3，因此在这里我把每次循环的i值记录一下；
//     list[i].index = i;
//     list[i].onclick = function(){
//         for(var i = 0;i<list.length;i++){
//             list[i].className = "";
//             con[i].className = "";
//         }
//         var index = this.index;
//         list[index].className = "contentShow";
//         con[index].className = "choose";
//     }
// }
// from https://juejin.cn/post/6844904045761527822

var tab = document.getElementsByClassName('tab')[0];
var tabCart = tab.getElementsByTagName('li');
var content = document.getElementsByClassName('main')[0];
var contentCart = content.getElementsByTagName('div');

tab.addEventListener('click',function(e){
    console.log(tabCart.length)
    var index = '1'
    // 找到点击项的索引值
    for(var i=0;i<tabCart.length;i++){
        if(e.target==tabCart[i]){
            index = i
        }
    }
    // 给点击项加上active类
    tabCart[index].classList.add("active")
    // 去除其他选项上的active类
    for(var i=0;i<tabCart.length;i++){
        if(tabCart[i] != tabCart[index]){
            tabCart[i].classList.remove("active")
            console.log(1)
        }
    }
        // 给点击项相应的内容加上current类
    contentCart[index].classList.add("contentShow")
    // 去除其他选项上的current类
    for(var i=0;i<contentCart.length;i++){
        if(contentCart[i] != contentCart[index]){
            contentCart[i].classList.remove("contentShow")
            
        }
    }
})