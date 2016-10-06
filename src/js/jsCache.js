var jsCache = (function(){
    var _cache = [];
    function store(obj, uniqueKey) {
         if (_cache.length < 1){
                _cache.push(obj);
            }
            else {
                for (i = 0; i < _cache.length; i++) {
                        var row = _cache[i],
                        source = _cache[i][uniqueKey],
                        target = obj[uniqueKey];
                        if (source !== target) {
                                _cache.push(obj);
                        }
                }
            }
    }

    function get() {
        return _cache;
    }

    return {
        store: store,
        get: get
    }
})();