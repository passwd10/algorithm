input_data = int(input())

sum = 0

input_next_data = list(map(int, input()))

for i in range(input_data):
  sum += input_next_data[i]

print(sum)
