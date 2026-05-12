export const navItems = [
  ['Qui je suis', '#presentation'],
  ['Compétences', '#competences'],
  ['Expériences', '#experiences'],
  ['Projets', '#projets'],
  ['Formation', '#formation'],
  ['Mon LEP', '#lep'],
  ['Projet pro', '#projet-pro'],
  ['Contact', '#contact'],
] as const;

export const hero = {
  name: 'Russell NSOUMBE',
  roles: [
    'Ingénieur informatique & cybersécurité',
    'Étudiant ING4 — ESAIP Angers',
    'Profil SOC, Blue Team & cloud security',
  ],
  summary:
    "Passionné par la cybersécurité défensive, l’analyse technique et la sécurité cloud-native. Je recherche un stage de 6 mois pouvant déboucher sur un CDI, dans un environnement exigeant et international.",
  focus: 'SOC, investigation, cloud security',
  availability:
    "À partir de 2026, je vise une mission longue en cybersécurité ou cloud, avec une perspective d’évolution durable après le stage.",
  stats: [
    { value: '4', label: 'expériences terrain et recherche' },
    { value: '6+', label: 'projets réalisés' },
    { value: '6', label: 'certifications et validations' },
    { value: '4', label: 'langues pratiquées' },
  ],
};

export const about = {
  intro: [
    "Étudiant en quatrième année d’ingénieur informatique à l’ESAIP Angers, je construis mon parcours autour de la cybersécurité, du cloud et de la compréhension fine des systèmes.",
    "Mon parcours est volontairement transversal : j’ai d’abord consolidé une base analytique en mathématiques, avant de me spécialiser en informatique, réseaux et cybersécurité. Cette double culture m’aide à relier rigueur, méthode et vision d’ensemble.",
    "Je m’intéresse particulièrement au SOC, à l’analyse d’artefacts, à la défense sur les environnements Windows et Linux, ainsi qu’aux sujets cloud, architecture et sécurité des systèmes d’information.",
  ],
  photoNote:
    "Photo de présentation intégrée avec un cadrage ajusté pour mieux remplir l’espace tout en gardant un rendu propre et professionnel.",
};

export const education = [
  {
    period: '2024 - aujourd’hui',
    title: 'Ingénieur informatique et réseaux — majeure cybersécurité',
    place: 'ESAIP Angers, école d’ingénieurs La Salle',
    detail: 'Cycle ingénieur, ING4 en cours',
  },
  {
    period: 'Fév. - juin 2025',
    title: 'Semestre ERASMUS — Bachelor in Computer Science',
    place: 'University of Žilina, Slovaquie',
    detail: 'Cours : Network Security, AI, Cloud Computing',
  },
  {
    period: '2020 - 2024',
    title: 'Licence Mathématiques et applications',
    place: 'Université du Mans, France',
    detail: 'Analyse, modélisation, résolution de problèmes',
  },
  {
    period: '2019 - 2020',
    title: 'Baccalauréat scientifique',
    place: 'Collège Les Conquérants, Douala, Cameroun',
    detail: 'Parcours scientifique',
  },
];

export const skillGroups = [
  {
    title: 'Sécurité & IAM',
    items: ['Active Directory', 'Azure AD', 'RBAC', 'MFA', 'SSO', 'AWS IAM', 'Zero Trust'],
  },
  {
    title: 'SOC & détection',
    items: ['Wazuh', 'rsyslog', 'Fail2ban', 'Auditd', 'IOC', 'Threat Intelligence', 'Analyse de logs'],
  },
  {
    title: 'Cloud & DevSecOps',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Trivy', 'Falco', 'Snyk'],
  },
  {
    title: 'Data & analyse',
    items: ['Power BI', 'Tableau', 'Excel avancé', 'Python', 'Pandas', 'SQL'],
  },
  {
    title: 'Développement & outils',
    items: ['Python', 'Java', 'PHP', 'React', 'Next.js', 'Git', 'Linux', 'Windows'],
  },
];

