var jsonBeautify = (function(){
   'strict'
     var JSON_FORMAT_INDENT = 4;

    /*
    * check to see if the parameter is json format or not
    * return 
    {
        ret: true/false
        msg: {error message}
        value: return when success
    }
    */
    function _isJson(jsonVal) {
        if (!jsonVal){
            return {
                flg : false
            }
        }

        try {
            return {
                flg: true,
                value: JSON.parse(jsonVal)
            };
        } catch (error) {
            return {
                flg: false,
                error: error
                };
        }
    };

    function validate(jsonVal) {
        if (!jsonVal) {
            return {
                value: jsonVal,
                flg: false,
                error: "invalid " + jsonVal
            }
        }
        
        var json = _isJson(jsonVal);
        if (!json.flg) {
            return {
                value: jsonVal,
                flg: false,
                error: json.error
            }
        }
        return json;
    }

    /*
    * pretty print string json value
    */
    function _beautifyJson(jsonVal) {
       var result = validate(jsonVal);
        if (!result.flg) {
            return result;
        }

        return {
                value: JSON.stringify(result.value, null, JSON_FORMAT_INDENT),
                flg: true,
                length: result.value.length
            };
    };

    function _minifyJson(jsonVal) {
        var result = validate(jsonVal);
        if (!result.flg) {
            return result;
        }

        return {
            value: JSON.stringify(result.value, null, 0),
            flg: true,
            length: result.value.length
        };
    }

    return {
        isJson: _isJson,
        beautifyJson: _beautifyJson,
        minifyJson: _minifyJson,
        validate: validate
    }
})();