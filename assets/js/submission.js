const activityData = {
  id: 0,
  act1: null,
  act2: null,
  act3: null,
  act4: null,
  act5: null,
  tagColor: null,
  day: null,
  time: null,
};

const actionButton = document.getElementById("action-button");
const todoModal = document.getElementById("todo-modal");
const cancelButton = document.getElementById("cancelBtn");
const submitButton = document.getElementById("submitBtn");
const addButton = document.getElementById("btnAdd");

const act1 = document.getElementById("act1");
const act2 = document.getElementById("act2");
const act3 = document.getElementById("act3");
const act4 = document.getElementById("act4");
const act5 = document.getElementById("act5");
const color = document.getElementById("tagColor");

const d = new Date();

function getNowTime() {
  return d.getHours() + ":" + d.getMinutes();
}

function getNowDay(dayIndex) {
  switch (dayIndex) {
    case 1:
      return "Senin";
      break;
    case 2:
      return "Selasa";
      break;
    case 3:
      return "Rabu";
      break;
    case 4:
      return "Kamis";
      break;
    case 5:
      return "Jum'at";
      break;
    case 6:
      return "Sabtu";
      break;
    case 7:
      return "Minggu";
      break;

    default:
      return;
      break;
  }
}

function showModal() {
  todoModal.classList.remove("disp-none");
  actionButton.classList.add("disp-none");
}

function hideModal() {
  actionButton.classList.remove("disp-none");
  todoModal.classList.add("disp-none");
}

addButton.addEventListener("click", function (e) {
  if (confirm("Are you sure want to reset your to-do list?")) {
    localStorage.removeItem(CACHE_KEY);
  }
  renderHistory();
});

actionButton.addEventListener("click", function (e) {
  showModal();
});

cancelButton.addEventListener("click", function (e) {
  hideModal();
});

function clearForm() {
  activityData.id = 0;
  activityData.act1 = null;
  activityData.act2 = null;
  activityData.act3 = null;
  activityData.act4 = null;
  activityData.act5 = null;
  activityData.tagColor = null;
  activityData.day = null;
  activityData.time = null;

  act1.value = "";
  act2.value = "";
  act3.value = "";
  act4.value = "";
  act5.value = "";
  color.value = "red";
}

submitButton.addEventListener("click", function (e) {
  activityData.act1 = act1.value;
  activityData.act2 = act2.value;
  activityData.act3 = act3.value;
  activityData.act4 = act4.value;
  activityData.act5 = act5.value;
  activityData.tagColor = color.value;
  activityData.day = getNowDay(d.getDay());
  activityData.time = getNowTime();
  putHistory(activityData);
  renderHistory();
  clearForm();
  alert("Your to-do list created successfully!");
  hideModal();
});
