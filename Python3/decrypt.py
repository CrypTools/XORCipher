def decrypt(initial, key):
  """ Use (key is an 8 digits binary number) : decrypt("ÉÁ××ÅÃÁ", "10100100") 
=> 'message'
  """
  key = int(''.join(('0b', key)), 2)
  mylist = []
  for i in range (len(initial)):
    mylist.append(int(''.join(('0b', str(format(ord(initial[i]), '08b')))), 2))
  output = ""

  for i in range(0, len(mylist)):
    output += str(chr(mylist[i] ^ key))
  return output
