# CADERNO DE QUESTÕES: COUNTING SORT & RADIX SORT (LSD / MSD)
**Disciplina:** Estrutura de Dados III — Bacharelado em Ciência da Computação
**Instituição:** Instituto Federal Sul-rio-grandense (IFSUL) — Câmpus Passo Fundo
**Docente:** Prof. Leonardo Deliyannis Constantin 
**Origem das Questões:** Exames Oficiais POSCOMP (SBC), ENADE (INEP) e Concursos Públicos de Nível Superior em Computação.

---

## PARTE I: CADERNO DE QUESTÕES

### Questão 01 (POSCOMP — Teoria Geral de Algoritmos)
No modelo de árvore de decisão, qual é o limite inferior assintótico no pior caso para qualquer algoritmo de ordenação baseado exclusivamente em comparações de chaves?
- A) Ω(n)
- B) Ω(\log n)
- C) Ω(n \log n)
- D) Ω(n^2)
- E) Ω(2^n)

---

### Questão 02 (POSCOMP — Complexidade de Algoritmos)
Algoritmos de ordenação não comparativos, tais como o Counting Sort e o Radix Sort, são capazes de quebrar a barreira assintótica de Ω(n \log n) porque:
- A) Realizam partições sucessivas do vetor à semelhança do Quick Sort com pivô ideal.
- B) Operam exclusivamente *in-place*, sem necessidade de qualquer memória adicional.
- C) Não efetuam comparações de ordem relativa entre pares de elementos, usando os valores numéricos dos dados diretamente como índices ou endereços de posições em memória.
- D) Assumem que os dados de entrada já se encontram previamente distribuídos de forma equilibrada em árvores binárias de busca.
- E) Utilizam filas de prioridade implementadas sobre heaps binários.

---

### Questão 03 (POSCOMP — Estabilidade em Ordenação)
(POSCOMP adaptada) Um algoritmo de ordenação é classificado como estável se a ordem relativa dos itens com chaves idênticas se mantém inalterada após o processamento. A respeito dessa propriedade, considere as assertivas:
I. O Counting Sort padrão pode ser implementado de forma estável se o vetor original for percorrido da direita para a esquerda ao preencher o vetor de saída.
II. O algoritmo Radix Sort LSD independe da estabilidade da sua rotina interna de ordenação para produzir uma sequência ordenada válida.
III. O Quick Sort clássico é um método inerentemente estável e *in-place*.

Quais estão corretas?
- A) Apenas I.
- B) Apenas II.
- C) Apenas I e III.
- D) Apenas II e III.
- E) I, II e III.

---

### Questão 04 (POSCOMP — Counting Sort: Complexidade)
Considere um vetor A de tamanho n contendo números inteiros no intervalo [0, k]. A complexidade assintótica de tempo do Counting Sort clássico para o melhor, médio e pior caso é dada por:
- A) Θ(n), Θ(n \log n), Θ(n^2)
- B) Θ(n + k) para todos os três casos.
- C) Θ(n \log k) para o pior caso e Θ(n) para o melhor caso.
- D) Θ(k) no melhor caso e Θ(n^2) no pior caso.
- E) Θ(n) no melhor caso e Θ(n + k) no pior caso.

---

### Questão 05 (Concurso Superior / Analista de TI)
Em qual dos seguintes cenários o Counting Sort apresenta consumo de tempo e memória consideravelmente desvantajoso quando comparado a um algoritmo de comparação tradicional como o Heapsort ou Mergesort?
- A) Ordenar 1.000.000 de inteiros cujos valores variam entre 0 e 500.
- B) Ordenar 500.000 inteiros situados no intervalo de 0 a 100.000.
- C) Ordenar 1.000 inteiros cujos valores variam no intervalo de 0 a 10^9.
- D) Ordenar um vetor de 100.000 inteiros já previamente ordenado.
- E) Ordenar um vetor cujos elementos possuem todos o mesmo valor.

---

### Questão 06 (POSCOMP — Memória Auxiliar)
Quanto ao uso de recursos computacionais, o Counting Sort clássico projetado para ordenar n inteiros positivos no intervalo [0, k] exige espaço de memória auxiliar de ordem:
- A) O(1), sendo classificado como *in-place*.
- B) O(\log n), correspondente à pilha de execução.
- C) O(k) exclusivo para a tabela de frequências, sem vetor de saída.
- D) Θ(n + k), necessitando de um vetor de contagem de tamanho k+1 e um vetor de saída de tamanho n.
- E) O(n \cdot k) em matrizes de dispersão.

