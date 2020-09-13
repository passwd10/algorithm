input_data = int(input())

for i in range(input_data):
  a, b = map(int, input().split(' '))
  print('Case #{0}: {1}'.format(i + 1, a + b))