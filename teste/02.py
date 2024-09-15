def pertence_fibonacci(num):
    a, b = 0, 1
    while b < num:
        a, b = b, a+b
    return b == num

numero = int(input("Digite um número: "))
if pertence_fibonacci(numero):
    print(f"{numero} pertence à sequência de Fibonacci.")
else:
    print(f"{numero} não pertence à sequência de Fibonacci.")