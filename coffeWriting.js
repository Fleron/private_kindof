/**
 * Created by Emil on 2015-11-11.
 */
var userNameInput;
var pwdInput;
var loginButton;
var nextPage;
var dataBase;

sessionStorage.clear();

function login (response){
    if (response.type == "iou_get") {
        sessionStorage.setItem("fName", response.payload[0].first_name);
        sessionStorage.setItem("lName", response.payload[0].last_name);
        sessionStorage.setItem("user_id", response.payload[0].user_id);
        sessionStorage.setItem("credit", response.payload[0].assets);
        sessionStorage.setItem("lang", "en");
        location.assign(nextPage);
    }
    else if(response.type == "error") {
            location.reload()
    }

}
function init_login(e){
    var username = userNameInput.value;
    var pwd = pwdInput.value;
    sessionStorage.setItem("userName", username);
    sessionStorage.setItem("pwd", pwd);
    e.preventDefault();

    dataBase = new Database(username,pwd);
    dataBase.request("iou_get", login);

}
function login_Button(e){
    nextPage = "test_display.html";
    init_login(e);
}
function init(){
    userNameInput = document.getElementById("user");
    pwdInput = document.getElementById("pwd");
    loginButton = document.getElementById("submitButton");
    document.getElementById("login_form").addEventListener("submit", login_Button, false);
}

window.addEventListener("DOMContentLoaded", init, false);