---

### Questão 07 (Simulado POSCOMP / Prova Discursiva Adaptada)
Dado o vetor de entrada A = [4, 1, 3, 4, 3], com chaves no intervalo de 1 a 4. Ao executar o algoritmo Counting Sort, qual será a configuração final do vetor de contagem acumulada C (onde C[i] representa a quantidade de elementos menores ou iguais a i)?
- A) C[1]=1, C[2]=1, C[3]=3, C[4]=5
- B) C[1]=1, C[2]=0, C[3]=2, C[4]=2
- C) C[1]=1, C[2]=2, C[3]=3, C[4]=5
- D) C[1]=0, C[2]=1, C[3]=3, C[4]=5
- E) C[1]=1, C[2]=1, C[3]=2, C[4]=5

---

### Questão 08 (POSCOMP — Rastreio de Execução)
No Counting Sort, caso o laço responsável por descarregar os elementos no vetor de saída percorra o vetor de entrada no sentido direto (do índice 0 até n-1), em vez do sentido inverso (de n-1 até 0), o resultado será:
- A) O algoritmo entrará em laço infinito por violar as condições de contagem.
- B) O vetor final continuará ordenado corretamente, mas a ordenação perderá a propriedade de estabilidade.
- C) Os elementos maiores serão posicionados incorretamente antes dos elementos menores.
- D) A complexidade de tempo do algoritmo aumentará de linear para quadrática.
- E) O algoritmo passará a operar de forma *in-place*.

---

### Questão 09 (POSCOMP — Radix Sort LSD: Mecânica)
No algoritmo Radix Sort LSD (Least Significant Digit), o procedimento de ordenação das chaves ocorre:
- A) Particionando o vetor recursivamente a partir do dígito mais significativo para o menos significativo.
- B) Iterativamente, a partir do dígito menos significativo (unidades) em direção ao dígito mais significativo, exigindo uma sub-rotina de ordenação estável a cada passada.
- C) Comparando o primeiro dígito com o último dígito de cada registro e realizando trocas diretas.
- D) Selecionando o elemento mediano e alocando-o na raiz de uma árvore heap.
- E) Aplicando uma função de dispersão com encadeamento direto em cada caractere.

---

### Questão 10 (POSCOMP — Radix Sort: Complexidade)
Considere o Radix Sort LSD ordenando n chaves inteiras compostas por d dígitos na base b, utilizando internamente o Counting Sort. A complexidade assintótica de tempo total dessa execução é:
- A) Θ(d \cdot n \cdot \log b)
- B) Θ(d \cdot (n + b))
- C) Θ(n \cdot (d + \log n))
- D) Θ(b \cdot (n + d))
- E) Θ(n^d / b)

---

### Questão 11 (POSCOMP — Configuração de Base)
Deseja-se ordenar n inteiros que assumem valores no intervalo fechado de 0 até n^2 - 1. Assinale a opção que descreve a abordagem ótima em tempo assintótico:
- A) Utilizar Heapsort com custo Θ(n \log n).
- B) Utilizar Radix Sort interpretando os números na base n, resultando em d=2 passadas e complexidade Θ(n).
- C) Utilizar Counting Sort diretamente no intervalo [0, n^2-1], obtendo complexidade linear Θ(n).
- D) Utilizar o Quick Sort clássico, cuja complexidade de pior caso é sempre linear.
- E) Nenhum algoritmo consegue ordenar tal vetor em tempo assintótico inferior a Ω(n \log n) devido à árvore de decisão.

---

### Questão 12 (Concurso Perito Criminal / Computação)
Para ordenar um milhão (10^6) de inteiros positivos de 32 bits através do Radix Sort LSD, um desenvolvedor agrupa os bits em blocos de 8 bits. Quantas passadas serão necessárias e qual será a base b utilizada no Counting Sort interno?
- A) 8 passadas e base 32.
- B) 4 passadas e base 256.
- C) 32 passadas e base 2.
- D) 4 passadas e base 8.
- E) 16 passadas e base 16.

---

### Questão 13 (Simulado POSCOMP — Rastreio de Dígitos)
Considere a lista de inteiros em base 10: V = [170, 45, 75, 90, 802, 24, 2, 66]. Qual será a disposição do vetor imediatamente após a conclusão da primeira passada do Radix Sort LSD (ordenação estável pelo dígito das unidades)?
- A) [2, 24, 45, 66, 75, 90, 170, 802]
- B) [170, 90, 802, 2, 24, 45, 75, 66]
- C) [802, 2, 24, 45, 66, 75, 90, 170]
- D) [170, 90, 24, 45, 75, 66, 802, 2]
- E) [2, 802, 170, 90, 24, 45, 75, 66]

