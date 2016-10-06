(function(_json, _cache, undefined){
    
    'strict'
    var 
        jsonTextArea = document.getElementById("jsonTextArea"),
        actionButton = document.getElementById("actionButton"),
        minifyButton = document.getElementById("minifyButton"),
        displayPanel = document.getElementById("displayPanel")
        ;

    function prettyFormat() {
        if (!jsonTextArea.value) {
            return;
        }

        var result = _json.beautifyJson(jsonTextArea.value);
        if (result.flg) {
            jsonTextArea.value = result.value;
        }
        else {
            panel("Error => " + result.error);
        }
    };

    function minify() {
        if (!jsonTextArea.value) {
            return;
        }
        var result = _json.minifyJson(jsonTextArea.value);
        if (result.flg) {
            jsonTextArea.value = result.value;
             _cache.store(result.value);
        }
        else {
            panel("Error => " + result.error);
        }
    }

    function panel(message) {
        if (!message) {
            return;
        }
        displayPanel.innerHTML += "Message: " + message + "</br>";
    }

    function init() {
       // register events
        actionButton.onclick = prettyFormat;
        minifyButton.onclick = minify;
    }

    init();
})(jsonBeautify, jsCache);