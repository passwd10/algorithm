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

visited = [False] * len(graph)

def dfs(graph, visited, v):
  visited[v] = True
  print(v, end=' ')
  for j in graph[v]:
    if visited[j] == False:
      dfs(graph, visited, j)

dfs(graph, visited, 1)