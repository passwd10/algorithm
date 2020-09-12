# 구구단
num = int(input())

for i in range(1, 10):
    # print(str(num) + ' * ' + str(i) + ' = ' + str(num * i))
    print('{0} * {1} = {2}'.format(num, i, num * i))
