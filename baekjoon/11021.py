test_case = int(input())

for i in range(test_case):
  a, b = map(int, input().split(' '))
  print('Case #%s: %s'%(i + 1, a + b))
  print('Case #{0}: {1}'.format(i + 1, a + b))
