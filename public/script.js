import "./js/taskList";
import "./js/flowTimeTracker";
import "./js/kanban";
import "./js/dictionary";
import "./js/music";

window.onload = function(){
    var naviList = document.getElementsById("fList");
    var aList = naviList.getElementsByTagName("a");
    var cDiv = document.getElementById("cDiv");
    var contents = cDiv.getElementsByTagName("div");

    for(var i = 0; i < aList.length; i++){
        aList[i].index = i;
        aList[i].onclick = function(){
            for(var j = 0; j < aList.length; j++){
                aList[j].className = '';
            }
            this.className = 'activate';

            for(var j = 0; j < contents.length; j++){
                contents[j].className = 'function contentHide';
            }

            contents[this.index].className = "function contentShow";
        }
    }
}