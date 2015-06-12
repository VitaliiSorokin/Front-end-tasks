
function renameItem() {
    var newText = prompt("What item?");
    var eBtnId = this.id.replace("eBtn_", "");

    if (!newText || newText == " " || newText == "") {
        return false;
    }
    document.getElementById("span_" + eBtnId).innerText = newText;
}

function deleteItem() {
    var dBtnId = this.id.replace("dBtn_", "");
    document.getElementById("li_" + dBtnId).style.display = "none";
}

function updateStatus() {
    var chckBxId = this.id.replace("chckBx_", "");
    var itemText = document.getElementById("span_" + chckBxId);

    if (this.checked){
        itemText.style.textDecoration = "line-through";
    } else {
        itemText.style.textDecoration = "none";
    }
}

function addNewTask(list, itemText) {
    totalItems++;

    var todoItem = document.createElement("li");
    todoItem.id = "li_" + totalItems;
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "chckBx_" + totalItems;
    checkBox.onclick = updateStatus;

    var span = document.createElement("span");
    span.innerText = itemText;
    span.id = "span_" + totalItems;

    var editBtn = document.createElement("input");
    editBtn.id = "eBtn_" + totalItems;
    editBtn.type = "button";
    editBtn.value = " Edit ";
    editBtn.onclick = renameItem;

    var deleteBtn = document.createElement("input");
    deleteBtn.id = "dBtn_" + totalItems;
    deleteBtn.type = "button";
    deleteBtn.value = " Delete ";
    deleteBtn.onclick = deleteItem;

    todoItem.appendChild(checkBox);
    todoItem.appendChild(span);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    list.appendChild(todoItem);

}

var totalItems = 0;
var btnNew = document.getElementById("new-task");
btnNew.onclick = function () {
    var itemTextEl = document.getElementById("task-name");
    var itemText = itemTextEl.value;

    if (itemText == " " || itemText == "") {
        return false;
    }
    addNewTask(document.getElementById("tasks-list"), itemText);
};