export const certifications = [
  {
    title: 'SecNumacadémie — MOOC ANSSI',
    issuer: 'ANSSI',
    status: 'Validé',
    badge: 'ANSSI',
    tone: 'cyan',
    detail: "Modules validés sur la sécurité des systèmes d’information, l’authentification, Internet et la sécurité du poste de travail.",
  },
  {
    title: 'Cisco — Network Technician Career Path',
    issuer: 'Cisco',
    status: 'Obtenu',
    badge: 'CS',
    tone: 'blue',
    detail: 'Parcours validé autour des fondamentaux réseau, de l’infrastructure et des bases opérationnelles.',
  },
  {
    title: 'Cisco — Introduction to Cybersecurity',
    issuer: 'Cisco',
    status: 'Obtenu',
    badge: 'CS',
    tone: 'blue',
    detail: 'Validation des fondamentaux cybersécurité : menaces, protection des systèmes et bonnes pratiques.',
  },
  {
    title: 'Cisco CCNA1 — Introduction to Networks Practice',
    issuer: 'Cisco',
    status: 'Obtenu',
    badge: 'CC',
    tone: 'blue',
    detail: 'Mise en pratique des bases réseau : adressage, équipements, topologies et fonctionnement des réseaux.',
  },
  {
    title: 'ISC2 Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    status: 'Examen passé',
    badge: 'CC',
    tone: 'blue',
    detail: 'Validation du socle cybersécurité orienté gouvernance, risque, sécurité réseau et opérations.',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    status: 'Préparation en cours',
    badge: 'CEH',
    tone: 'coral',
    detail: 'Montée en compétence structurée sur les approches offensives et la compréhension des attaques.',
  },
];

export const toolBadges = [
  { label: 'Wazuh', short: 'WZ', tone: 'cyan' },
  { label: 'Docker', short: 'DK', tone: 'blue' },
  { label: 'Kubernetes', short: 'K8', tone: 'blue' },
  { label: 'Power BI', short: 'BI', tone: 'mint' },
  { label: 'GitHub', short: 'GH', tone: 'slate' },
  { label: 'Linux', short: 'LX', tone: 'slate' },
  { label: 'SQL', short: 'SQL', tone: 'coral' },
  { label: 'Python', short: 'PY', tone: 'mint' },
];

export const languages = [
  'Français — natif',
  'Anglais — courant',
  'Espagnol — notions',
  'Slovaque — notions',
];

export const softSkills = [
  'Rigueur et sens du détail',
  'Gestion du stress',
  'Travail en équipe',
  'Autonomie et proactivité',
  'Adaptabilité',
  'Curiosité intellectuelle',
  'Esprit critique',
  'Communication inter-équipes',
];

export const experiences = [
  {
    title: 'Stagiaire de recherche en cybersécurité',
    company: 'University of Žilina — projet de recherche',
    period: '16 juin 2026 - 18 août 2026',
    body:
      "Sujet : analyse de techniques de privilège sur postes Windows à partir du framework MITRE ATT&CK. Le stage porte sur l’étude des traces laissées par certaines techniques, des sources de télémétrie exploitables, des opportunités de détection temps réel et des artefacts utiles en analyse post-mortem.",
    tags: ['MITRE ATT&CK', 'Windows', 'TTP', 'IoC', 'IoB', 'Télémétrie', 'Détection'],
    learn:
      "Cette expérience renforce mon positionnement sur l’analyse technique, la détection orientée endpoint et la production d’une base structurée pour la recherche et l’ingénierie de détection.",
  },
  {
    title: 'Chargé de trésorerie et de placements',
    company: 'Auxia GIE — groupe Malakoff Humanis',
    period: 'Juillet - août 2025',
    body:
      "Suivi des flux financiers via extraction et traitement de données, automatisation de reportings Power BI et contribution à la sécurité des transactions à travers la gestion des habilitations bancaires et l’application des normes ISO 27001 et RGPD.",
    tags: ['Power BI', 'SQL', 'Excel', 'ISO 27001', 'RGPD', 'Habilitations'],
    learn:
      "Cette expérience m’a montré à quel point la rigueur sur les accès et les habilitations est déjà une forme concrète de cybersécurité appliquée.",
  },
  {
    title: 'Analyste cybersécurité niveau 1',
    company: 'A-Tech Solutions',
    period: 'Juillet - septembre 2024',
    body:
      "Analyse de logs via Wazuh, qualification d’incidents, rédaction de tickets et participation à la veille cyber autour des CVE, IOC et menaces émergentes.",
    tags: ['Wazuh', 'SIEM', 'Incidents', 'Threat Intelligence', 'Veille CVE'],
    learn:
      "C’est durant ce stage SOC, obtenu après ma licence de mathématiques alors que je cherchais d’abord une voie en actuariat, que j’ai réellement développé ma passion pour la cybersécurité.",
  },
  {
    title: 'Assistant administrateur réseau',
    company: 'Groupe Roger',
    period: 'Juillet - septembre 2022',
    body:
      "Configuration de switchs Cisco, plan d’adressage IPv4 / IPv6, segmentation VLAN, ACL et création de comptes utilisateurs dans Active Directory.",
    tags: ['Cisco', 'Packet Tracer', 'VLAN', 'ACL', 'Active Directory'],
    learn:
      "Cette mission a posé mes premiers réflexes de sécurisation réseau et a confirmé mon envie d’aller plus loin vers la cybersécurité et le cloud.",
  },
];

