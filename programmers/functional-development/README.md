# [기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 1. 이해

- 진도가 100%일 때에만 서비스에 반영가능
- 먼저 개발되어도 앞에 있는 기능이 배포될때까지 기다려야한다.
- 한번에 몇개의 기능이 배포가 되는지 구해야한다

## 2. 계획

1. 하루가 지날때 마다 전체 progress에 각 speed를 더해준다.
2. progress의 맨 앞이 100이상이 되면 progress.shift를 한다.
3. 맨 앞이 100이상이 아닐때 까지 progress.shift, speed.shift를 한다.
4. shift할때 마다 count를 계산하여 result배열에 저장한다.
5. progress가 비워질 때 까지 반복한다.