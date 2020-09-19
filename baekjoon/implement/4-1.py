n = int(input()) + 1
plans = list(input().split())

curDir = [1, 1]

# L R U D
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for plan in plans:
  move_index = move_types.index(plan)
  nx = curDir[0] + dx[move_index]
  ny = curDir[1] + dy[move_index]

  if nx < 1 or nx > n or ny < 1 or ny > n:
    continue
  curDir = [nx, ny]

print(curDir)  