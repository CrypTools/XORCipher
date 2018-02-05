// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../js/")

const encrypt = require(path + "encrypt.js")
const decrypt = require(path + "decrypt.js")


eye.test("Encryption", "node",
	$ => $(encrypt("Hello World!", 134)).Equal("Îãêêé¦Ñéôêâ§"),
	$ => $(encrypt("Hello World!", [29, 62, 134])).Equal("U[êqQ¦JQôqZ§")
)
eye.test("Decryption", "node",
	$ => $(decrypt("Îãêêé¦Ñéôêâ§", 134)).Equal("Hello World!"),
	$ => $(decrypt("U[êqQ¦JQôqZ§", [29, 62, 134])).Equal("Hello World!")
)
