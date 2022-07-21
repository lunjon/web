def collatz(n: int):
    s = n
    while n != 1:
        n = n // 2 if n % 2 == 0 else 3*n + 1
        s += n
    return s

print(collatz(3456))
