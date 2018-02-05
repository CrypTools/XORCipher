def encrypt(initial, key):
  """ Use (key is an 8 digits binary number) : encrypt("message", "10100100") 
=> 'ÉÁ××ÅÃÁ'
  """
  key = int(''.join(('0b', key)), 2)
  mylist = []
  for i in range (len(initial)):
    mylist.append(int(''.join(('0b', str(format(ord(initial[i]), '08b')))), 2))
  output = ""

  for i in range(0, len(mylist)):
    output += str(chr(mylist[i] ^ key))
  return output
