# Lucas Gruwez created this file

def encrypt(initial, key):
  """ Use (key is an 8 digits binary number) : encrypt("message", "10100100") 
=> 'ÉÁ××ÅÃÁ'
  """
  key = int(key, 2)
  l = list(initial)
  
  for i in range(len(l)):
    l[i] = chr(ord(l[i]) ^ key)
    
  return ''.join(l)
  
def decrypt(initial, key):
  key = int(key, 2)
  l = list(initial)
  
  for i in range(len(l)):
    l[i] = chr(ord(l[i]) ^ key)
    
  return ''.join(l)