---

### Questão 14 (Simulado POSCOMP — Rastreio da Segunda Passada)
Tomando o vetor resultante da primeira passada da questão anterior ([170, 90, 802, 2, 24, 45, 75, 66]), qual será a configuração do vetor após a conclusão da segunda passada do Radix Sort LSD (ordenação pelo dígito das dezenas)?
- A) [802, 2, 24, 45, 66, 170, 75, 90]
- B) [2, 802, 24, 45, 66, 75, 170, 90]
- C) [802, 2, 24, 45, 66, 75, 170, 90]
- D) [24, 45, 66, 75, 90, 170, 802, 2]
- E) [170, 75, 90, 802, 2, 24, 45, 66]

---

### Questão 15 (POSCOMP — Radix Sort MSD vs LSD)
Em relação às diferenças estruturais entre as variantes LSD (Least Significant Digit) e MSD (Most Significant Digit) do Radix Sort, assinale a opção correta:
- A) O MSD opera de forma estritamente iterativa sem o uso de chamadas recursivas ou partições.
- B) O LSD processa as chaves da esquerda para a direita, sendo mais adequado para strings de comprimento variável.
- C) O MSD opera a partir do dígito mais significativo em direção ao menos significativo, particionando os dados em baldes e aplicando chamadas recursivas sobre cada subdivisão.
- D) O LSD apresenta pior caso de tempo exponencial quando as chaves possuem quantidades idênticas de dígitos.
- E) O MSD elimina a necessidade de qualquer rotina de contagem auxiliar.

---

### Questão 16 (Concurso Público / Analista de Sistemas)
No contexto de ordenação lexicográfica de palavras em um dicionário, o algoritmo Radix Sort MSD é frequentemente preferido em relação ao Radix Sort LSD porque:
- A) Não aloca espaço em pilha de execução.
- B) Pode discriminar e consolidar a ordem de palavras sem inspecionar todos os seus caracteres se os prefixos já forem únicos em uma partição.
- C) Possui complexidade garantida de O(1) no melhor caso de palavras invertidas.
- D) É imune a caracteres repetidos no mesmo texto.
- E) Dispensa o conhecimento prévio do tamanho do alfabeto.

---

### Questão 17 (POSCOMP — Degeneração e Overhead no MSD)
Um problema prático bem conhecido da implementação clássica do Radix Sort MSD ao lidar com grandes conjuntos de dados que geram muitas partições pequenas é:
- A) A possibilidade de violação da ordem matemática por divisão por zero.
- B) O alto overhead de chamadas de funções recursivas e alocação de tabelas para partições contendo poucos elementos.
- C) O travamento em laço infinito decorrente de caracteres nulos.
- D) A degradação imediata da complexidade assintótica para O(n!).
- E) A obrigatoriedade de conversão de todas as chaves em inteiros binários negativos.

---

### Questão 18 (Concurso Superior — Ordenação Composta)
Deseja-se ordenar uma tabela de registros contendo os campos Data de Nascimento (composta por: Dia [1..31], Mês [1..12] e Ano [1900..2026]). Se for empregado o algoritmo Radix Sort LSD utilizando o Counting Sort em cada estágio, em qual ordem cronológica os campos devem ser ordenados para garantir o resultado correto?
- A) Primeiro por Ano, depois por Mês, e por último por Dia.
- B) Primeiro por Mês, depois por Dia, e por último por Ano.
- C) Primeiro por Dia, depois por Mês, e por último por Ano.
- D) Primeiro por Dia, depois por Ano, e por último por Mês.
- E) A ordem dos campos é irrelevante, desde que as amplitudes sejam normalizadas.

---

### Questão 19 (POSCOMP — Requisitos de Chave)
O Counting Sort só pode ser aplicado diretamente a conjuntos de dados cujas chaves pertençam a um domínio discreto, finito e mapeável em inteiros não negativos, porque:
- A) Algoritmos com tempo linear não admitem dados com precisão dupla.
- B) A técnica depende do uso do próprio valor numérico da chave como índice de endereçamento direto no vetor de frequências acumuladas.
- C) O compilador restringe o uso de tipos abstratos em funções que não contenham comparações explícitas de menor ou igual.
- D) A árvore de decisão impede a ordenação de variáveis não indexadas.
- E) O algoritmo depende da representação física de números em ponto flutuante IEEE 754.

