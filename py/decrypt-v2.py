# ==============================================================================
#
#   Use:
#   decrypt("Îãêêé¦Ñéôêâ§", 134)
#   => 'Hello World!'
#
#   Or in the case of non-repeating keys:
#
#   Use:
#   decrypt("U[êqQ¦JQôqZ§", [29, 62, 134])
#   => Hello World!'
#
# ==============================================================================

def decrypt(text, key):
  if type(key) is int: key = [key]

  output = ''

  for i in range(len(text)):
    c = ord(text[i])
    k = key[i % len(key)]
    output += chr(c ^ k)

  return output
