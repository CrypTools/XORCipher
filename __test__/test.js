// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../NodeJS/")

const encrypt = require(path + "encrypt.js")
const decrypt = require(path + "decrypt.js")


eye.test("Encryption", "node",
	$ => $(encrypt("Hello World!", "key")).Equal("IwAVBwpZPAoLBwFY")
)
eye.test("Decryption", "node",
	$ => $(decrypt("IwAVBwpZPAoLBwFY", "key")).Equal("Hello World!"),
	$ => $(decrypt(encrypt("Hello World!", "key"), "key")).Equal("Hello World!")
)
