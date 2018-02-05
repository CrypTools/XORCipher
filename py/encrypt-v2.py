"""
Use: "Hello World!".encrypt(134)
=> 'Îãêêé¦Ñéôêâ§'

Or in the case of non-repeating keys:

Use: "Hello World!".encrypt([29, 62, 134])
=> 'U[êqQ¦JQôqZ§'
"""

def encrypt(text, key):
  if type(key) is int: key = [key]

  output = ''

  for i in range(len(text)):
    c = ord(text[i])
    k = key[i % len(key)]
    output += chr(c ^ k)

  return output
