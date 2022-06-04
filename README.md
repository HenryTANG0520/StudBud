# DECO 2017 A3
##### **CTAN8981** 
##### Studbud

---

**1. [The original Design](#the-original-design)**

**2. [Problems Encountered](#problems-encountered)**

**3. [Development Roadmap](#development-roadmap)**

**4. [Reflection](#reflection)**

---

## The Original Design

The original design of studbud is like this:

>1. **Task Manager**
>![taskManager](img/taskManager.png "taskManager")

>2. **Flow Time Tracker**
![flowTimeTracker](img/flowTimeTracker.png "flowTimeTracker")

>3. **Kanban Board**
>![kanbanBoard](img/kanbanBoard.png "kanbanBoard")

>4. **Dictionary**
>![dictionary](img/dictionary.png "dictionary")

>5. **Music Player** at the left corner
>![music](img/Music.png "music")

---

## Problems Encountered

As I working through the assignment, I found that I cannot make javascript work at the place I wanted.

>1. I cannot apply the DOM changes
>1. The browser does not syncrinize everytime I made some changes
>1. The import function does not work and stop me from opening localhost
>1. I learnt from web and apply to my work but it does not work
>1. I lose confidence and patience during the work
>1. I did not learn well for this semester's JavaScript


* I found some tutorials on the web and planned to follow and make my own web app, but every time it just does not work, I've been working on one single problem for 4 days which is just a tab effect.

Here is the JS code and there are different versions in the [script.js](/public/script.js) file

```javascript

var tab = document.getElementsByClassName('tab')[0];
var tabCart = tab.getElementsByTagName('li');
var content = document.getElementsByClassName('main')[0];
var contentCart = content.getElementsByTagName('div');

tab.addEventListener('click',function(e){
    console.log(tabCart.length)
    var index = '1'
    for(var i=0;i<tabCart.length;i++){
        if(e.target==tabCart[i]){
            index = i
        }
    }
    tabCart[index].classList.add("active")
    for(var i=0;i<tabCart.length;i++){
        if(tabCart[i] != tabCart[index]){
            tabCart[i].classList.remove("active")
            console.log(1)
        }
    }
    contentCart[index].classList.add("contentShow")
    for(var i=0;i<contentCart.length;i++){
        if(contentCart[i] != contentCart[index]){
            contentCart[i].classList.remove("contentShow")
            
        }
    }
})

```

* Though I get the right class name and Id name, I still cannot make it change like I wished. I found many code solution and trie them for many times but I cannot get pass this

The website tutorial I found are listed below
>1. [Task list 1](https://freshman.tech/todo-list/)
>1. [Task list 2](https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec)
>1. [Kanban Borad](https://www.cssscript.com/draggable-kanban-board/)
>1. [Pomodoro](https://freshman.tech/pomodoro-timer/)
>1. [Dictionary API](https://www.youtube.com/watch?v=qWjEUO8C3LY)
>1. [Dictionary](https://www.makeuseof.com/build-dictionary-app-using-javascript/)
>1. [Tab](https://blog.csdn.net/qq_15096707/article/details/50605671)

I tried to follow the tutorial but failed
I kept trying, tried to at least finish one function, but I stucked at the tab function task list and pomodoro

---

## Development Roadmap

From the above section you may noticed, why would I studcked in doing pomodoro when my prototype design is flow time tracker

It is because I cannot figure out how to put the effect I want on the time flow. So I changed to Pomodoro as it sounds easier



## Reflection
