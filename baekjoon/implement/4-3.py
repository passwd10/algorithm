curDir = list(input())

y_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

x = int(curDir[1])
y = y_list.index(curDir[0]) + 1
print(x, y)
steps = [[-2, -1], [-2, 1], [2, 1], [2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]

cnt = 0

for step in steps:
  nx = x + step[0]
  ny = y + step[1]
  
  if nx < 1 or nx > 8 or ny < 1 or ny > 8:
    continue
  cnt += 1

print(cnt)