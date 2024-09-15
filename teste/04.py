def calcular_percentual(dados):
    total = sum(dados.values())
    for estado, valor in dados.items():
        percentual = (valor / total) * 100
        print(f"{estado}: {percentual:.2f}%")

faturamento_por_estado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    # ... outros estados
}

calcular_percentual(faturamento_por_estado)