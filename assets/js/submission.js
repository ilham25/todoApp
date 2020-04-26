const activityData = {
  id: 0,
  activity: null,
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
  return d.toLocaleTimeString();
}

function getNowDay(dayIndex) {
  switch (dayIndex) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 0:
      return "Sunday";
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
  activityData.activity = null;
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

function submitProcess() {
  activityData.activity = [
    act1.value,
    act2.value,
    act3.value,
    act4.value,
    act5.value,
  ];
  activityData.tagColor = color.value;
  activityData.day = getNowDay(d.getDay());
  activityData.time = getNowTime();
  putHistory(activityData);
  renderHistory();
  clearForm();
  alert("Your to-do list created successfully!");
  hideModal();
}

submitButton.addEventListener("click", function (e) {
  if (
    act1.value == "" ||
    act2.value == "" ||
    act3.value == "" ||
    act4.value == "" ||
    act5.value == ""
  ) {
    alert("You must insert all activities, or insert -");
  } else {
    submitProcess();
  }
});
