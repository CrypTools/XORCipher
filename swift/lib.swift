/*********************************
*
* Use: "Hello World!".encrypt(keyValue: "key")
* => "IwAVBwpZPAoLBwFY"
*      ""IwAVBwpZPAoLBwFY".decrypt(keyValue: "key")
* => "Hello World!"
*
*********************************/
import Foundation

//ascii code
extension String {
    var asciiArray: [UInt32] {
        return unicodeScalars.filter{$0.isASCII}.map{$0.value}
    }
}
extension Character {
    var asciiValue: UInt32 {
        return (String(self).unicodeScalars.filter{$0.isASCII}.first?.value)!
    }
}
// Base 64
extension String {

    func fromBase64() -> String {
        guard let data = Data(base64Encoded: self) else {
            return ""
        }

        return String(data: data, encoding: .utf8)!
    }

    func toBase64() -> String {
        return Data(self.utf8).base64EncodedString()
    }
}

// main
extension String {
    func encrypt(keyValue: String) -> String {
        var out = "";
        let inArray = Array(self);
        let keyArray = Array(keyValue);
        for i in 0...self.count - 1 {
            let c = Int(inArray[i].asciiValue)
            let k = Int(keyArray[i % keyValue.count].asciiValue)
            out += String(Character(UnicodeScalar(Int(c ^ k))!))
        }
        return out.toBase64()
    }
    func decrypt(keyValue: String) -> String {
        var out = "";
        let str = self.fromBase64()
        let inArray = Array(str)
        let keyArray = Array(keyValue);
        for i in 0...str.count - 1 {
            let c = Int(inArray[i].asciiValue)
            let k = Int(keyArray[i % keyValue.count].asciiValue)
            out += String(Character(UnicodeScalar(Int(c ^ k))!))
        }
        return out
    }
}
