n, m, k = map(int, input().split())

num_list = list(map(int, input().split()))

result = 0
cnt = 0

num_list = sorted(list(set(num_list)), reverse=True)

for _ in range(0, m):
  if cnt == k:
    cnt = 0
    result += num_list[1]
  else:
    cnt += 1
    result += num_list[0]

print(result)