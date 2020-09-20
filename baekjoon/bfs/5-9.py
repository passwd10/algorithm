from collections import deque

graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]


def bfs(graph, visited, v):
  visited[v] = True
  queue = deque([v])

  while queue:
    pop_value = queue.popleft()
    print(pop_value, end=' ')
    for i in graph[pop_value]:
      if visited[i] == False:
        visited[i] = True
        queue.append(i)


visited = [False] * len(graph)

bfs(graph, visited, 1)
