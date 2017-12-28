/**********************************

Use: "Hello World!".encrypt("key")
=> 'IwAVBwpZPAoLBwFY'

**********************************/
String.prototype.encrypt = function(key) {

    function xorStrings(key, input) {
        var output = '';
        for (var i = 0; i < input.length; i++) {
            var c = input.charCodeAt(i);
            var k = key.charCodeAt(i % key.length);
            output += String.fromCharCode(c ^ k);
        }
        return output;
    }
    return new Buffer(xorStrings(key, this), 'utf8').toString('base64');
}
