import "./js/taskList";
import "./js/pomodoro";
import "./js/kanban";
import "./js/dictionary";
import "./js/music";

// =============================================================
//                      v1.0
// =============================================================
// window.onload = function(){
//     var naviList = document.getElementsById("fList");
//     var aList = naviList.getElementsByTagName("a");
//     var cDiv = document.getElementById("cDiv");
//     var contents = cDiv.getElementsByTagName("div");

//     for(var i = 0; i < aList.length; i++){
//         aList[i].index = i;
//         aList[i].onclick = function(){
//             for(var j = 0; j < aList.length; j++){
//                 aList[j].className = '';
//             }
//             this.className = 'activate';

//             for(var j = 0; j < contents.length; j++){
//                 contents[j].className = 'function contentHide';
//             }

//             contents[this.index].className = "function contentShow";
//         }
//     }
// }
// =============================================================

window.onload = function () {
    var box = document.getElementById('box');
    var input = box.getElementsByTagName('input');
    var div = box..getElementsByTagName('div');

    for (var i = 0; i < input.length; i++) { //循环历遍onclick事件
        input[i].index = i; //input[0].index=0 index是自定义属性
        input[i].onclick = function () {

            for (var i = 0; i < input.length; i++) { //循环历遍去掉button样式和把div隐藏
                input[i].className = '';
                div[i].style.display = 'none';

            };

            this.className = 'active'; //当前按钮添加样式

            div[this.index].style.display = 'block'; //div显示 this.index是当前div 即div[0]之类的

        };

    };

};