---

### Questão 20 (POSCOMP — Comparações entre Métodos)
(POSCOMP adaptada) Considere as afirmativas sobre algoritmos de ordenação:
I. O algoritmo Quick Sort possui complexidade Θ(n \log n) no caso médio e O(n^2) no pior caso.
II. O algoritmo Counting Sort executa sempre em tempo estritamente linear, independentemente da faixa de valores k coberta pelas chaves.
III. O algoritmo Radix Sort LSD necessita que a sua rotina intermediária de ordenação seja estável para preservar a coerência das passadas anteriores.

Quais estão corretas?
- A) Apenas I.
- B) Apenas II.
- C) Apenas I e III.
- D) Apenas II e III.
- E) I, II e III.

---

### Questão 21 (Concurso TI — Estabilidade e Ponteiros)
Se aplicarmos o Counting Sort para ordenar ponteiros de estruturas utilizando como chave um campo inteiro secundário (exemplo: ordenação de alunos por nota de 0 a 100), a garantia de que alunos com notas idênticas permanecerão na ordem em que foram lidos advém de:
- A) Utilizar árvores de busca balanceadas durante o particionamento.
- B) Percorrer o vetor de entrada a partir do final (n-1) até o início (0), posicionando o item no índice C[\text{chave}]-1 e decrementando o acumulador em seguida.
- C) Inicializar o vetor de saída inteiramente com valores nulos.
- D) Realizar uma ordenação prévia das chaves pelo algoritmo Bubble Sort.
- E) Descartar chaves repetidas e reinseri-las em fila FIFO.

---

### Questão 22 (POSCOMP — Radix em Números Negativos)
Caso um vetor contenha números inteiros positivos e negativos no intervalo [-M, +M], a maneira correta de tratá-los no Counting Sort sem corromper os limites de acesso à memória consiste em:
- A) Multiplicar todos os números negativos por -1 antes da execução.
- B) Somar o módulo do menor elemento (+M) a todos os itens do vetor como fator de deslocamento (offset), restaurando o valor original na saída.
- C) Alocar posições negativas no vetor de contagem através de ponteiros desreferenciados.
- D) Executar o algoritmo apenas sobre os números positivos e ignorar os negativos.
- E) Utilizar o algoritmo Quick Sort como pré-processamento obrigatório.

---

### Questão 23 (ENADE / POSCOMP — Notação Assintótica e Complexidade)
Considere a ordenação de n chaves inteiras pelo Radix Sort LSD em base b = 2 (bit a bit). Se cada chave possui representação fixa de 64 bits (d = 64), a complexidade assintótica de tempo no pior caso para esta configuração é:
- A) Θ(n \log n)
- B) Θ(64 \cdot n) = \Theta(n)
- C) Θ(2^n)
- D) Θ(n^2)
- E) Θ(\log n)

---

### Questão 24 (Simulado Discursivo / POSCOMP — Rastreio de Acumuladores)
Seja o vetor A = [2, 0, 2, 1, 4, 1, 0, 2], com elementos no intervalo [0, 4]. Qual é o vetor de contagem acumulada C produzido na etapa intermediária do Counting Sort?
- A) C = [2, 4, 7, 7, 8]
- B) C = [2, 2, 3, 0, 1]
- C) C = [0, 2, 4, 7, 8]
- D) C = [2, 4, 6, 7, 8]
- E) C = [1, 3, 6, 6, 8]

---

### Questão 25 (POSCOMP — Espaço em Pilha: LSD vs MSD)
Em relação ao consumo de memória auxiliar na pilha de recursão entre o Radix Sort LSD e o Radix Sort MSD, assinale a afirmativa correta:
- A) Ambos exigem profundidade recursiva equivalente a O(n^2).
- B) O LSD clássico é iterativo e consome O(1) de espaço de chamadas, enquanto o MSD recursivo consome O(d + b) de espaço de pilha.
- C) O MSD é estritamente iterativo e dispensa qualquer controle de profundidade.
- D) O LSD exige alocação de pilhas de execução cujo tamanho depende do quadrado da base (b^2).
- E) Nenhum dos dois consome memória auxiliar, pois ambos são estritamente *in-place*.

---

## PARTE II: GABARITO OFICIAL DEFINITIVO E JUSTIFICATIVAS

### Tabela de Respostas

