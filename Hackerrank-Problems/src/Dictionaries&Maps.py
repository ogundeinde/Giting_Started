# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys
dic = {}
n = int(input())
for i in range(0,n):
   value = input()
   arr = value.split(" ")
   dic.update({arr[0]:arr[1]})
lines = sys.stdin.readlines()
for i in range(0,len(lines)):
    x = lines[i].strip("\n")
    if x in dic:
        print(x + "=" + dic[x])
    else:
        print("Not found")
        



       


