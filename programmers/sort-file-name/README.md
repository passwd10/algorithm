# [파일명 정렬](https://programmers.co.kr/learn/courses/30/lessons/17686)

## 1. 이해

- HEAD는 숫자가 아닌 문자(최소 한글자 이상)
- NUMBER는 하글자에서 다섯글자 사이의 연속된 숫자(앞에 0가능)
- TAIL은 숫자가다시 나타날 수 있으며, 아무 글자도 없을 수 있다
정렬방법
- HEAD를 기준으로 사전순 정렬(대소문자 구분 X)
- NUMBER의 숫자 순으로 정렬(9 < 10 < 0011 < 012)
- HEAD, NUMBER같으면 원래 입력순서를 유지

## 2. 계획

## 3. 실행

## 4. 반성

- 문자열 비교시 localeCompare() 사용
