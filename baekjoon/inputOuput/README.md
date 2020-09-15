# 입력

```python
# 입력
input()

# 입력값 정수 변환

int(input())

# space로 입력값 구분
input.split(' ')

# 입력값 정수 List로 변환
map(int, input().split())

#sys.stdin.readline()
import sys

for x in sys.stdin.readline():
  print(x)
```

> sys.stdin.readline()은 한 라인을 컨테이너에 저장한다. 띄어쓰기와 개행문자(\n)을 포함한다. 또 input()보다 입력속도가 빨라 사용을 권하고있다.

```python
# 여러줄 입력받기 1
while True:
  try:
    input_data = input()
  except:
    break

# 2
import sys

for line in sys.stdin:
  input_data = line
```

```python
# 입력받은 문자열 한글자씩 list에 넣기
input_Data = list(input())
```
