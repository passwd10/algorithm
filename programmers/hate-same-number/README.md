# [같은 숫자는 싫어](https://programmers.co.kr/learn/courses/30/lessons/12906)

## 1. 이해

- 배열에 연속적으로 같은 숫자가 나타나면 하나의 숫자로 줄인다.
- 숫자의 순서는 중복제거 전의 순서를 유지해야 한다.

## 2. 계획

1. 배열의 맨 앞의 수를 Head로 분리한다.
2. Head와 배열의 맨 앞자리를 비교하여 앞자리가 같으면 배열에서 제거
3. 다르면 Head를 다음 수로 바꾸고 위의 작업을 반복한다.

## 3. 실행

## 4. 반성

- 간단하게 풀 수 있는 문제를 너무 돌아돌아 풀었다.
- 리펙토링 할것