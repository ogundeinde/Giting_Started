def array_left_rotation(a, n, k):
    return[a[(i+k)% n] for i in range(len(a))]
    
     
    

n, k = map(int, input().strip().split(' '))
a = list(map(int, input().strip().split(' ')))
answer = array_left_rotation(a, n, k);
print(*answer, sep=' ')
