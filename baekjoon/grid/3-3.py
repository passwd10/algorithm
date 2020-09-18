n, m = map(int, input().split())

min_list = []

for i in range(0, n):
    min_list.append(min(list(input().split())))

print(max(min_list))