# Respostas

## Questão 1
Código: question1.js
Soma = 77

## Questão 2
a) 1, 3, 5, 7, 9 (ímpares)
b) 2, 4, 8, 16, 32, 64, 128 (2^1, 2^2, 2^3, 2^4, 2^5, 2^6, 2^7)
c) 0, 1, 4, 9, 16, 25, 36, 49 (0^2, 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, 7^2)
d) 4, 16, 36, 64, 100 (2^2, 4^2, 6^2, 8^2, 10^2)
e) 1, 1, 2, 3, 5, 8, 13 (sequência de Fibonacci)
f) 2,10, 12, 16, 17, 18, 19, 20 (não identifiquei lógica)

## Questão 3
Código: question3.js

## Questão 4
Diagrama: question4.pdf

Pergunta: SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”)
Resposta:

```sql
SELECT c.id, c.razao_social, t.numero
FROM Cliente c
INNER JOIN Estado e
ON c.estado_id = e.codigo AND e.uf = 'SP'
INNER JOIN Telefone t
ON t.cliente_id = c.id
```


## Questão 5
O caminhão à 80 km/h demora uma hora para rodar essa distância, demora 30 min para rodar 40km, 15min para rodar 20km, 7min30s para rodar 10km e 3min45s para rodar 5 km. Assim, o caminhão rodará 80km+40km+5km = 125km em 1h+30min+3min45s = 1h33min45s. Já o carro roda 90km em 1h, 30 km em 20min, 15 km em 10 min, 5 km em 3min20s, para completar o percurso então ele rodará 90km+30km+5km = 125km em 1h + 20min + 3min20s = 1h23min20s, só que ele demora 15 minutos a mais por conta das três paradas de 5 minutos, o que dá 1h38min20s. Assim, o carro levará mais tempo para chegar ao seu destino, e ele estará mais perto de Ribeirão Preto ao se cruzarem, pois o carro vai andar mais lento devido as paradas e demorará mais para completar a viagem.