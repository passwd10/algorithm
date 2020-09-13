def hello(name):
    return 'Hi, {0}{1}'.format(name, '!')

def googoo(num):
  googooList = []
  for i in range(1, 10):
    googooList.append(i * int(num))
  return googooList

def test_hello():
    assert hello('JOKER') == 'Hi, JOKER!'

def test_googoo():
    assert googoo('2') == [2, 4, 6, 8, 10, 12, 14, 16, 18]