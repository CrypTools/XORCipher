/**********************************

Use: "IwAVBwpZPAoLBwFY".encrypt("key")
=> 'Hello World!'

**********************************/
String.prototype.decrypt = function(key) {

    function xorStrings(key, input) {
        var output = '';
        for (var i = 0; i < input.length; i++) {
            var c = input.charCodeAt(i);
            var k = key.charCodeAt(i % key.length);
            output += String.fromCharCode(c ^ k);
        }
        return output;
    }

    const data = new Buffer(this, 'base64').toString('ascii')
    return xorStrings(key, data);
};
