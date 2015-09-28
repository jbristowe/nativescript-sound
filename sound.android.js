var common = require("./sound-common");

var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        _super.apply(this, arguments);

        this._player = new android.media.MediaPlayer();
        this._player.setAudioStreamType(android.media.AudioManager.STREAM_MUSIC);
        this._player.setDataSource(this._path);
        this._player.prepareAsync();
    }
    Sound.prototype.play = function () {
        this._player.start();
    };
    Sound.prototype.reset = function () {
        this._player.reset();
    };
    return Sound;
})(common.Sound);
exports.Sound = Sound;

exports.create = function(path) {
    return new Sound(path);
};