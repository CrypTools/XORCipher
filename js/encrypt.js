/* ==========================================================================
 *
 *    Use:
 *    "Hello World!".encrypt(134)
 *    => 'Îãêêé¦Ñéôêâ§'
 *
 *    Or in the case of non-repeating keys:
 *
 *    Use:
 *    "Hello World!".encrypt([29, 62, 134])
 *    => 'U[êqQ¦JQôqZ§'
 *
 * ========================================================================== */

String.prototype.encrypt = function(key) {

    if (typeof key == 'number') key = [key]

    let output = '';
    for (var i = 0; i < this.length; i++) {
        const c = this.charCodeAt(i)
        const k = key[i % key.length]
        output += String.fromCharCode(c ^ k);
    }

    return output
}

module.exports = (text, key) => text.encrypt(key)
