# 🔢 Adivinhe o Número

Um jogo simples e divertido onde o jogador deve adivinhar um número secreto entre 1 e 1000, utilizando um sistema de palpites com dicas visuais que indicam se o número correto é maior ou menor. 

## 🕹️ Como funciona?

- O número secreto é sorteado aleatoriamente no início da partida.
- O jogador utiliza botões de 0 a 9 para formar seu palpite.
- Após cada tentativa, o jogo atualiza as faixas mínima e máxima com base no palpite:
  - Se o palpite for **menor** que o número secreto, o mínimo aumenta.
  - Se for **maior**, o máximo diminui.
- O jogo registra o número de turnos e salva a melhor pontuação (menos tentativas) no `localStorage`.
- Ao acertar, o jogador pode reiniciar a partida e tentar bater seu próprio recorde.

## 💻 Tecnologias usadas

- **HTML5** – Estrutura da página.
- **CSS3** – Estilização e responsividade básica.
- **JavaScript Vanilla** – Lógica do jogo, manipulação do DOM, controle de estado e persistência de dados com `localStorage`.


## 🧠 Conceitos aplicados

- Manipulação do DOM
- Eventos de clique
- Controle de estado com variáveis
- Condicionais e loops
- Armazenamento local (localStorage)
- Responsividade básica com CSS Flexbox

## 🏁 Como jogar

1. Clique em **COMEÇAR**.
2. Use os botões numéricos para formar seu palpite.
3. Clique em **ADIVINHE** para verificar.
4. O jogo te dirá se o número correto é maior ou menor.
5. Continue até acertar.
6. Tente fazer isso no menor número de turnos possível!

## 🚀 Melhorias futuras (ideias)

- Adicionar modo difícil com limite de tentativas
- Implementar feedback com som ou animações
- Responsividade total para dispositivos móveis
- Ranking com top 5 pontuações
- Transições mais suaves e efeitos visuais

---
