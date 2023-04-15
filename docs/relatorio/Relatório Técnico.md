# Informações do Projeto
`TÍTULO DO PROJETO`  

VY Finanças

`CURSO` 

Ciência da Computação

## Participantes

Vinícius Miranda de Araújo e Yago Almeida

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## FIM - SPRINT 1 #############**](#-fim---sprint-1-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Com a era da informação, junto com o capitalismo, o ser humano passou a produzir mais do que devia e a gastar mais do que recebe. O planejamento financeiro permite uma melhor organização das finanças, evitando desperdícios e gastos desnecessários. Com isso, é possível economizar e investir em objetivos futuros.

Além disso, o controle financeiro diminui o risco de ter dívidas e inadimplência. Quando se tem um planejamento financeiro, é possível verificar as despesas mensais e adequá-las à renda disponível, evitando gastos que ultrapassem o orçamento. Isso também ajuda a evitar o endividamento, que pode levar a juros altos e até mesmo à negativação do nome.

Portanto, o controle financeiro também pode trazer mais tranquilidade e segurança para o indivíduo. Saber que se tem um planejamento financeiro bem estruturado traz mais estabilidade emocional, reduzindo a ansiedade em relação ao futuro e trazendo mais confiança para tomar decisões importantes. Dessa forma, é possível viver com mais qualidade de vida e aproveitar as oportunidades que a vida oferece, sem se preocupar excessivamente com questões financeiras.


## Objetivos

O objetivo do nosso projeto é desenvolver um site em que a pessoa coloque seus dados e a partir deles podemos guià-la em como gastar o dinheiro da melhor forma, fazendo um rastreamento de gastos, evitando gastos em coisas desnecessárias e ajudar a não pagar atrasado ao notificar vencimento, indicar possíveis investimentos e ajudar a gerir os cartôes de crédito.

## Justificativa

A nossa motivação veio devido ao fato de vermos tantos amigos e conhecidos com muitos problemas financeiros e foi a partir daí que surgiu a vontade e ideia de trabalhar nessa aplicação, queremos fazer com que todos possam se organizar da melhor maneira possível independente de qualquer coisa, isto é, mesmo sem ter tido oportunidade de aprender sobre gestão financeira ou de não ter sido ensinado para a pessoa.

Uma matéria da BBC News Brasil, divulgada em fevereiro de 2023, cita que em 2022, 78 de 100 famílias brasileiras estão endividadas, além de que esse percentual teve um aumento desde o ano de 2020. Um agravante dessa situação é a taxa básica de juros que está em 13,75% – nível que tem sido motivo de embates entre o governo e o Banco Central.

Izis Ferreira, economista da CNC, afirma que três fatores contribuíram para esse recorde de endividamento em 2022: a alta da inflação até a metade do ano, que corroeu o poder de compra das famílias; o incentivo crescente ao uso do cartão de crédito, através da oferta de novos produtos e serviços por bancos e fintechs; e, para os mais ricos, a demanda represada por serviços, como viagens e compra de passagens aéreas, geralmente pagos no cartão.


## Público-Alvo

 O nosso público-alvo são principalmente os jovens adultos, ou seja, pessoas entre 20 a 30 anos aproximadamente, isso por que dado observações pôde-se concluir que este é um grupo que mais encontra pessoas com dívidas e dificuldades de se planejar, organizar-se financeiramente e, também, por ter uma maior facilidade com a tecnologia. Apesar disso, o produto que desenvolveremos poderá ser utilizado por qualquer pessoa de qualquer idade, pois não queremos ficar tão restritos e poder ajudar à todos nessa dificuldade que é se organizar.
 
# Especificações do Projeto

O projeto aborda nossa pesquisa para rastrear o cliente e compreender suas dores para que possamos ajudá-las. Além disso, mostra os requisitos funcionais e não-funicionais do projeto, isto é, uma classificação das nossas ideias para nos organizar e manter alinhados.

Ademais, este documento apresenta o wireframe do projeto mostrando todo o fluxo de telas que o usuário ouderá fazer e, também, mostra a metodologia utilizada assim como as ferramentas uitlizadas.

## Personas, Empatia e Proposta de Valor

Persona 1:

![Persona 1](images/persona1.png) 

Persona 2:

![Persona 2](images/persona2.png)

Persona 3:

![Persona 3](images/persona3.png)

Proposta de Valor:

![Proposta de Valor](images/proposta-de-valor.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Estudante | Pagamentos Automáticos | Não esquecer de pagar a fatura |
| Estagiário | Economizar | Comprar uma casa, um carro |
| Trabalhador | Controlar os gastos | Não gastar em coisas desnecessárias |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Registro de dados do usuário | ALTA |
|RF-002| Criação de um orçamento mensal personalizado para o usuário com base em seus dados financeiros | ALTA |
|RF-003| Rastreamento de gastos e receitas em tempo real | ALTA |
|RF-004| Notificação ao usuário sobre vencimento de prazos, incluindo datas de pagamento de contas, faturas e outras obrigações financeiras| ALTA |
|RF-005| Gerenciamento de cartão de crédito, incluindo notificações de vencimento da fatura e limites de crédito| ALTA |
|RF-006| Programação de pagamentos automáticos com base nos dados fornecidos pelo usuário| ALTA |
|RF-007| Possibilidade de categorização de despesas e receitas para análise e relatórios.| ALTA |
|RF-008| Recomendação de Investimentos | MÉDIA |
|RF-009| Acompanhamento de Investimentos | MÉDIA |
|RF-010| Gerenciamento de Orçamento Compartilhado | MÉDIA |
|RF-011| Comunidade de Usuários | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA |
|RNF-002| Segurança: proteção dos dados do usuário, incluindo informações financeiras e bancárias | ALTA |
|RNF-003| Confiabilidade: garantia de que o aplicativo estará disponível e funcional quando necessário | ALTA |
|RNF-004| Usabilidade: interface de usuário intuitiva e fácil de usar | ALTA |
|RNF-005| Performance: tempo de resposta rápido e sem atrasos no processamento de dados | ALTA |
|RNF-006| Escalabilidade: capacidade de lidar com um grande número de usuários e grande volume de dados | MÉDIA |
|RNF-007| Interoperabilidade: capacidade de se integrar com outros sistemas ou aplicativos, como bancos ou serviços de pagamento online | ALTA |
|RNF-008| Personalização: permitir que os usuários personalizem a aparência e as configurações do aplicativo de acordo com suas preferências| MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

Nós utilizamos o método Scrum, divindo o nosso projeto em 4 Sprints e fazemos reuniões diárias para discurtir o que fizemos e o que vamos fazer. Então, dado que o somos apenas duas pessoas no projeto, dividimos as tarefas meio a meio de modo que nenhuma das partes fique sobrecarregada e que seja possível realizar as funções da melhor maneira posível.

Além disso, em relação as ferramentas, utilizamos as ferramentas sugeridas pelos nossos mentores, são elas: o [Miro](https://miro.com), o [GitHub](https://github.com) e o [Figma](https://www.figma.com).


## Divisão de Papéis

- Vinícius: responsável por fazer o miro e o github;
- Yago: responsável por fazer o relatório técnico e a apresentação.

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVMYJ6j-0=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-g03-planejamento-financeiro-2.git | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/xyPMNUrVjz6LACIxQUbLMB/WireFrames?node-id=0-1&t=oIa1F5NRXNfNV29j-0 | 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório `upstream`.
 
O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software
 
Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:
 
- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

# **############## FIM - SPRINT 1 #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Notícia da BBC Brasil](https://www.bbc.com/portuguese/articles/c257e50r9rlo)
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)