# Archivo: backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def optimizar_portafolio(capacidad, objetos):
    n = len(objetos)
    dp = [[0] * (capacidad + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        peso = objetos[i-1]['peso']
        ganancia = objetos[i-1]['ganancia']

        for w in range(capacidad + 1):
            if peso <= w:
                dp[i][w] = max(ganancia + dp[i-1][w - peso], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]

    seleccionados = []
    ganancia_total = dp[n][capacidad]
    w = capacidad
    peso_total = 0

    for i in range(n, 0, -1):
        if dp[i][w] != dp[i-1][w]:
            item = objetos[i-1]
            seleccionados.append(item['nombre'])
            w -= item['peso']
            peso_total += item['peso']

    seleccionados.reverse()

    return {
        "seleccionados": seleccionados,
        "ganancia_total": ganancia_total,
        "peso_total": peso_total
    }

@app.route('/optimizar', methods=['POST'])
def optimizar():
    data = request.get_json()

    try:
        capacidad = int(data.get('capacidad'))
        objetos = data.get('objetos')

        if not isinstance(objetos, list) or capacidad < 0:
            return jsonify({"error": "Datos de entrada inválidos"}), 400

        for obj in objetos:
            if not all(k in obj for k in ('nombre', 'peso', 'ganancia')):
                return jsonify({"error": "Estructura de objeto incorrecta"}), 400

            obj['peso'] = int(obj['peso'])
            obj['ganancia'] = int(obj['ganancia'])

    except (ValueError, TypeError):
        return jsonify({"error": "Tipos de datos incorrectos"}), 400

    resultado = optimizar_portafolio(capacidad, objetos)
    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True, port=5000)