export const projects = [
  {
    title: 'Audit de sécurité Linux',
    category: 'Audit / Blue Team',
    summary:
      "Audit complet d’un serveur Linux avec hardening, surveillance continue et comparaison avant / après via Lynis, Auditd, Wazuh et outils d’intégrité.",
    highlights: ['Lynis', 'Wazuh', 'Auditd', 'Fail2Ban', 'UFW', 'Hardening SSH'],
  },
  {
    title: 'Projet DevSecOps Kubernetes',
    category: 'Cloud Security',
    summary:
      "Sécurisation progressive d’une application cloud-native sur k3s avec CI/CD, scan d’images, RBAC minimal, NetworkPolicies et détection runtime.",
    highlights: ['Docker', 'k3s', 'Trivy', 'Falco', 'RBAC', 'NetworkPolicies'],
  },
  {
    title: 'Stratégie de sécurité conteneurisée',
    category: 'Recherche appliquée',
    summary:
      "Conception d’une défense en profondeur pour Kubernetes couvrant le build, le déploiement et le runtime avec policy-as-code et observabilité.",
    highlights: ['OPA', 'Cosign', 'kube-bench', 'Sealed Secrets', 'Prometheus'],
  },
  {
    title: 'Audit fictif PME',
    category: 'Conformité',
    summary:
      "Cartographie des risques, gouvernance des accès, exigences ISO 27001 / RGPD et plan de remédiation pour une PME fictive.",
    highlights: ['ISO 27001', 'RGPD', 'Cartographie des risques'],
  },
  {
    title: 'Environnement SOC Debian',
    category: 'Détection',
    summary:
      "Mise en place d’un mini environnement SOC avec corrélation de logs, détection de brute force SSH et documentation d’IOC.",
    highlights: ['rsyslog', 'Fail2Ban', 'SSH', 'IOC'],
  },
  {
    title: 'Base de données scolaire',
    category: 'BDD / Dev',
    summary:
      "Modélisation d’une base de données complète avec MCD, MPD, requêtes complexes, procédures stockées et gestion de privilèges.",
    highlights: ['Oracle SQL', 'PL/SQL', 'Procédures stockées'],
  },
  {
    title: 'Plateforme cloud-native de diffusion de contenu',
    category: 'Cloud Computing',
    summary:
      "Conception et déploiement d’une plateforme cloud-native sur Azure pour diffuser du contenu statique via API REST et interface web, avec automatisation CI/CD, scalabilité, observabilité et maîtrise des coûts.",
    highlights: [
      'Azure AKS',
      'Azure Blob Storage',
      'Flask',
      'Docker',
      'GitHub Actions',
      'GHCR',
      'Kubernetes',
      'Ingress NGINX',
      'Azure Monitor',
    ],
  },
  {
    title: 'Détection d’attaques dans un réseau IoT de ville intelligente',
    category: 'IoT Security',
    summary:
      "Projet de conception d’un mécanisme de détection d’attaques pour un réseau IoT hétérogène : modélisation des nœuds et des flux, scénarios d’attaques, définition de métriques de détection et analyse des performances en simulation.",
    highlights: [
      'IDS IoT',
      'Analyse de trafic',
      'Métriques de détection',
      'Déni de service',
      'Usurpation de nœuds',
      'Falsification de données',
      'Simulation',
      'Graphiques d’analyse',
    ],
  },
  {
    title: 'PSIR — Deepfakes, détection et prévention',
    category: 'Projet de recherche',
    summary:
      "Revue scientifique sur la détection et la prévention des deepfakes, avec un focus sur les limites des approches classiques face aux modèles de diffusion et sur les pistes d’amélioration pour un approfondissement expérimental.",
    highlights: [
      'GAN',
      'Modèles de diffusion',
      'CNN',
      'Transformers',
      'Benchmark',
      'Analyse bibliographique',
      'Détection d’images',
      'Prévention',
    ],
  },
  {
    title: 'Construction d’un SMSI pour une fintech',
    category: 'GRC / ISO 27001',
    summary:
      "Structuration d’un SMSI autour d’un cas fil rouge de fintech : cadrage du périmètre, cartographie des actifs, analyse de risques, choix de contrôles, gouvernance et pilotage dans une logique ISO 27001.",
    highlights: [
      'ISO 27001',
      'Analyse de risques',
      'Matrice de risques',
      'PSSI',
      'KPI sécurité',
      'Gouvernance',
      'RGPD',
      'AWS + Azure',
    ],
  },
  {
    title: 'Mini-cloud Zero Trust avec Keycloak',
    category: 'Cloud Security / Zero Trust',
    summary:
      "Construction et sécurisation d’un mini-cloud open source dans VirtualBox avec k3s, puis mise en œuvre d’une architecture Zero Trust complète : IAM centralisé, microsegmentation, proxy d’accès, observabilité et détection réseau.",
    highlights: [
      'VirtualBox',
      'Ubuntu Server',
      'k3s',
      'Keycloak',
      'OAuth2-Proxy',
      'Calico',
      'ELK',
      'Prometheus',
      'Grafana',
      'Suricata',
      'AppArmor',
      'Firejail',
      'Fail2ban',
    ],
  },
  {
    title: 'Recherche Windows — privilèges et MITRE ATT&CK',
    category: 'Projet de recherche',
    summary:
      "Analyse de techniques de privilège sur endpoints Windows à partir de MITRE ATT&CK, avec étude des artefacts, des sources de télémétrie, des IoC / IoB et des approches de détection temps réel et post-mortem.",
    highlights: [
      'MITRE ATT&CK',
      'Windows Event Logs',
      'Sysmon',
      'PowerShell Logging',
      'IoC',
      'IoB',
      'Télémétrie endpoint',
      'Rapport technique',
    ],
  },
];

