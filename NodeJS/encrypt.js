/**********************************

Use: "Hello World!".encrypt("key")
=> 'IwAVBwpZPAoLBwFY'

**********************************/
String.prototype.encrypt = function(key) {

    function xorStrings(key, input) {
        let output = '';
        for (let i = 0; i < input.length; i++) {
            const c = input.charCodeAt(i);
            const k = key.charCodeAt(i % key.length);
            output += String.fromCharCode(c ^ k);
        }
        return output;
    }
    return new Buffer(xorStrings(key, this), 'utf8').toString('base64');
}