| Questão | Gabarito | Assunto Principal |
| :---: | :---: | :--- |
| **01** | **C** | Limite inferior da árvore de decisão (Ω(n \log n)). |
| **02** | **C** | Ruptura do limite por ausência de comparações de chaves. |
| **03** | **A** | Estabilidade do Counting Sort e dependência do Radix LSD. |
| **04** | **B** | Complexidade Θ(n + k) invariante a dados ordenados. |
| **05** | **C** | Degeneração por amplitude k \gg n no Counting Sort. |
| **06** | **D** | Espaço auxiliar Θ(n + k) (vetores C e B). |
| **07** | **A** | Rastreio de frequências acumuladas (C[i] = C[i] + C[i-1]). |
| **08** | **B** | Perda de estabilidade com varredura progressiva. |
| **09** | **B** | Princípio de funcionamento do Radix LSD (unidade \to maior dígito). |
| **10** | **B** | Complexidade assintótica Θ(d(n + b)) do Radix Sort. |
| **11** | **B** | Otimização com base b=n e d=2 para intervalo [0, n^2-1]. |
| **12** | **B** | Agrupamento de bits (32/8 = 4 passadas; base 2^8 = 256). |
| **13** | **B** | Rastreio da 1ª passada do Radix LSD (dígito das unidades). |
| **14** | **A** | Rastreio da 2ª passada do Radix LSD (dígito das dezenas). |
| **15** | **C** | Natureza divisiva e recursiva do Radix Sort MSD. |
| **16** | **B** | Poda de análise de sufixos em partições unitárias no MSD. |
| **17** | **B** | Custo de chamadas recursivas para subproblemas pequenos no MSD. |
| **18** | **C** | Ordenação de chaves compostas (LSD: menor prioridade \to maior prioridade). |
| **19** | **B** | Mapeamento direto do valor da chave como índice de memória. |
| **20** | **C** | Análise comparativa: complexidade do Quicke estabilidade do Radix. |
| **21** | **B** | Mecânica da varredura reversa para conservação da ordem estável. |
| **22** | **B** | Normalização de números negativos via fator de translação (offset). |
| **23** | **B** | Tempo linear O(n) com d constante em tamanho fixo de bits. |
| **24** | **A** | Rastreio completo de frequências e acumuladores. |
| **25** | **B** | Comparação de consumo de memória de pilha: LSD (iterativo) vs MSD (recursivo). |

---

### Justificativas Técnicas Selecionadas

* **Questão 07:** As frequências simples são: chave 1 (1 vez), chave 2 (0 vezes), chave 3 (2 vezes), chave 4 (2 vezes).  
  As somas acumuladas são:  
  * C[1] = 1  
  * C[2] = 1 + 0 = 1  
  * C[3] = 1 + 2 = 3  
  * C[4] = 3 + 2 = 5.  
  Logo, C = [1, 1, 3, 5] (Alternativa A).

* **Questão 11:** Para valores até n^2 - 1, usando base b = n, qualquer número necessita de no máximo d = \log_n(n^2) = 2 dígitos. A complexidade do Radix Sort passa a ser Θ(d(n + b)) = \Theta(2(n + n)) = \Theta(n), superando o limite Ω(n \log n) sem a explosão de memória que o Counting Sort puro causaria se alocasse n^2 posições.

* **Questão 13 e 14:**  
  * Unidades de [170, 45, 75, 90, 802, 24, 2, 66]:  
    Terminados em 0: 170, 90  
    Terminados em 2: 802, 2  
    Terminados em 4: 24  
    Terminados em 5: 45, 75  
    Terminados em 6: 66  
    Resultado 1ª passada: [170, 90, 802, 2, 24, 45, 75, 66].  
  * Dezenas de [170, 90, 802, 2, 24, 45, 75, 66]:  
    Dezena 0: 802, 2  
    Dezena 2: 24  
    Dezena 4: 45  
    Dezena 6: 66  
    Dezena 7: 170, 75  
    Dezena 9: 90  
    Resultado 2ª passada: [802, 2, 24, 45, 66, 170, 75, 90].

* **Questão 24:** Vetor A = [2, 0, 2, 1, 4, 1, 0, 2].  
  Contagem: C[0]=2, C[1]=2, C[2]=3, C[3]=0, C[4]=1.  
  Acumulados:  
  * C[0] = 2  
  * C[1] = 2 + 2 = 4  
  * C[2] = 4 + 3 = 7  
  * C[3] = 7 + 0 = 7  
  * C[4] = 7 + 1 = 8.  
  Vetor resultante: [2, 4, 7, 7, 8] (Alternativa A).
