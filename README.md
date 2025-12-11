# ⚖️ JS Legislative Logic - Simulador de Processo Legislativo

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Logic](https://img.shields.io/badge/Lógica-Algoritmos-blue?style=for-the-badge)
![Console](https://img.shields.io/badge/Console-App-gray?style=for-the-badge)

> **Projeto Acadêmico | SENAI Roberto Simonsen** > *Disciplina: Linguagem de Marcação*

Este repositório contém um script desenvolvido em **JavaScript Puro (Vanilla JS)**, focado 100% na prática de lógica de programação e estruturação de dados, sem a utilização de interfaces gráficas (HTML/CSS).

O projeto utiliza uma **Simulação do Processo Legislativo Brasileiro** como estudo de caso para a aplicação prática de Máquinas de Estados.

---

## 📂 Sobre o Arquivo (`simuladorlegislacao.js`)

O script foca puramente no processamento de dados e tomada de decisões lógicas.

* **O que faz:** Simula o caminho de uma lei (da proposta inicial até a sanção presidencial) através de interações e logs.
* **Objetivo:** Demonstrar o controle de fluxo complexo sem depender de elementos visuais.

## 🧠 Conceitos e Tecnologias

O projeto aborda conceitos fundamentais da Ciência da Computação aplicados ao JavaScript:

* **🔄 Máquina de Estados (State Machine):** Controle do status da lei (Ex: *Em votação* -> *Aprovado* -> *Sancionado*).
* **📦 Objetos e Arrays (JSON):** Estruturação dos dados da lei e dos parlamentares.
* **elipsoide Funções e Recursividade:** Reutilização de código e chamadas de funções dentro de funções para avançar as etapas.
* **🔀 Lógica Condicional:** Uso intenso de `if/else` e `switch` para determinar o destino da proposta.

---

## 🛠️ Como executar

Este código foi projetado para ser agnóstico de plataforma, rodando diretamente no Console do Navegador ou em ambientes server-side.

### Opção 1: Console do Navegador (Mais fácil)
1.  Abra seu navegador (Chrome, Edge, Firefox, etc).
2.  Aperte a tecla **F12** (ou clique com botão direito na página -> *Inspecionar*).
3.  Vá na aba **Console**.
4.  Copie todo o código do arquivo `simuladorlegislacao.js`.
5.  Cole no console e aperte **Enter**.

### Opção 2: Node.js (Terminal)
Caso tenha o Node instalado:
```bash
node simuladorlegislacao.js
