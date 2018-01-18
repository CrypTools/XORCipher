# Lucas Gruwez created this file

def encrypt(initial, key):
  key = int(key, 2)
  l = list(initial)
  
  for i in range(len(l)):
    l[i] = chr(ord(l[i]) ^ key)
    
  return ''.join(l)
