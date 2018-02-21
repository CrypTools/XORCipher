# XOR Cipher
<p align="center">
<!-- replace image by project Image -->
<img height="128" src="https://cryptools.github.io/img/xor.svg">
</p>
<p align="center">
<img src="https://cryptools.github.io/img/status/implemented.svg">
<img src="https://img.shields.io/travis/CrypTools/XORCipher.svg">
<img src="https://img.shields.io/github/license/Cryptools/XORCipher.svg">
<img src="https://img.shields.io/github/contributors/Cryptools/XORCipher.svg">
</p>

A simple adaptive cipher based on the logical XOR operation.

## How it works

### Encoding

The XOR cipher will encrypt a message by using the Boolean XOR (exclusive or) operation. A XOR B returns 1 if and only if A and B are different.

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

To encrypt a message with a given key, we first convert the string into their ASCII equivalent, and we then XOR every character with the key. For example, if we want to encrypt XOR with 134 as a key, we would do:

```txt
    X        O        R
01011000 01001111 01010010    # String in ASCII
10000110 10000110 10000110    # Repeating key 134
--------------------------
11011110 11001001 11010100    # XOR result
    Þ        É        Ô       # Result converted back into plain text
```

When implemented in python, we get `char ^ key`.

As you might have noticed, in this cipher, a given character is always replaced by the same character. This makes frequency analysis easier. To avoid that, we can use a non-repeating key eg. `29, 62, 134`, where we loop through the keys to encode each character.

```txt
 X  O  R
88  79  82
29  62 134
----------
69 113 212
 E  q   Ô
```


### Decoding

The XOR operation has a couple of properties, including:

```txt
A XOR A = 0
A XOR 0 = A
(A XOR B) XOR C = A XOR (B XOR C)
```

So, from that, we can conclude that:

```txt
B XOR A XOR A = B XOR 0 = B
```

Therefore, to decrypt a message, we need to re-XOR it with the same key, aka. re-encode it.

```txt
    Þ        É        Ô       # Encoded string
11011110 11001001 11010100    # String in  ASCII
10000110 10000110 10000110    # Repeating key 134
--------------------------
01011000 01001111 01010010    # XOR result
    X        O        R       # Decoded string
```

## Cons
* Frequency analysis can be used to crack the code if the key is a single number.

## Implementations

|    Language    |            Encrypt             |            Decrypt             |
|----------------|--------------------------------|--------------------------------|
|   Javascript   |  [encrypt.js](js/encrypt.js)   |  [decrypt.js](js/decrypt.js)   |
|   Python       | [encrypt.py](py/encrypt-v2.py) | [decrypt.py](py/decrypt-v2.py) |
|   Swift        |  [lib.swift](swift/lib.swift)  |  [lib.swift](swift/lib.swift)  |

## Running the tests

Tests are automatically handled by [Travis CI](https://travis-ci.org/CrypTools/XORCipher/).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/CrypTools/cryptools.github.io/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/CrypTools/XORCipher/tags).

## Authors

Made with ❤️ at CrypTools.

See also the list of [contributors](https://github.com/CrypTools/XORCipher/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
