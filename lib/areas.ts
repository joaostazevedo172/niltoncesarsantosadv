// As 16 áreas de atuação do site antigo, agora com conteúdo próprio.
// Texto informativo, sem promessa de resultado, preço ou captação (Provimento OAB 205/2021).

export type Area = {
  slug: string; // mesmo slug do site antigo (as URLs antigas redirecionam para cá)
  titulo: string;
  icone: string;
  termo: string; // como as pessoas buscam no Google ("advogado criminal")
  resumo: string;
  intro: string[];
  servicos: string[];
  perguntas: { p: string; r: string }[];
};

export const areas: Area[] = [
  {
    slug: "civel",
    titulo: "Direito Cível",
    icone: "Scale",
    termo: "advogado cível",
    resumo: "Contratos, cobranças, indenizações e conflitos entre pessoas e empresas, do acordo extrajudicial à ação na Justiça.",
    intro: [
      "O Direito Cível cuida das relações do dia a dia entre pessoas e empresas: contratos, dívidas, danos materiais e morais, responsabilidade civil e conflitos de vizinhança.",
      "O atendimento começa pela análise dos documentos e da história do caso. A partir daí, o escritório indica se vale tentar uma solução negociada ou se o caminho é a ação judicial.",
    ],
    servicos: [
      "Elaboração e revisão de contratos",
      "Ações de indenização por danos materiais e morais",
      "Cobrança e execução de dívidas",
      "Defesa em ações cíveis",
      "Notificações extrajudiciais e acordos",
      "Responsabilidade civil e conflitos de vizinhança",
    ],
    perguntas: [
      { p: "Quanto tempo tenho para entrar com uma ação de indenização?", r: "Em regra, o prazo para pedir reparação civil é de três anos a partir do fato, mas há exceções. Por isso é importante buscar orientação logo." },
      { p: "Preciso de advogado para tentar um acordo?", r: "Não é obrigatório, mas a orientação jurídica ajuda a medir riscos e a redigir um acordo que de fato proteja os seus direitos." },
      { p: "Que documentos levar na primeira conversa?", r: "Contratos, comprovantes de pagamento, mensagens, fotos e qualquer registro que ajude a contar o que aconteceu, em ordem de data." },
    ],
  },
  {
    slug: "recuperacao-judicial",
    titulo: "Recuperação Judicial",
    icone: "TrendingUp",
    termo: "advogado de recuperação judicial",
    resumo: "Assessoria a empresas em crise financeira e a credores, da avaliação de viabilidade ao acompanhamento do plano.",
    intro: [
      "A recuperação judicial é o instrumento da Lei 11.101/2005 que permite a uma empresa em dificuldade reorganizar dívidas e continuar funcionando, sob supervisão da Justiça.",
      "O escritório atua tanto para a empresa devedora, na preparação do pedido e do plano, quanto para credores que precisam habilitar e defender os seus créditos.",
    ],
    servicos: [
      "Diagnóstico jurídico da situação da empresa",
      "Pedido de recuperação judicial e extrajudicial",
      "Elaboração e negociação do plano de recuperação",
      "Habilitação e impugnação de créditos",
      "Representação em assembleia de credores",
      "Atuação em falências",
    ],
    perguntas: [
      { p: "Qualquer empresa pode pedir recuperação judicial?", r: "A lei exige, entre outros requisitos, atividade regular há mais de dois anos. A análise de viabilidade é feita caso a caso." },
      { p: "A recuperação suspende as cobranças?", r: "Com o deferimento do processamento, as execuções contra a empresa ficam suspensas por um período previsto em lei, com algumas exceções." },
      { p: "Sou credor de uma empresa em recuperação. O que fazer?", r: "Conferir se o seu crédito está na lista do administrador judicial e, se não estiver ou estiver errado, apresentar habilitação ou divergência no prazo." },
    ],
  },
  {
    slug: "propriedade-intelectual",
    titulo: "Propriedade Intelectual",
    icone: "Lightbulb",
    termo: "advogado de propriedade intelectual",
    resumo: "Registro e proteção de marcas, direitos autorais, softwares e patentes, com defesa contra uso indevido.",
    intro: [
      "Marca, nome, criação artística, software e invenção são patrimônio. A Propriedade Intelectual garante que só quem tem o direito possa explorá-los.",
      "O escritório acompanha o registro no INPI, monitora conflitos e atua quando terceiros copiam ou usam sem autorização o que pertence ao cliente.",
    ],
    servicos: [
      "Registro de marcas no INPI",
      "Oposições e recursos administrativos",
      "Proteção de direitos autorais",
      "Contratos de licença e cessão",
      "Ações contra contrafação e concorrência desleal",
      "Proteção de software e segredo de negócio",
    ],
    perguntas: [
      { p: "Ter CNPJ protege o nome da minha empresa?", r: "Não por completo. O registro da marca no INPI é o que garante o uso exclusivo do nome para os produtos ou serviços registrados." },
      { p: "Quanto tempo vale um registro de marca?", r: "Dez anos a partir da concessão, prorrogáveis por períodos iguais e sucessivos." },
      { p: "Copiaram o meu trabalho na internet. O que fazer?", r: "Guardar provas (prints com data e endereço da página) e buscar orientação para notificar o responsável ou pedir a retirada na Justiça." },
    ],
  },
  {
    slug: "direito-societario",
    titulo: "Direito Societário",
    icone: "Handshake",
    termo: "advogado societário",
    resumo: "Abertura de empresas, contratos sociais, acordos de sócios, reorganizações e solução de conflitos societários.",
    intro: [
      "Uma sociedade bem estruturada evita boa parte dos conflitos futuros. O Direito Societário define como os sócios entram, decidem, dividem resultados e saem.",
      "O escritório redige e revisa os documentos da empresa e atua quando a relação entre sócios chega a um impasse.",
    ],
    servicos: [
      "Constituição de sociedades e escolha do tipo societário",
      "Contratos sociais e alterações",
      "Acordos de sócios e de quotistas",
      "Entrada, saída e exclusão de sócios",
      "Fusões, cisões e incorporações",
      "Dissolução e apuração de haveres",
    ],
    perguntas: [
      { p: "Por que fazer um acordo de sócios?", r: "Ele define regras para situações que o contrato social não detalha, como venda de quotas, morte de sócio e resolução de impasses." },
      { p: "Um sócio pode ser excluído da empresa?", r: "Em certos casos previstos em lei e no contrato, sim, desde que seguido o procedimento correto." },
      { p: "Qual tipo de empresa abrir?", r: "Depende do número de sócios, da atividade e do regime tributário. A escolha deve ser feita junto com o contador." },
    ],
  },
  {
    slug: "contencioso-tributario",
    titulo: "Contencioso Tributário",
    icone: "Receipt",
    termo: "advogado tributarista",
    resumo: "Defesa em autuações fiscais, execuções fiscais e ações para discutir tributos cobrados indevidamente.",
    intro: [
      "O contencioso tributário reúne as disputas com o Fisco municipal, estadual e federal, na esfera administrativa e na judicial.",
      "O escritório analisa autos de infração, cobranças e execuções fiscais e avalia a possibilidade de recuperar valores pagos a mais.",
    ],
    servicos: [
      "Defesas e recursos contra autos de infração",
      "Embargos à execução fiscal",
      "Exceção de pré-executividade",
      "Mandado de segurança em matéria tributária",
      "Ações de repetição de indébito",
      "Acompanhamento de parcelamentos e transações",
    ],
    perguntas: [
      { p: "Recebi um auto de infração. Qual o prazo para me defender?", r: "Os prazos variam conforme o ente que autuou, em geral entre 20 e 30 dias. Vale verificar a data da intimação o quanto antes." },
      { p: "Dá para recuperar imposto pago a mais?", r: "Em regra, é possível pedir a restituição dos últimos cinco anos, por via administrativa ou judicial." },
      { p: "Execução fiscal pode bloquear minha conta?", r: "Sim, o bloqueio de valores é possível. Há meios de defesa, e alguns valores, como salário até certo limite, são protegidos." },
    ],
  },
  {
    slug: "direito-administrativo",
    titulo: "Direito Administrativo",
    icone: "Landmark",
    termo: "advogado de direito administrativo",
    resumo: "Licitações, contratos públicos, servidores e processos administrativos, com experiência como procurador municipal.",
    intro: [
      "O Direito Administrativo regula a relação entre cidadãos, empresas e o poder público. Dr. Nilton foi procurador ou assessor jurídico de quatro municípios fluminenses, o que dá a ele a visão dos dois lados da mesa.",
      "O escritório atende empresas que contratam com a administração, servidores públicos e cidadãos em processos administrativos.",
    ],
    servicos: [
      "Licitações e contratos administrativos",
      "Impugnações e recursos em licitações",
      "Direitos de servidores públicos",
      "Processos administrativos disciplinares",
      "Assessoria jurídica a municípios",
      "Improbidade administrativa",
    ],
    perguntas: [
      { p: "Posso questionar o resultado de uma licitação?", r: "Sim. A Lei 14.133/2021 prevê recursos administrativos com prazos curtos, além da via judicial." },
      { p: "Servidor tem direito a defesa em processo disciplinar?", r: "Sempre. O processo administrativo disciplinar exige contraditório e ampla defesa." },
      { p: "O escritório atende prefeituras?", r: "Sim, com assessoria e consultoria jurídica a municípios, nos termos da legislação aplicável." },
    ],
  },
  {
    slug: "direito-ambiental",
    titulo: "Direito Ambiental",
    icone: "Leaf",
    termo: "advogado ambiental",
    resumo: "Licenciamento, defesa em autos de infração ambiental e regularização de imóveis em áreas protegidas.",
    intro: [
      "Na Região dos Lagos, com áreas de preservação, restinga e orla, o Direito Ambiental está presente em obras, imóveis e empreendimentos turísticos.",
      "O escritório orienta no licenciamento e atua na defesa de pessoas e empresas autuadas por órgãos ambientais.",
    ],
    servicos: [
      "Licenciamento ambiental",
      "Defesa em autos de infração ambiental",
      "Regularização de imóveis em APP e áreas protegidas",
      "Termos de ajustamento de conduta",
      "Responsabilidade civil e criminal ambiental",
      "Consultoria para empreendimentos",
    ],
    perguntas: [
      { p: "Fui multado por um órgão ambiental. Posso recorrer?", r: "Sim. O auto de infração admite defesa administrativa dentro do prazo indicado na notificação." },
      { p: "Posso construir perto da praia ou de uma lagoa?", r: "Depende das regras de área de preservação, do plano diretor do município e do licenciamento. A análise prévia evita embargos." },
      { p: "O que é um TAC?", r: "Termo de ajustamento de conduta: um acordo com o órgão público para corrigir uma irregularidade dentro de prazos e condições definidos." },
    ],
  },
  {
    slug: "direito-eleitoral",
    titulo: "Direito Eleitoral",
    icone: "Vote",
    termo: "advogado eleitoral",
    resumo: "Assessoria a candidatos, partidos e coligações: registro, prestação de contas, propaganda e ações eleitorais.",
    intro: [
      "O Direito Eleitoral tem prazos curtos e regras que mudam a cada eleição. Uma falha no registro ou na prestação de contas pode custar a candidatura.",
      "O escritório acompanha candidatos e partidos antes, durante e depois do período eleitoral.",
    ],
    servicos: [
      "Registro de candidatura e impugnações",
      "Prestação de contas de campanha",
      "Orientação sobre propaganda eleitoral",
      "Representações e direitos de resposta",
      "Ações de investigação judicial eleitoral",
      "Assessoria a partidos políticos",
    ],
    perguntas: [
      { p: "Quando devo procurar um advogado eleitoral?", r: "Antes da pré-campanha. Muitas regras de propaganda e arrecadação valem desde antes do registro." },
      { p: "Prestação de contas é obrigatória mesmo sem gastos?", r: "Sim. Candidatos e partidos devem prestar contas, ainda que não tenham movimentado recursos." },
      { p: "Posso pedir direito de resposta?", r: "Sim, quando houver ofensa ou informação sabidamente inverídica, nos prazos curtos da legislação eleitoral." },
    ],
  },
  {
    slug: "criminal",
    titulo: "Direito Criminal",
    icone: "Gavel",
    termo: "advogado criminal",
    resumo: "Defesa em inquéritos e processos criminais, audiências de custódia, prisões, recursos e habeas corpus.",
    intro: [
      "Toda pessoa tem direito a uma defesa técnica, desde a fase de investigação até o último recurso. Quanto antes o advogado entra, mais caminhos existem.",
      "O escritório atua na defesa em inquéritos policiais, processos criminais e no acompanhamento de vítimas como assistente de acusação.",
    ],
    servicos: [
      "Acompanhamento em delegacia e inquérito policial",
      "Audiência de custódia e pedidos de liberdade",
      "Habeas corpus",
      "Defesa em processos criminais e no Tribunal do Júri",
      "Recursos em todas as instâncias",
      "Assistência à acusação",
    ],
    perguntas: [
      { p: "Fui intimado a depor na delegacia. Preciso de advogado?", r: "É recomendável. O advogado orienta sobre os seus direitos, incluindo o de permanecer em silêncio, e acompanha o depoimento." },
      { p: "O que é audiência de custódia?", r: "É a apresentação da pessoa presa a um juiz, em até 24 horas, para avaliar a legalidade da prisão e a necessidade de mantê-la." },
      { p: "Quando cabe habeas corpus?", r: "Quando alguém sofre ou está ameaçado de sofrer restrição ilegal à liberdade de locomoção." },
    ],
  },
  {
    slug: "direito-desportivo-e-do-entretenimento",
    titulo: "Direito Desportivo e do Entretenimento",
    icone: "Trophy",
    termo: "advogado de direito desportivo",
    resumo: "Contratos de atletas, clubes, artistas e eventos, direito de imagem e atuação na Justiça Desportiva.",
    intro: [
      "Atletas, clubes, artistas e produtores lidam com contratos de imagem, patrocínio, cessão de direitos e regras próprias das entidades esportivas.",
      "O escritório redige e revisa esses contratos e representa clientes na Justiça Desportiva e na comum.",
    ],
    servicos: [
      "Contratos de atletas e de comissão técnica",
      "Contratos de imagem e patrocínio",
      "Atuação na Justiça Desportiva",
      "Contratos de shows, eventos e produções",
      "Cessão de direitos artísticos",
      "Disputas entre clubes, atletas e agentes",
    ],
    perguntas: [
      { p: "O que é a Justiça Desportiva?", r: "É o sistema de tribunais das entidades esportivas que julga infrações disciplinares e questões de competição." },
      { p: "Contrato de imagem é diferente do contrato de trabalho do atleta?", r: "Sim. São contratos distintos, com regras e limites próprios na Lei Geral do Esporte." },
      { p: "Vou fazer um evento. Que contratos preciso?", r: "Em geral, contratos com artistas, fornecedores, local e patrocinadores, além das licenças exigidas pelo município." },
    ],
  },
  {
    slug: "direito-do-consumidor",
    titulo: "Direito do Consumidor",
    icone: "ShoppingBag",
    termo: "advogado do consumidor",
    resumo: "Cobranças indevidas, produtos com defeito, negativação irregular, planos e serviços que não cumprem o contratado.",
    intro: [
      "O Código de Defesa do Consumidor protege quem compra produtos e contrata serviços. Muitos problemas se resolvem com uma notificação bem feita; outros exigem ação judicial.",
      "O escritório atende consumidores e também orienta empresas a cumprir a lei e evitar conflitos.",
    ],
    servicos: [
      "Cobranças e negativações indevidas",
      "Produtos com defeito e vícios de serviço",
      "Problemas com companhias aéreas e viagens",
      "Contratos com cláusulas abusivas",
      "Ações em Juizados Especiais",
      "Consultoria para empresas sobre o CDC",
    ],
    perguntas: [
      { p: "Meu nome foi negativado sem dívida. O que fazer?", r: "Reunir os comprovantes e buscar orientação. A negativação indevida pode gerar a retirada do registro e indenização." },
      { p: "Qual o prazo para reclamar de um defeito?", r: "Em regra, 30 dias para produtos não duráveis e 90 dias para duráveis, contados da entrega ou de quando o defeito aparece." },
      { p: "Posso desistir de uma compra feita pela internet?", r: "Sim, em até sete dias do recebimento, com devolução dos valores pagos." },
    ],
  },
  {
    slug: "direito-sucessorio-e-familia",
    titulo: "Direito de Família e Sucessões",
    icone: "Users",
    termo: "advogado de família",
    resumo: "Divórcio, guarda, pensão alimentícia, união estável, inventário, testamento e planejamento sucessório.",
    intro: [
      "Questões de família pedem técnica e cuidado com as pessoas envolvidas. Sempre que possível, o escritório busca soluções consensuais.",
      "Na área de sucessões, o trabalho vai do inventário, judicial ou em cartório, ao planejamento que organiza a transmissão do patrimônio em vida.",
    ],
    servicos: [
      "Divórcio consensual e litigioso",
      "Guarda, convivência e pensão alimentícia",
      "Reconhecimento e dissolução de união estável",
      "Inventário judicial e extrajudicial",
      "Testamentos e doações",
      "Planejamento sucessório",
    ],
    perguntas: [
      { p: "Dá para fazer divórcio em cartório?", r: "Sim, quando é consensual e observados os requisitos legais, com a assistência obrigatória de advogado." },
      { p: "Qual o prazo para abrir o inventário?", r: "Dois meses a partir do falecimento. O atraso pode gerar multa sobre o imposto de transmissão, conforme o estado." },
      { p: "A pensão alimentícia pode ser revista?", r: "Sim, quando muda a necessidade de quem recebe ou a possibilidade de quem paga." },
    ],
  },
  {
    slug: "direito-imobiliario-notarial-e-registral",
    titulo: "Direito Imobiliário, Notarial e Registral",
    icone: "House",
    termo: "advogado imobiliário",
    resumo: "Compra e venda, regularização, usucapião, locações, condomínios e questões de cartório e registro de imóveis.",
    intro: [
      "Em cidades turísticas como Búzios, imóveis mudam de mãos com frequência e muitos têm documentação incompleta. Uma análise antes de assinar evita prejuízos.",
      "O escritório atua em negociações, regularizações e conflitos envolvendo imóveis, cartórios de notas e registro de imóveis.",
    ],
    servicos: [
      "Análise de documentação e due diligence de imóveis",
      "Contratos de compra e venda e promessas",
      "Usucapião judicial e extrajudicial",
      "Regularização fundiária e de registros",
      "Locações residenciais, comerciais e por temporada",
      "Condomínios e conflitos de vizinhança",
    ],
    perguntas: [
      { p: "O que verificar antes de comprar um imóvel?", r: "Matrícula atualizada, certidões do vendedor e do imóvel, débitos de IPTU e condomínio e a situação junto à prefeitura." },
      { p: "Usucapião pode ser feita em cartório?", r: "Sim, a usucapião extrajudicial é possível quando preenchidos os requisitos e não há oposição." },
      { p: "Aluguel por temporada tem regras próprias?", r: "Sim. A Lei do Inquilinato limita a temporada a 90 dias, e a convenção do condomínio também pode trazer regras." },
    ],
  },
  {
    slug: "direito-de-saude",
    titulo: "Direito da Saúde",
    icone: "HeartPulse",
    termo: "advogado de direito à saúde",
    resumo: "Negativas de planos de saúde, reajustes abusivos, acesso a medicamentos e tratamentos pelo SUS.",
    intro: [
      "Quando um plano de saúde nega uma cirurgia ou o poder público não fornece um medicamento, o tempo importa. O Direito da Saúde trata desses casos.",
      "O escritório analisa contratos, laudos e negativas e, quando cabível, pede à Justiça decisões urgentes.",
    ],
    servicos: [
      "Negativas de cobertura de planos de saúde",
      "Reajustes abusivos por faixa etária e coletivos",
      "Fornecimento de medicamentos e tratamentos pelo SUS",
      "Home care e internações",
      "Cancelamento indevido de planos",
      "Pedidos de tutela de urgência",
    ],
    perguntas: [
      { p: "O plano negou um procedimento. O que faço?", r: "Pedir a negativa por escrito, guardar o laudo médico e buscar orientação. Muitas negativas podem ser questionadas." },
      { p: "Posso pedir medicamento ao poder público?", r: "Em certas condições, sim, inclusive na Justiça, com laudo médico que justifique a necessidade." },
      { p: "Reajuste do plano pode ser contestado?", r: "Reajustes que fogem às regras da ANS ou do contrato podem ser discutidos." },
    ],
  },
  {
    slug: "direito-de-telecomunicacoes",
    titulo: "Direito de Telecomunicações",
    icone: "RadioTower",
    termo: "advogado de telecomunicações",
    resumo: "Assessoria a provedores e empresas do setor e defesa de usuários em conflitos com operadoras.",
    intro: [
      "O setor de telecomunicações é regulado pela Anatel e tem regras próprias de outorga, prestação de serviço e direitos dos usuários.",
      "O escritório assessora provedores de internet e empresas do setor e atende usuários em disputas com operadoras.",
    ],
    servicos: [
      "Regularização de provedores junto à Anatel",
      "Contratos de infraestrutura e compartilhamento",
      "Defesa em processos administrativos da Anatel",
      "Direito de passagem e uso de postes",
      "Conflitos entre usuários e operadoras",
      "Consultoria regulatória",
    ],
    perguntas: [
      { p: "Provedor de internet pequeno precisa de autorização da Anatel?", r: "Depende do porte e do serviço. Alguns são dispensados de autorização, mas precisam comunicar a Anatel." },
      { p: "A operadora não cancela minha linha. O que fazer?", r: "Registrar o pedido, guardar o protocolo e, se não resolver, reclamar na Anatel e buscar orientação jurídica." },
      { p: "Quem regula o uso de postes por provedores?", r: "Há regras conjuntas da Anatel e da Aneel sobre compartilhamento de infraestrutura." },
    ],
  },
  {
    slug: "direito-bancario",
    titulo: "Direito Bancário",
    icone: "Banknote",
    termo: "advogado bancário",
    resumo: "Revisão de contratos, juros abusivos, superendividamento, fraudes e golpes bancários e defesa em execuções.",
    intro: [
      "Contratos bancários costumam ser longos e difíceis de ler. Juros, tarifas e seguros embutidos podem ser revistos quando fogem da lei ou do contratado.",
      "O escritório atende pessoas e empresas em revisões, renegociações, defesas em execuções e casos de fraude.",
    ],
    servicos: [
      "Revisão de contratos e juros",
      "Superendividamento e renegociação",
      "Fraudes, golpes e transações não reconhecidas",
      "Defesa em execuções e buscas e apreensões",
      "Tarifas e seguros cobrados indevidamente",
      "Empréstimos consignados irregulares",
    ],
    perguntas: [
      { p: "Caí em um golpe via Pix. O banco tem responsabilidade?", r: "Depende do caso. Comunique o banco imediatamente, peça o MED (mecanismo de devolução) e registre boletim de ocorrência." },
      { p: "Posso revisar um financiamento de veículo?", r: "Sim, quando houver cobranças abusivas ou em desacordo com o contrato." },
      { p: "O que é a Lei do Superendividamento?", r: "É a Lei 14.181/2021, que permite renegociar o conjunto das dívidas de consumo preservando um mínimo para viver." },
    ],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
