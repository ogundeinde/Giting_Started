from collections import *
def number_needed(a, b):
    pass
    a= Counter(a)
    b= Counter(b)
    c= a-b
    d= b-a
    e = c + d
    return len(list(e.elements()))

a = input().strip()
b = input().strip()

print(number_needed(a, b))