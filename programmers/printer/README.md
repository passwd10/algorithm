# [Printer](https://programmers.co.kr/learn/courses/30/lessons/42587)

## 1. 이해

- 중요도 배열의 첫번째 값이 배열에서 가장 큰지 아닌지 확인해준다.
- 첫번째 값이 가장 크다면 출력한다.
- 첫번째 값이 가장 크지 않다면 배열의 맨 뒤로 보낸다.

## 2. 계획

- 중요도 배열의 priority와 location값을 객체로 만들고 해당 객체를 배열로 만든다.
- 객체배열의 첫번째 값과 나머지 값을 비교하거나, 첫번째 값을 나머지 값의 뒤로 보내야한다면? head와 tail로 배열을 나눠준다.
- head값의 priority가 모든 배열의 priority중 가장 크다면 head의 location이 입력받은 location과 같은지 비교한다.
- location값이 같으면 order를 출력한다. location값이 같지 않으면 order+1을 해준다.
- head값의 priority가 max값이 아니라면 tail뒤에 head를 붙이고 위의 과정을 반복한다.

## 3. 실행

## 4. 반성

- 전개연산자의 정확한 동작을 알지못했던것같다.
- Math.max는 배열을 인자로 할시에 NAN을 출력한다.
- 문제를 풀때 head, tail을 나누는 경우를 잘 생각하여 적용하자.
