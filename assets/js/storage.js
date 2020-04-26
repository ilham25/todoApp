const CACHE_KEY = "todo_history";

function storageCheck() {
  return typeof Storage !== "undefined";
}

function putHistory(data) {
  if (storageCheck()) {
    let todoData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      todoData = [];
    } else {
      todoData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    todoData.unshift(data);

    if (todoData.length > 5) {
      todoData.pop();
    }

    localStorage.setItem(CACHE_KEY, JSON.stringify(todoData));
  }
}

function showHistory() {
  if (storageCheck()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

function articleElement(faCalendarDay, day, faClock, time, tagColor, activity) {
  return `<header>
        <div class='card-header'>
          <h2>${faCalendarDay}${day}</h2>
          <p>${faClock}${time}</p>
        </div>
    </header>
    <section>
        <h3 class='txt-${tagColor}'>To-do :</h3>
        <ul>
          <li class='bg-${tagColor}'>${activity[0]}</li>
          <li class='bg-${tagColor}'>${activity[1]}</li>
          <li class='bg-${tagColor}'>${activity[2]}</li>
          <li class='bg-${tagColor}'>${activity[3]}</li>
          <li class='bg-${tagColor}'>${activity[4]}</li>
        </ul>
    </section>`;
}

function renderHistory() {
  const todoData = showHistory();
  let historyList = document.querySelector("#content");
  const faClock = '<span><i class="far fa-clock"></i></span> ';
  const faCalendarDay = '<span><i class="fas fa-calendar-day"></i></span> ';

  historyList.innerHTML = "";
  historyList.innerHTML += `<h2 class="txt-purple" id="activity">My Activity</h2>`;

  if (localStorage.getItem(CACHE_KEY) !== null) {
    for (let history of todoData) {
      let article = document.createElement("article");
      article.classList.add("card", `bl-${history.tagColor}`);
      article.innerHTML = articleElement(
        faCalendarDay,
        history.day,
        faClock,
        history.time,
        history.tagColor,
        history.activity
      );
      historyList.appendChild(article);
    }
  } else {
    if (window.innerWidth <= 1024) {
      historyList.innerHTML += `<article class="card bl-purple"><header><h2>Your to-do list is empty, click the + button in the bottom-right corner to insert your to-do list!</h2></header></article>`;
    } else {
      historyList.innerHTML += `<article class="card bl-purple"><header><h2>Your to-do list is empty, click the + button in the middle to insert your to-do list!</h2></header></article>`;
    }
  }
}

renderHistory();
