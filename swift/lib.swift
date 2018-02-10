/*********************************
 *
 * Use: "Hello World!".encrypt([134])
 * => "Îãêêé¦Ñéôêâ§"
 *      "U[êqQ¦JQôqZ§".decrypt([134])
 * => "Hello World!"
 *
 *********************************/
import Foundation

//ascii code
extension Character
{
    func unicodeValue() -> UInt32
    {
        let characterString = String(self)
        let scalars = characterString.unicodeScalars
        
        return scalars[scalars.startIndex].value
    }
}
// main
extension String {
    func encrypt(_ keyValue: Array<Int>) -> String {
        var out = "";
        let inArray = Array(self);
        let keyArray = keyValue;
        for i in 0...self.count - 1 {
            let c = Int(inArray[i].unicodeValue())
            let k = Int(keyArray[i % keyValue.count])
            out += String(Character(UnicodeScalar(Int(c ^ k))!))
        }
        return out
    }
    func decrypt(_ keyValue: Array<Int>) -> String {
        return self.encrypt(keyValue)
    }
}
