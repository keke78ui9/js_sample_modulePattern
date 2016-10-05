(function(){
    'strict'
    var JSON_FORMAT_INDENT = 4,
        jsonTextArea = document.getElementById("jsonTextArea"),
        actionButton = document.getElementById("actionButton"),
        minifyButton = document.getElementById("minifyButton"),
        displayPanel = document.getElementById("displayPanel")
        ;

    function isJson(val) {
        try {
            return JSON.parse(val);
        } catch (error) {
            console.info(error);
            panel("Error: " + error);
        }
    };

    function beautifyJson() {
            var jsonVal = jsonTextArea.value;
            if (jsonVal) {
                
                    // check if value is json or not
                    var json = isJson(jsonVal);
                    if (json){
                        // beautifyJson
                        jsonTextArea.value = JSON.stringify(json, null, JSON_FORMAT_INDENT);
                        panel("TOTAL: " + jsonTextArea.value.length);
                    }
            }
    };

    function minifyJson() {
        var jsonVal = jsonTextArea.value;
        if (!jsonVal) {
            return;
        }

        // check if value is json or not
        var json = isJson(jsonVal);
        if (!json) {
            return;
        }

        jsonTextArea.value = JSON.stringify(json, null, 0);
        panel("TOTAL: " + jsonTextArea.value.length);
    }

    function panel(message) {
        if (!message) {
            return;
        }
        displayPanel.innerHTML += "Message: " + message + "</br>";
    }

    function init() {
       // register events
        actionButton.onclick = beautifyJson;
        minifyButton.onclick = minifyJson;
    }

init();
})();