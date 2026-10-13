// Conteúdo institucional da página inicial.
// Regra editorial: nada aqui deve descrever como disponível o que ainda é
// visão ou roadmap, nem citar clientes, parceiros, números ou resultados.

export const hero = {
  eyebrow: 'Plataforma digital para negócios de tecnologia',
  title: 'Tecnologia para quem constrói o futuro.',
  lead: 'Uma plataforma digital para empresas de tecnologia, startups e organizações que impulsionam a inovação.',
  audiencesLabel: 'Pensada para',
  audiences: ['Startups', 'Empresas de tecnologia', 'Polos e hubs de inovação', 'Aceleradoras'],
};

export const vision = {
  title: 'Todo negócio digital precisa resolver a mesma base antes de cuidar do que o torna único.',
  paragraphs: [
    'Cobrar, gerenciar assinaturas, integrar sistemas, crescer. São problemas conhecidos, mas cada empresa acaba resolvendo tudo de novo, com tempo e pessoas que deveriam estar dedicados ao próprio produto.',
    'A SmartNinja está sendo construída para ser essa base: uma plataforma digital que acompanhe um negócio digital desde a primeira versão até a expansão.',
  ],
  // Comparação visual da seção. Os dois parágrafos acima acompanham, na ordem,
  // os dois cenários. As responsabilidades do primeiro são as que o primeiro
  // parágrafo cita; as do segundo vêm de platform.areas.
  comparison: {
    product: 'Produto da empresa',
    own: {
      label: 'Infraestrutura própria',
      items: ['Cobrar', 'Gerenciar assinaturas', 'Integrar sistemas', 'Crescer'],
      caption: 'Construída e mantida pela própria empresa',
    },
    shared: {
      label: 'Com a SmartNinja',
      link: 'integração',
      caption: 'Base SmartNinja, em construção',
    },
  },
  stages: [
    {
      name: 'Construir',
      text: 'Reduzir o que precisa ser desenvolvido do zero para colocar um negócio digital de pé.',
    },
    {
      name: 'Operar',
      text: 'Dar sustentação ao dia a dia: receita recorrente, assinaturas e integrações funcionando juntas.',
    },
    {
      name: 'Expandir',
      text: 'Apoiar o crescimento sem exigir a troca da fundação a cada nova fase.',
    },
  ],
};

export const audiences = {
  title: 'Para quem a plataforma está sendo pensada.',
  note: 'São os públicos que orientam a construção da SmartNinja, não uma lista de clientes ou parceiros.',
  items: [
    {
      name: 'Startups',
      text: 'Um time pequeno rende mais quando se concentra no que diferencia o produto, em vez de reconstruir cobrança, assinaturas e integrações.',
    },
    {
      name: 'Empresas de tecnologia',
      text: 'Negócios em operação precisam de uma plataforma que acompanhe novos produtos e novos modelos de receita sem reescrever o que já funciona.',
    },
    {
      name: 'Polos tecnológicos e hubs de inovação',
      text: 'Ecossistemas que reúnem muitas empresas ganham quando elas partem de uma base tecnológica comum, em vez de resolver os mesmos problemas isoladamente.',
    },
    {
      name: 'Aceleradoras',
      text: 'Programas de apoio ao empreendedorismo têm prazo curto. Uma plataforma comum pode encurtar o caminho entre a ideia validada e um negócio capaz de operar.',
    },
  ],
};

export const platform = {
  title: 'Uma plataforma SaaS, construída por áreas.',
  lead: 'A visão é uma plataforma digital única para negócios de tecnologia. As áreas abaixo mostram para onde o desenvolvimento aponta: fazem parte da visão do produto, não de um catálogo de funcionalidades disponíveis.',
  areasLabel: 'Áreas de desenvolvimento',
  baseLabel: 'Base SmartNinja',
  baseStatus: 'em construção',
  areas: [
    {
      name: 'Billing e assinaturas',
      text: 'Planos, ciclos de cobrança e a gestão de quem assina.',
    },
    {
      name: 'Pagamentos recorrentes',
      text: 'Receita recorrente tratada como parte da operação, não como um projeto paralelo.',
    },
    {
      name: 'APIs',
      text: 'Interfaces para conectar a plataforma aos sistemas que cada negócio já utiliza.',
    },
    {
      name: 'Growth',
      text: 'Funcionalidades de apoio à aquisição e à expansão de negócios digitais.',
    },
  ],
};

export const approach = {
  title: 'Tecnologia aplicada ao trabalho de construir e expandir negócios.',
  // Rótulos do diagrama de integração. As letras A, B e C do diagrama seguem a
  // ordem de `principles`; os nomes das áreas vêm de platform.areas.
  flow: {
    clientLabel: 'Empresa',
    product: 'Produto da empresa',
    systems: 'Sistemas que o negócio já utiliza',
    link: 'Os dois se ligam à base por meio das APIs.',
    baseLabel: 'Base SmartNinja, em construção',
    ai: 'Inteligência artificial',
    aiStatus: 'adiante',
  },
  principles: [
    {
      name: 'A base vem primeiro',
      text: 'Antes de novas camadas, a fundação operacional: o que todo negócio digital precisa para existir e gerar receita.',
    },
    {
      name: 'Feita para integrar',
      text: 'Uma plataforma útil convive com o que a empresa já usa. Por isso as APIs fazem parte da visão desde o início.',
    },
    {
      name: 'Inteligência artificial com função',
      text: 'A IA faz parte da direção futura do produto, aplicada onde reduz trabalho real, e não como rótulo.',
    },
  ],
};

export const direction = {
  title: 'Para onde a SmartNinja está indo.',
  text: 'A direção é uma só: reunir em uma única plataforma o que um negócio de tecnologia precisa para ser construído, operado e expandido.',
  horizons: [
    {
      label: 'Em construção',
      name: 'A base da plataforma',
      text: 'Billing, assinaturas, pagamentos recorrentes, APIs e growth: as áreas que concentram o desenvolvimento atual.',
    },
    {
      label: 'Adiante',
      name: 'Criação de páginas com assistência de inteligência artificial',
      text: 'Uma evolução prevista para depois da base da plataforma, ainda sem data definida.',
    },
  ],
};

export const contact = {
  title: 'Vamos conversar.',
  text: 'Se você constrói ou apoia negócios de tecnologia e quer acompanhar o desenvolvimento da SmartNinja, escreva para nós.',
  pending: 'O canal de contato institucional está sendo configurado.',
};
