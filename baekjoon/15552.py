import sys

test_case = int(sys.stdin.readline())

for _ in range(test_case):
  input_data = sys.stdin.readline().rstrip().split(' ')
  a = int(input_data[0])
  b = int(input_data[1])
  print(a + b)