export const lepItems = [
  {
    title: 'ING3 — Bénévole terrain chez COP1 Angers',
    period: '2024 - 2025',
    logo: '/images/cop1-logo.png',
    image: '/images/lep-cop1-field.jpg',
    body:
      "J’ai commencé mon engagement bénévole chez COP1 Angers en octobre 2024, pendant mon année d’ING3. L’objectif de l’association est d’aider les étudiants en situation de précarité grâce à des distributions alimentaires et de produits d’hygiène, dans une organisation très concrète et très humaine.",
    missions: [
      'Chargement et comptage des denrées avant les distributions.',
      'Tri, rangement et installation des produits sur site.',
      'Distribution directe aux bénéficiaires dans le respect des consignes d’équité.',
      'Participation à des journées de récolte en centres commerciaux et à la banque alimentaire.',
    ],
    insight:
      "Cette première année d’engagement m’a appris à sortir de ma zone de confort, à tenir un rôle utile dans un collectif et à comprendre la réalité de la précarité étudiante sur le terrain.",
  },
  {
    title: 'ING4 — COP1 Angers et implication dans la vie ESAIP',
    period: '2025 - 2026',
    logo: '/images/esaip-logo.png',
    image: '/images/lep-cop1-action.jpg',
    body:
      "En ING4, j'ai poursuivi mon engagement chez COP1 Angers tout en donnant aussi quelques heures au BDI de l'ESAIP comme membre actif. Cette deuxième année montre une continuité réelle de mon engagement sur les deux années ESAIP demandées dans le PPP.",
    missions: [
      'Poursuite des distributions et de la logistique avec COP1 Angers.',
      'Présence régulière sur les actions solidaires et les besoins de terrain.',
      'Participation ponctuelle à la dynamique étudiante via le BDI de l'ESAIP.',
      'Contribution au bon déroulement d’actions internes ou associatives de l’école.',
    ],
    insight:
      "Cette deuxième année m’a surtout appris la régularité dans l’engagement : être présent dans la durée, continuer à aider même avec les contraintes académiques, et assumer un rôle concret sans chercher à le mettre en avant.",
  },
];

