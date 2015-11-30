
var default_url = "http://pub.jamaica-inn.net/fpdb/api.php";

function Database(username, password, url) {
    this.username = username;
    this.url = url ? url : default_url;
    this.request = function (action, receiver) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            console.log('%s at readyState %i', action, xhr.readyState);
            if (xhr.readyState == 4) {
                // TODO: Check xhr.status
                var r = JSON.parse(xhr.response);
                console.log(action, r);
                receiver(r);
            }
        };
        xhr.open('GET', this.url  + '&username=' + this.username + '&password=' + password+ '?action=' + action);
        xhr.send();
    };
};
function handleRequestError(xhr, error) {
    console.error("handleRequestError(%o, %o)", xhr, error);
}
