n, m = map(int, input().split())
x, y, d = map(int, input().split())

maps = []
checked = [[0] * m for _ in range(n)]
checked[x][y] = 1

for _ in range(n):
  maps.append(list(map(int, input().split())))

# 북, 동, 남, 서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def turn_left(d):
  d -= 1
  if d == -1:
    d = 3
  return d

turn_time = 0
cnt = 1

while True:
  # 왼쪽으로 방향을 돌린다
  d = turn_left(d)
  turn_time += 1

  nx = x + dx[d]
  ny = y + dy[d]

  # 앞이 비어있다면 앞으로 간다
  if maps[nx][ny] == 0 and checked[nx][ny] == 0:
    x = nx
    y = ny
    checked[x][y] = 1
    cnt += 1
    turn_time = 0
  # 비어있지않거나 check된곳이면 다시 돌아감
  else:
    if turn_time == 4:
    # 뒤로간다
      x -= dx[d]
      y -= dy[d]
      turn_time = 0
    # 뒤로갔는데도 map이면 끝
      if maps[x][y] == 1:
        break

print(cnt)
