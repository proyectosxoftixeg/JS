# Lista de 10 números
numeros = [5, 3, 8, 2, 7, 1, 9, 4, 6, 10]

# Calcular la suma
suma = sum(numeros)

# Calcular la multiplicación
multiplicacion = 1
for numero in numeros:
    multiplicacion *= numero

# Mostrar resultados
print(f"Los números son: {', '.join(map(str, numeros))}")
print(f"La suma de los números es: {suma}")
print(f"La multiplicación de los números es: {multiplicacion}")