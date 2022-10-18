function validate() {
    var username = document.forms["login"]["Uname"].value;
    var password = document.forms["login"]["Pass"].value;

    if (username == "ameet@quinnox.com" && password == "ameet@1") {
        window.location.href = "Dashboards.html";
    }
    else if (username == "sai@quinnox.com" && password == "sai@1") {
        window.location.href = "navigate.html";
    }

}