export const professionalProject = {
  why:
    "Après ma licence en mathématiques, je cherchais d’abord un stage en actuariat, mais je n’ai pas trouvé d’opportunité dans cette voie. J’ai alors eu la possibilité de faire un stage en SOC. C’est pendant cette expérience, au contact de vrais incidents, de logs, d’alertes et d’analyses concrètes, que j’ai découvert un métier qui me stimulait réellement. J’y ai trouvé à la fois la rigueur analytique que j’aimais déjà dans les mathématiques et une dimension opérationnelle beaucoup plus vivante. C’est là que ma passion pour la cybersécurité est née.",
  trainingFit: [
    {
      positive: 'Les projets pratiques proches du terrain',
      missing: 'Davantage de scénarios Red Team et d’attaques simulées',
    },
    {
      positive: 'La diversité des modules : réseau, sécurité, data, dev',
      missing: 'Des projets d’équipe plus longs et plus proches d’un produit réel',
    },
    {
      positive: "L’ouverture internationale avec l’ERASMUS",
      missing: 'Plus d’exposition concrète à AWS ou Azure',
    },
    {
      positive: 'Les stages intégrés au cursus',
      missing: 'Un accompagnement plus direct vers certaines certifications',
    },
  ],
  trainingAnalysis:
    "Ma formation m’a donné une base solide pour débuter dans des postes SOC, Blue Team ou cybersécurité défensive : j’y ai développé des réflexes réseau, système, analyse de logs, gestion d’incidents et sécurité des environnements conteneurisés. Elle m’a aussi appris à relier plusieurs domaines entre eux : sécurité, développement, data et infrastructure.",
  trainingAnalysis2:
    "En revanche, mon projet professionnel évolue aujourd’hui plus clairement vers le cloud. À moyen terme, je veux monter en compétence vers des rôles d’ingénieur cloud ou d’architecte solutions cloud, avec une forte sensibilité sécurité. Cela signifie que j’ai encore besoin d’approfondir les environnements AWS et Azure, l’architecture cloud à grande échelle, l’automatisation d’infrastructure et la conception de solutions robustes pour les entreprises.",
  trainingAnalysis3:
    "Autrement dit, ma formation est cohérente avec mon point de départ professionnel, mais je la vois aussi comme une base de lancement. Elle me permet d’entrer par la cybersécurité et le SOC, tout en préparant progressivement une évolution vers le cloud, puis vers des responsabilités plus larges de conseil et d’architecture.",
  values: [
    {
      title: 'Exigence',
      text: "Je suis perfectionniste : j’aime pousser un livrable jusqu’à ce qu’il soit propre, clair et défendable.",
    },
    {
      title: 'Ténacité',
      text: "Je lâche difficilement l’affaire. Quand un problème résiste, j’ai le réflexe de chercher, tester et comprendre.",
    },
    {
      title: 'Fiabilité sous pression',
      text: "Je supporte bien l’intensité des échéances courtes et je garde généralement une bonne lucidité quand la pression monte.",
    },
    {
      title: 'Intégrité',
      text: 'Dans les métiers de la cybersécurité, la confiance, la discrétion et la transparence restent non négociables.',
    },
  ],
  antiValues: [
    {
      title: 'Travail bâclé',
      text: "Livrer vite sans vérifier ne me convient pas. J’ai besoin qu’un rendu tienne la route, pas seulement qu’il soit terminé.",
    },
    {
      title: 'Abandon au premier blocage',
      text: "Je n’aime pas laisser tomber dès qu’une difficulté apparaît. Je préfère creuser avant de conclure qu’un problème est bloquant.",
    },
    {
      title: 'Passivité',
      text: "Rester spectateur d’un problème ou attendre qu’il se règle seul ne me ressemble pas.",
    },
    {
      title: 'Flou sur les responsabilités',
      text: "J’apprécie les environnements où chacun assume son rôle et où les sujets délicats sont traités clairement.",
    },
  ],
  note:
    "J’aime l’adrénaline des deadlines et je peux être très efficace sous pression. J’en suis conscient, et je travaille aussi à mieux équilibrer cette énergie avec une organisation plus régulière.",
  vision:
    "Dans 5 ans, je me vois évoluer vers des fonctions d’ingénieur cloud ou d’architecte solutions cloud, avec une vraie base en cybersécurité. Je pense que je commencerai probablement par des postes orientés SOC ou sécurité opérationnelle, mais mon objectif est d’aller vers des rôles où je conçois des solutions propres, robustes et concrètes pour accompagner les entreprises dans leur évolution numérique. À plus long terme, je veux me lancer en freelance comme consultant en cloud ou en sécurité des systèmes d’information, afin d’aider les entreprises à moderniser leur infrastructure avec des solutions utiles, réalistes et sécurisées.",
};

export const contact = {
  email: 'nsoumbe237@icloud.com',
  phone: '07 51 57 30 42',
  linkedin: 'https://www.linkedin.com/in/russell-nsoumbe',
  github: 'https://github.com/nsoumbe',
};
