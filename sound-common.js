var fs = require("file-system");
var types = require("utils/types");

var Sound = (function () {
    function Sound() {
        if (arguments.length === 1) {
            var path = arguments[0];
            var fileName = types.isString(path) ? path.trim() : "";

            if (fileName.indexOf("~/") === 0) {
                fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
            }
            
            if (!fs.File.exists(fileName)) {
                console.error("Sound not initialized; file not found.");
                return;
            }
            
            this._path = fileName;
        }
    }
    Sound.prototype.stop = function () {
        this._player.stop();
    };
    return Sound;
})();
exports.Sound = Sound;