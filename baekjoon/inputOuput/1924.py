month, day = list(map(int, input().split(' ')))

week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

month_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

days = day

for i in range(month):
    days += month_days[i]

print(week[days % 7 - 1])