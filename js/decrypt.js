/**********************************

Use: "Îãêêé¦Ñéôêâ§".decrypt(134)
=> 'Hello World!'

Or in the case of non-repeating keys:

Use: "U[êqQ¦JQôqZ§".decrypt([29, 62, 134])
=> 'Hello World!'

**********************************/

String.prototype.decrypt = function(key) {

    if (typeof key == 'number') key = [key]

    let output = '';
    for (var i = 0; i < this.length; i++) {
        const c = this.charCodeAt(i)
        const k = key[i % key.length]
        output += String.fromCharCode(c ^ k);
    }

    return output
}

module.exports = (text, key) => text.decrypt(key)
