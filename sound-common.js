var fs = require("file-system");
var types = require("utils/types");

var Sound = (function () {
    function Sound() {
        if (arguments.length === 1) {
            var arg = arguments[0];
            var path = types.isString(arg) ? arg.trim() : "";

            if (path.indexOf("~/") === 0) {
                path = fs.path.join(fs.knownFolders.currentApp().path, path.replace("~/", ""));
            }
            
            if (!fs.File.exists(path)) {
                console.error("Sound not initialized; file not found.");
                return;
            }
            
            this._path = path;
        }
    }
    return Sound;
})();
exports.Sound = Sound;