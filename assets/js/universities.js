/* =====================================================================
 * SinoEdu Global · universities.js
 * 12 partner Chinese universities with multilingual content
 * =================================================================== */

window.UNIVERSITIES = [
  {
    id: 'thu',
    name: { 'zh-CN': '清华大学', en: 'Tsinghua University', ru: 'Цинхуа', es: 'Universidad de Tsinghua' },
    shortName: { 'zh-CN': '清华', en: 'Tsinghua', ru: 'Цинхуа', es: 'Tsinghua' },
    city: { 'zh-CN': '北京', en: 'Beijing', ru: 'Пекин', es: 'Pekín' },
    cityKey: 'bei',
    type: { 'zh-CN': '综合 / 理工', en: 'Comprehensive / Engineering', ru: 'Комплексный / Инженерный', es: 'Integral / Ingeniería' },
    qsRank: 25,
    founded: 1911,
    students: 38000,
    intl: 8000,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#7E2D2D', '#C8102E'],
    accent: '紫荆',
    scholarship: true,
    why: {
      'zh-CN': [
        'QS 工程与技术学科全球第 11 位（2026）',
        '校园位于北京海淀区，地铁直达，毗邻中关村创新高地',
        '"自强不息 厚德载物"校训，是历届中国领导人母校',
        '国际学生学者逾 8,000 人，下设 25 个学院提供 70+ 英文授课专业'
      ],
      en: [
        'Ranked 11th globally in Engineering & Technology (QS 2026)',
        'Campus in Haidian with direct subway access, next to Zhongguancun innovation hub',
        'Alma mater of China’s leaders; motto “self-discipline and social commitment”',
        '8,000+ international students and scholars; 70+ English-taught programs'
      ],
      ru: [
        '11-е место в мире в инженерии и технологиях (QS 2026)',
        'Кампус в Хайдяне у метро, рядом с инновационным центром Чжунгуаньцунь',
        'Альма-матер руководителей Китая; девиз «Самоусовершенствование и служение обществу»',
        'Более 8 000 иностранных студентов, 70+ англоязычных программ'
      ],
      es: [
        'Puesto 11 del mundo en Ingeniería y Tecnología (QS 2026)',
        'Campus en Haidian con acceso directo al metro, junto al hub de innovación Zhongguancun',
        'Alma máter de los líderes de China; lema «superación personal y compromiso social»',
        'Más de 8 000 estudiantes internacionales; más de 70 programas en inglés'
      ]
    },
    overview: {
      'zh-CN': '清华大学（Tsinghua University）是中国最顶尖的综合性研究型大学之一，前身清华学堂始建于 1911 年。现有 22 个学院、57 个系，开设 90+ 个本科专业，140+ 个硕士博士方向。学校在工程、计算机科学、材料科学、商业管理等学科长期居于 QS 学科榜前列。',
      en: 'Tsinghua University, founded in 1911, is one of China’s leading comprehensive research universities. With 22 schools and 57 departments, Tsinghua offers 90+ undergraduate and 140+ postgraduate programs, consistently ranked in the global top 20 across Engineering, Computer Science, Materials and Business.',
      ru: 'Цинхуа, основанный в 1911 году, — один из ведущих комплексных исследовательских вузов Китая: 22 школы, 57 кафедр, 90+ бакалаврских и 140+ магистерских программ, стабильно входит в топ-20 мировых рейтингов.',
      es: 'Tsinghua, fundada en 1911, es una de las principales universidades integrales de investigación de China: 22 escuelas, 57 departamentos, más de 90 programas de grado y 140 de posgrado.'
    },
    programs: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil & Structural Engineering', 'Materials Science', 'Industrial Engineering', 'Economics', 'International Business', 'Architecture'],
    req: {
      'zh-CN': ['高中毕业证或同等学力', '高中三年成绩单（均分≥85）', '雅思 6.5 / 托福 90 / 中文 HSK 5', '数学/物理高考成绩优秀', '推荐信 2 封', '个人陈述 800 词'],
      en: ['High school diploma or equivalent', 'Transcript (avg ≥85%)', 'IELTS 6.5 / TOEFL 90 / HSK 5', 'Strong maths/physics scores', '2 recommendation letters', 'Personal statement of 800 words'],
      ru: ['Аттестат или эквивалент', 'Средний балл ≥85', 'IELTS 6.5 / TOEFL 90 / HSK 5', 'Высокие баллы по математике/физике', '2 рекомендательных письма', 'Мотивационное письмо 800 слов'],
      es: ['Diploma de bachillerato', 'Expediente promedio ≥85%', 'IELTS 6.5 / TOEFL 90 / HSK 5', 'Buen expediente en Matemáticas/Física', '2 cartas de recomendación', 'Carta de motivación de 800 palabras']
    },
    contact: { website: 'https://www.tsinghua.edu.cn', email: 'admissions@tsinghua.edu.cn' }
  },
  {
    id: 'pku',
    name: { 'zh-CN': '北京大学', en: 'Peking University', ru: 'Пекинский университет', es: 'Universidad de Pekín' },
    shortName: { 'zh-CN': '北大', en: 'Peking', ru: 'Пекинский', es: 'Pekín' },
    city: { 'zh-CN': '北京', en: 'Beijing', ru: 'Пекин', es: 'Pekín' },
    cityKey: 'bei',
    type: { 'zh-CN': '综合', en: 'Comprehensive', ru: 'Комплексный', es: 'Integral' },
    qsRank: 14,
    founded: 1898,
    students: 41000,
    intl: 7500,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#860018', '#E60012'],
    accent: '红楼',
    scholarship: true,
    why: {
      'zh-CN': ['QS 2026 全球第 14 位，文理医商综合领先', '未名湖畔园林式校园，燕园被誉为中国最美高校', '120+ 年历史，北大方正是中国近代高等教育的源头之一', '与全球 380+ 大学建立合作，本科交换比例 35%'],
      en: ['Ranked 14th globally (QS 2026); leading in arts, sciences, medicine and business', 'Beautiful historic campus around Weiming (Unnamed) Lake', '120+ year history; one of the cradles of modern Chinese higher education', 'Partnerships with 380+ universities; 35% of undergrads study abroad'],
      ru: ['14-е место в мире (QS 2026); лидер в науках, медицине и бизнесе', 'Исторический кампус у озера Вэймин', 'Более 120 лет истории; одна из колыбелей современного высшего образования Китая', 'Партнёрства с 380+ вузами; 35% бакалавров учатся за рубежом'],
      es: ['Puesto 14 del mundo (QS 2026); líder en ciencias, medicina y negocios', 'Campus histórico junto al lago Weiming', 'Más de 120 años; una de las cunas de la educación superior china moderna', 'Acuerdos con más de 380 universidades; 35% de los alumnos cursan un periodo en el extranjero']
    },
    overview: {
      'zh-CN': '北京大学创办于 1898 年，初名京师大学堂，是中国近代第一所国立综合性大学。现有 6 个学部、11 个学科门类，在文学、历史学、哲学、基础医学、理论经济学等领域长期居于中国顶尖。',
      en: 'Peking University, founded in 1898, was the first national comprehensive university in modern China. With 6 academic divisions spanning 11 disciplines, PKU leads in literature, history, philosophy, basic medicine and theoretical economics.',
      ru: 'Пекинский университет, основанный в 1898 году — первый национальный комплексный университет современного Китая. 6 академических подразделений, 11 отраслей наук; лидерство в литературе, истории, философии, медицине и экономике.',
      es: 'La Universidad de Pekín, fundada en 1898, fue la primera universidad nacional integral de la China moderna: 6 divisiones académicas y 11 disciplinas; referente en literatura, historia, filosofía, medicina y economía teórica.'
    },
    programs: ['International Business', 'Economics', 'Law (LLM)', 'Sociology', 'Public Health', 'Clinical Medicine', 'Computer Science', 'Chinese Language', 'Philosophy'],
    req: {
      'zh-CN': ['高中毕业证 / 本科毕业证（硕士）', '成绩单 + 平均分≥85', '雅思 6.5 / 托福 90 / HSK 5（中文授课 6 级）', '推荐信 2 封', '个人陈述 800 词', '部分专业需 SAT / ACT / GRE / GMAT'],
      en: ['High school / bachelor diploma', 'Transcript with avg ≥85%', 'IELTS 6.5 / TOEFL 90 / HSK 5 (HSK 6 for Chinese-taught)', '2 recommendation letters', 'Personal statement of 800 words', 'SAT/ACT/GRE/GMAT for some programs'],
      ru: ['Аттестат / диплом', 'Средний балл ≥85', 'IELTS 6.5 / TOEFL 90 / HSK 5 (или HSK 6)', '2 рекомендательных письма', 'Мотивационное письмо 800 слов', 'SAT/ACT/GRE/GMAT для ряда программ'],
      es: ['Diploma', 'Expediente promedio ≥85%', 'IELTS 6.5 / TOEFL 90 / HSK 5 (HSK 6 para chino)', '2 cartas de recomendación', 'Carta de motivación de 800 palabras', 'SAT/ACT/GRE/GMAT en algunos programas']
    },
    contact: { website: 'https://www.pku.edu.cn', email: 'ipo@pku.edu.cn' }
  },
  {
    id: 'fdu',
    name: { 'zh-CN': '复旦大学', en: 'Fudan University', ru: 'Фуданьский университет', es: 'Universidad de Fudan' },
    shortName: { 'zh-CN': '复旦', en: 'Fudan', ru: 'Фудань', es: 'Fudan' },
    city: { 'zh-CN': '上海', en: 'Shanghai', ru: 'Шанхай', es: 'Shanghái' },
    cityKey: 'sh',
    type: { 'zh-CN': '综合', en: 'Comprehensive', ru: 'Комплексный', es: 'Integral' },
    qsRank: 39,
    founded: 1905,
    students: 36000,
    intl: 6500,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#1B2D5C', '#E03C31'],
    accent: '曦园',
    scholarship: true,
    why: {
      'zh-CN': ['QS 2026 第 39 位，文理医综合实力均衡', '位于上海杨浦 / 邯郸校区，毗邻五角场创新区', '管理学院、医院管理处享誉亚洲', '与全球 200+ 大学建立交换机制'],
      en: ['Ranked 39th (QS 2026); balanced across arts, sciences and medicine', 'Located in Yangpu, Shanghai — close to Wujiaochang innovation district', 'Top business and hospital administration schools in Asia', 'Exchange agreements with 200+ universities worldwide'],
      ru: ['39-е место (QS 2026); баланс гуманитарных и естественных наук', 'Кампус в Янпу, рядом с инновационным районом Уцзяочан', 'Азиатские лидеры в бизнес-образовании и управлении здравоохранением', 'Более 200 программ обмена'],
      es: ['Puesto 39 (QS 2026); equilibrio entre artes, ciencias y medicina', 'Campus en Yangpu, Shanghái, cerca del distrito de innovación Wujiaochang', 'Top de Asia en escuelas de negocios y gestión hospitalaria', 'Acuerdos de intercambio con más de 200 universidades']
    },
    overview: {
      'zh-CN': '复旦大学创立于 1905 年，是中国人自主创办的第一所高等学校。学校现设 9 个学院、33 个院系、5 个双一流学科群，临床医学、新闻传播、数学、化学等专业处于全国顶尖。',
      en: 'Fudan University, founded in 1905, was the first university established by Chinese people. With 9 schools, 33 departments and 5 “Double First-Class” discipline clusters, Fudan excels in clinical medicine, journalism, mathematics and chemistry.',
      ru: 'Фуданьский университет (1905) — первый вуз, основанный самими китайцами. 9 школ, 33 кафедры, 5 «двойных первоклассных» кластеров; лидерство в клинической медицине, журналистике, математике и химии.',
      es: 'Fudan (1905) fue la primera universidad creada por chinos. 9 escuelas, 33 departamentos, 5 clústeres «Doble Primera Clase»; referentes en medicina clínica, periodismo, matemáticas y química.'
    },
    programs: ['Journalism & Communication', 'International Relations', 'Economics', 'Mathematics', 'Software Engineering', 'Public Health', 'Law', 'Chinese Language'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '成绩单均分≥85', '雅思 6.5 / 托福 90 / HSK 5', '推荐信 2 封', '个人陈述'],
      en: ['High school / bachelor diploma', 'Transcript avg ≥85%', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 letters of recommendation', 'Personal statement'],
      ru: ['Аттестат / диплом', 'Средний балл ≥85', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 рекомендательных письма', 'Мотивационное письмо'],
      es: ['Diploma', 'Expediente promedio ≥85%', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 cartas de recomendación', 'Carta de motivación']
    },
    contact: { website: 'https://www.fudan.edu.cn', email: 'iso@fudan.edu.cn' }
  },
  {
    id: 'sjtu',
    name: { 'zh-CN': '上海交通大学', en: 'Shanghai Jiao Tong University', ru: 'Шанхайский транспортный университет', es: 'Universidad Jiao Tong de Shanghái' },
    shortName: { 'zh-CN': '上交大', en: 'SJTU', ru: 'ШТУ', es: 'SJTU' },
    city: { 'zh-CN': '上海', en: 'Shanghai', ru: 'Шанхай', es: 'Shanghái' },
    cityKey: 'sh',
    type: { 'zh-CN': '理工', en: 'Science & Engineering', ru: 'Инженерный', es: 'Ciencia e Ingeniería' },
    qsRank: 45,
    founded: 1896,
    students: 48000,
    intl: 7000,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#0B2C5C', '#E4002B'],
    accent: '思源湖',
    scholarship: true,
    why: {
      'zh-CN': ['QS 工程学科全球前 30', '"饮水思源，爱国荣校"百年传承', '与麻省理工、加州伯克利等建立联合学院', '地处上海徐汇，毗邻科技与金融中心'],
      en: ['Engineering in the global top 30 (QS)', 'Century-old motto “drink from the source, serve the nation”', 'Joint institutes with MIT and UC Berkeley', 'Xuhui campus near Shanghai’s tech and finance hubs'],
      ru: ['Инженерия в топ-30 мира', 'Девиз «Из источника — стране»', 'Совместные институты с MIT и Беркли', 'Кампус в Сюйхуэе у технологических и финансовых центров'],
      es: ['Ingeniería en el top 30 mundial', 'Lema centenario «bebe de la fuente, sirve al país»', 'Institutos conjuntos con MIT y UC Berkeley', 'Campus en Xuhui cerca de los hubs de tecnología y finanzas']
    },
    overview: {
      'zh-CN': '上海交通大学始于 1896 年的南洋公学，是中国历史最悠久的现代大学之一。现设 34 个学院，11 个学科入选国家"双一流"，工程类学科长期居于 QS 学科榜前列。',
      en: 'Shanghai Jiao Tong University dates back to 1896. With 34 schools and 11 Double First-Class disciplines, SJTU is consistently ranked in the QS subject top 30 across engineering fields.',
      ru: 'Шанхайский транспортный университет основан в 1896 году; 34 школы, 11 «двойных первоклассных» дисциплин, стабильно в топ-30 QS по инженерии.',
      es: 'SJTU se remonta a 1896: 34 escuelas, 11 disciplinas Doble Primera Clase, top 30 QS en ingeniería.'
    },
    programs: ['Mechanical Engineering', 'Computer Science', 'Electrical Engineering', 'Biomedical Engineering', 'Marine Engineering', 'Materials Science', 'Energy & Power Engineering', 'Aeronautics & Astronautics'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.5 / 托福 90 / HSK 5', '推荐信 2 封', '理科生优先'],
      en: ['High school / bachelor diploma', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 letters of recommendation', 'Strong STEM background preferred'],
      ru: ['Аттестат / диплом', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 рекомендательных письма', 'Предпочтение STEM-бэкграунду'],
      es: ['Diploma', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 cartas de recomendación', 'Perfil STEM preferido']
    },
    contact: { website: 'https://en.sjtu.edu.cn', email: 'iso@sjtu.edu.cn' }
  },
  {
    id: 'zju',
    name: { 'zh-CN': '浙江大学', en: 'Zhejiang University', ru: 'Чжэцзянский университет', es: 'Universidad de Zhejiang' },
    shortName: { 'zh-CN': '浙大', en: 'ZJU', ru: 'Чжэцзян', es: 'ZJU' },
    city: { 'zh-CN': '杭州', en: 'Hangzhou', ru: 'Ханчжоу', es: 'Hangzhou' },
    cityKey: 'hz',
    type: { 'zh-CN': '综合 / 理工', en: 'Comprehensive / Engineering', ru: 'Комплексный / Инженерный', es: 'Integral / Ingeniería' },
    qsRank: 47,
    founded: 1897,
    students: 54000,
    intl: 8500,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#005A87', '#D32F2F'],
    accent: '求是大讲堂',
    scholarship: true,
    why: {
      'zh-CN': ['QS 2026 第 47 位，5 大学科全球前 50', '位于西湖畔，"东方剑桥"美誉', '与阿里巴巴、海康威视等建立联合实验室', '全球 180+ 顶尖大学合作'],
      en: ['Ranked 47th (QS 2026); 5 subjects in global top 50', 'Near West Lake — the “Oxford of the East”', 'Joint labs with Alibaba and Hikvision', '180+ global university partnerships'],
      ru: ['47-е место в QS 2026; 5 предметов в топ-50 мира', 'У озера Сиху — «Оксфорд Востока»', 'Совместные лаборатории с Alibaba и Hikvision', '180+ зарубежных партнёров'],
      es: ['Puesto 47 (QS 2026); 5 disciplinas en el top 50 mundial', 'A orillas del lago Oeste — el «Oxford de Oriente»', 'Laboratorios conjuntos con Alibaba y Hikvision', 'Más de 180 socios internacionales']
    },
    overview: {
      'zh-CN': '浙江大学前身为 1897 年创办的求是书院，是中国人自己创办的最早现代大学之一。学校坐落于杭州西湖畔，现有 7 个学部、37 个学院（含海宁国际校区）。',
      en: 'Zhejiang University traces back to Qiushi Academy in 1897. Located beside West Lake, Hangzhou, with 7 academic divisions and 37 colleges including the Haining International Campus.',
      ru: 'Чжэцзянский университет (1897). Кампус у озера Сиху в Ханчжоу; 7 академических подразделений и 37 колледжей, включая Хайнинский международный кампус.',
      es: 'ZJU se remonta a 1897. Campus junto al lago Oeste en Hangzhou; 7 divisiones y 37 colegios, incluido el Campus Internacional Haining.'
    },
    programs: ['Computer Science', 'Electrical Engineering', 'Biological Sciences', 'Mathematics', 'Marine Science', 'Management', 'International Economics & Trade', 'Architecture'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.5 / 托福 90 / HSK 5', '推荐信 2 封', 'GPA ≥ 3.5 / 4.0'],
      en: ['High school / bachelor diploma', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 recommendation letters', 'GPA ≥ 3.5 / 4.0'],
      ru: ['Аттестат / диплом', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 рекомендательных письма', 'GPA ≥ 3.5 / 4.0'],
      es: ['Diploma', 'IELTS 6.5 / TOEFL 90 / HSK 5', '2 cartas de recomendación', 'GPA ≥ 3.5 / 4.0']
    },
    contact: { website: 'https://www.zju.edu.cn', email: 'iso@zju.edu.cn' }
  },
  {
    id: 'nju',
    name: { 'zh-CN': '南京大学', en: 'Nanjing University', ru: 'Нанкинский университет', es: 'Universidad de Nanjing' },
    shortName: { 'zh-CN': '南大', en: 'Nanjing', ru: 'Нанкин', es: 'Nanjing' },
    city: { 'zh-CN': '南京', en: 'Nanjing', ru: 'Нанкин', es: 'Nankín' },
    cityKey: 'nj',
    type: { 'zh-CN': '综合', en: 'Comprehensive', ru: 'Комплексный', es: 'Integral' },
    qsRank: 79,
    founded: 1902,
    students: 32000,
    intl: 4500,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#5E2A7E', '#C9A227'],
    accent: '鼓楼校区',
    scholarship: true,
    why: {
      'zh-CN': ['QS 2026 第 79 位，文理基础学科领先', '位于六朝古都南京，鼓楼老建筑群国家文物', '全球 180+ 合作院校', '校友集中在中央研究院、中科院系统'],
      en: ['Ranked 79th (QS 2026); strong in arts and sciences', 'In Nanjing, a former capital city, with preserved historic architecture', '180+ international partners', 'Alumni network in academia and CAS system'],
      ru: ['79-е место (QS 2026); сильные гуманитарные и естественнонаучные направления', 'В Нанкине — бывшей столице — с сохранённой исторической архитектурой', '180+ международных партнёров', 'Сеть выпускников в Академии наук и университетах'],
      es: ['Puesto 79 (QS 2026); fuerte en artes y ciencias', 'En Nanjing (antigua capital), con arquitectura histórica', 'Más de 180 socios internacionales', 'Red de antiguos alumnos en academia e investigación']
    },
    overview: {
      'zh-CN': '南京大学前身为 1902 年三江师范学堂，是我国最早的现代大学之一。其基础学科如天文学、地质学、物理、化学、文学等领域长期居于全国顶尖。',
      en: 'Nanjing University traces back to 1902. It is one of China’s oldest modern universities and a long-standing leader in astronomy, geology, physics, chemistry and literature.',
      ru: 'Нанкинский университет основан в 1902 году; один из старейших вузов Китая и лидер по астрономии, геологии, физике, химии и литературе.',
      es: 'La Universidad de Nanjing se remonta a 1902; una de las más antiguas de China, referente en astronomía, geología, física, química y letras.'
    },
    programs: ['Astronomy', 'Geology', 'Physics', 'Chemistry', 'Sociology', 'Chinese Literature', 'Mathematics', 'Computer Science'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.5 / 托福 90 / HSK 5'],
      en: ['High school / bachelor diploma', 'IELTS 6.5 / TOEFL 90 / HSK 5'],
      ru: ['Аттестат / диплом', 'IELTS 6.5 / TOEFL 90 / HSK 5'],
      es: ['Diploma', 'IELTS 6.5 / TOEFL 90 / HSK 5']
    },
    contact: { website: 'https://www.nju.edu.cn', email: 'iso@nju.edu.cn' }
  },
  {
    id: 'whu',
    name: { 'zh-CN': '武汉大学', en: 'Wuhan University', ru: 'Уханьский университет', es: 'Universidad de Wuhan' },
    shortName: { 'zh-CN': '武大', en: 'Wuhan', ru: 'Ухань', es: 'Wuhan' },
    city: { 'zh-CN': '武汉', en: 'Wuhan', ru: 'Ухань', es: 'Wuhan' },
    cityKey: 'wh',
    type: { 'zh-CN': '综合', en: 'Comprehensive', ru: 'Комплексный', es: 'Integral' },
    qsRank: 122,
    founded: 1893,
    students: 60000,
    intl: 5500,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#1B6E3F', '#C9A227'],
    accent: '樱花城堡',
    scholarship: true,
    why: {
      'zh-CN': ['QS 2026 第 122 位，遥感、水利、测绘学科全球顶尖', '珞珈山校园樱花盛景闻名，"中国最美大学之一"', '6 个学科入选"双一流"建设', '全国面积最大的大学之一'],
      en: ['Ranked 122nd (QS 2026); top globally in remote sensing, water resources', 'Famous Luojia Mountain campus — one of China’s most beautiful universities', '6 Double First-Class disciplines', 'One of the largest universities by campus area'],
      ru: ['122-е место (QS 2026); топ в мире по дистанционному зондированию и водным ресурсам', 'Кампус на горе Лоцзя — один из красивейших вузов Китая', '6 «двойных первоклассных» дисциплин', 'Один из крупнейших вузов по площади'],
      es: ['Puesto 122 (QS 2026); referente mundial en teledetección y recursos hídricos', 'Campus en la montaña Luojia — una de las universidades más bellas', '6 disciplinas Doble Primera Clase', 'Uno de los campus universitarios más extensos del país']
    },
    overview: {
      'zh-CN': '武汉大学溯源于 1893 年的自强学堂。学校位于风景秀丽的东湖之畔、珞珈山下，校园 5,700 余亩；共有 6 个学部、47 个学院（系），遥感、测绘、水利水电等专业长期居于全国第一。',
      en: 'Wuhan University traces back to 1893. Set between East Lake and Luojia Mountain on 3,800 mu of campus, Wuhan University has 6 academic divisions and 47 departments — top in remote sensing, geodesy and water engineering.',
      ru: 'Уханьский университет основан в 1893 году. Кампус у озера Дунху и горы Лоцзя; 6 академических подразделений, 47 кафедр; топ по дистанционному зондированию, геодезии и водным ресурсам.',
      es: 'Wuhan se remonta a 1893. Campus entre el lago Este y la montaña Luojia; 6 divisiones y 47 departamentos; líder en teledetección, geodesia e ingeniería hidráulica.'
    },
    programs: ['Remote Sensing & GIS', 'Water Resources Engineering', 'Surveying & Mapping', 'Computer Science', 'Electrical Engineering', 'Mathematics', 'Biology', 'Philosophy'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.5 / 托福 90'],
      en: ['High school / bachelor diploma', 'IELTS 6.5 / TOEFL 90'],
      ru: ['Аттестат / диплом', 'IELTS 6.5 / TOEFL 90'],
      es: ['Diploma', 'IELTS 6.5 / TOEFL 90']
    },
    contact: { website: 'https://www.whu.edu.cn', email: 'iso@whu.edu.cn' }
  },
  {
    id: 'sysu',
    name: { 'zh-CN': '中山大学', en: 'Sun Yat-sen University', ru: 'Университет Сунь Ятсена', es: 'Universidad Sun Yat-sen' },
    shortName: { 'zh-CN': '中大', en: 'SYSU', ru: 'Ятсен', es: 'SYSU' },
    city: { 'zh-CN': '广州', en: 'Guangzhou', ru: 'Гуанчжоу', es: 'Guangzhou' },
    cityKey: 'gz',
    type: { 'zh-CN': '综合', en: 'Comprehensive', ru: 'Комплексный', es: 'Integral' },
    qsRank: 159,
    founded: 1924,
    students: 60000,
    intl: 5000,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#1E6F38', '#F8C700'],
    accent: '怀士堂',
    scholarship: true,
    why: {
      'zh-CN': ['位于粤港澳大湾区核心，与港澳高校深度合作', 'QS 2026 第 159 位，工商管理、临床医学领先', '粤港澳学生交流比例最高的中山大学', '靠近深圳创新产业带，就业资源丰富'],
      en: ['Located in the Greater Bay Area; deep collaboration with HK and Macao', 'QS 159th; leader in business administration and clinical medicine', 'Highest GBA student exchange rate among Chinese universities', 'Close to Shenzhen’s innovation corridor — strong employment network'],
      ru: ['В Большом заливе; тесное сотрудничество с Гонконгом и Макао', '159-е место; лидер по бизнес-администрированию и клинической медицине', 'Самый высокий процент обменов в Большом заливе', 'Рядом с инновационным поясом Шэньчжэня'],
      es: ['En el Área Metropolitana de Gran Bahía; fuerte cooperación con HK y Macao', 'Puesto 159; referente en administración de empresas y medicina clínica', 'Tasa de intercambio más alta con la Gran Bahía', 'Próximo al corredor de innovación de Shenzhen']
    },
    overview: {
      'zh-CN': '中山大学由孙中山先生于 1924 年亲手创办。学校位于粤港澳大湾区的广州、珠海、深圳三市五个校区办学，工商管理、临床医学、生物医学等学科具有突出优势。',
      en: 'Sun Yat-sen University was founded by Sun Yat-sen in 1924. With five campuses across Guangzhou, Zhuhai and Shenzhen, SYSU is a leader in business administration, clinical medicine and biomedical sciences.',
      ru: 'Университет Сунь Ятсена основан в 1924 году Сунь Ятсеном. 5 кампусов в Гуанчжоу, Чжухае и Шэньчжэне; лидер по бизнес-администрированию, клинической медицине и биомедицине.',
      es: 'Sun Yat-sen fue fundada por Sun Yat-sen en 1924. Cinco campus en Guangzhou, Zhuhai y Shenzhen; referentes en administración, medicina clínica y biomedicina.'
    },
    programs: ['Business Administration', 'Clinical Medicine', 'International Economics', 'Public Health', 'Biomedical Sciences', 'Sociology', 'Tourism Management', 'Marine Science'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.5 / 托福 90'],
      en: ['High school / bachelor diploma', 'IELTS 6.5 / TOEFL 90'],
      ru: ['Аттестат / диплом', 'IELTS 6.5 / TOEFL 90'],
      es: ['Diploma', 'IELTS 6.5 / TOEFL 90']
    },
    contact: { website: 'https://www.sysu.edu.cn', email: 'iso@sysu.edu.cn' }
  },
  {
    id: 'xjtu',
    name: { 'zh-CN': '西安交通大学', en: 'Xi’an Jiaotong University', ru: 'Сианьский транспортный университет', es: 'Universidad Jiao Tong de Xi’an' },
    shortName: { 'zh-CN': '西交大', en: 'XJTU', ru: 'Сиань', es: 'XJTU' },
    city: { 'zh-CN': '西安', en: "Xi'an", ru: 'Сиань', es: 'Xi’an' },
    cityKey: 'xa',
    type: { 'zh-CN': '理工', en: 'Science & Engineering', ru: 'Инженерный', es: 'Ciencia e Ingeniería' },
    qsRank: 252,
    founded: 1896,
    students: 44000,
    intl: 4500,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#7A0019', '#A4843E'],
    accent: '樱花道',
    scholarship: true,
    why: {
      'zh-CN': ['丝路起点的工程名校，能动、机械、管理见长', 'QS 2026 第 252 位，西部排名第一', '创新港校区与 30+ 国家级研究院共建', '与西安交通大学合作的国家储能专项班'],
      en: ['Engineering powerhouse at the start of the Silk Road; strong in energy, mechanics and management', 'QS 2022 #252 — top in Western China', 'Innovation Harbour campus co-developed with 30+ national research institutes', 'National energy storage programme with industry partners'],
      ru: ['Ведущий инженерный вуз с начала Шёлкового пути; энергетика, механика, менеджмент', '252-е место QS; топ на западе Китая', 'Кампус Innovation Harbour с 30+ национальными НИИ', 'Программа по накопителям энергии с индустрией'],
      es: ['Universidad líder en ingeniería junto al inicio de la Ruta de la Seda', 'Puesto 252 (QS); la mejor del oeste de China', 'Campus Innovation Harbour con más de 30 institutos nacionales', 'Programa nacional de almacenamiento de energía']
    },
    overview: {
      'zh-CN': '西安交通大学是 1956 年交通大学西迁后的主体，前身是 1896 年创建于上海的南洋公学。能源动力工程、机械工程、电气工程、管理科学与工程等专业长期处于全国第一。',
      en: 'Xi’an Jiaotong University originated in 1896 and moved to Xi’an in 1956. It is consistently top in China across Energy & Power Engineering, Mechanical Engineering, Electrical Engineering and Management Science.',
      ru: 'Сианьский транспортный университет основан в 1896 году, переведён в Сиань в 1956 г. Лидер в энергетике, механике, электротехнике и менеджменте.',
      es: 'Xi’an Jiao Tong se remonta a 1896 y se trasladó en 1956. Lidera energía, mecánica, ingeniería eléctrica y gestión.'
    },
    programs: ['Energy & Power Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Materials Science', 'Automation', 'Management Science', 'Civil Engineering', 'Software Engineering'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.0 / 托福 80 / HSK 4'],
      en: ['High school / bachelor diploma', 'IELTS 6.0 / TOEFL 80 / HSK 4'],
      ru: ['Аттестат / диплом', 'IELTS 6.0 / TOEFL 80 / HSK 4'],
      es: ['Diploma', 'IELTS 6.0 / TOEFL 80 / HSK 4']
    },
    contact: { website: 'https://en.xjtu.edu.cn', email: 'iso@xjtu.edu.cn' }
  },
  {
    id: 'tju',
    name: { 'zh-CN': '同济大学', en: 'Tongji University', ru: 'Тунцзи', es: 'Universidad Tongji' },
    shortName: { 'zh-CN': '同济', en: 'Tongji', ru: 'Тунцзи', es: 'Tongji' },
    city: { 'zh-CN': '上海', en: 'Shanghai', ru: 'Шанхай', es: 'Shanghái' },
    cityKey: 'sh',
    type: { 'zh-CN': '理工', en: 'Science & Engineering', ru: 'Инженерный', es: 'Ciencia e Ingeniería' },
    qsRank: 192,
    founded: 1907,
    students: 37000,
    intl: 8000,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#005BAC', '#3FA535'],
    accent: '联合国可持续发展学院',
    scholarship: true,
    why: {
      'zh-CN': ['QS 工程学科全球前 100，与德语区合作最深的院校', '同济大学 + 联合国合作成立 "联合国可持续发展学院"', '土木、汽车、环境设计专业常年全国第一', '每年接收超 8,000 名国际学生'],
      en: ['Engineering top 100 globally; deepest cooperation with German-speaking world', 'Joint UN Sustainable Development Institute', 'Top 1 in Civil, Automotive and Environmental Design', 'Receives 8,000+ international students annually'],
      ru: ['Инженерия в топ-100 мира; глубочайшее сотрудничество с немецкоязычным миром', 'Совместный Институт устойчивого развития ООН', 'Лидер по гражданскому строительству, автомобилям и экодизайну', 'Более 8 000 иностранных студентов в год'],
      es: ['Ingeniería en el top 100 mundial; aliado histórico del mundo germano', 'Instituto de Desarrollo Sostenible con la ONU', 'Top 1 en ingeniería civil, automoción y diseño ambiental', 'Recibe más de 8 000 estudiantes internacionales al año']
    },
    overview: {
      'zh-CN': '同济大学源于 1907 年德文医学堂，是中国与德国联系最紧密的工科名校。学校与联合国联合设立"联合国可持续发展学院"，土木工程、车辆工程、环境设计等专业长期居于全国前 3。',
      en: 'Tongji University was founded in 1907 as a German medical school. The Joint UN Sustainable Development Institute is located on campus, and Tongji consistently ranks top 3 in civil, automotive and environmental design.',
      ru: 'Тунцзи (1907) — медицинская школа на немецком языке; совместный Институт ООН по устойчивому развитию; стабильно топ-3 по гражданскому строительству, автомобилям и экодизайну.',
      es: 'Tongji (1907) como escuela médica alemana. Instituto conjunto con la ONU para el Desarrollo Sostenible; top 3 en civil, automoción y diseño ambiental.'
    },
    programs: ['Civil Engineering', 'Automotive Engineering', 'Environmental Design', 'Architecture', 'Computer Science', 'Mechanical Engineering', 'Urban Planning', 'Transportation'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.0 / 托福 80 / HSK 4'],
      en: ['High school / bachelor diploma', 'IELTS 6.0 / TOEFL 80 / HSK 4'],
      ru: ['Аттестат / диплом', 'IELTS 6.0 / TOEFL 80 / HSK 4'],
      es: ['Diploma', 'IELTS 6.0 / TOEFL 80 / HSK 4']
    },
    contact: { website: 'https://en.tongji.edu.cn', email: 'iso@tongji.edu.cn' }
  },
  {
    id: 'bnu',
    name: { 'zh-CN': '北京师范大学', en: 'Beijing Normal University', ru: 'Пекинский педагогический университет', es: 'Universidad Normal de Pekín' },
    shortName: { 'zh-CN': '北师大', en: 'BNU', ru: 'ПНПУ', es: 'BNU' },
    city: { 'zh-CN': '北京', en: 'Beijing', ru: 'Пекин', es: 'Pekín' },
    cityKey: 'bei',
    type: { 'zh-CN': '师范 / 综合', en: 'Normal / Comprehensive', ru: 'Педагогический', es: 'Educación / Integral' },
    qsRank: 270,
    founded: 1902,
    students: 25000,
    intl: 4000,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#0B5297', '#D32F2F'],
    accent: '木铎金声',
    scholarship: true,
    why: {
      'zh-CN': ['中国师范类第一校，教育学、心理学连续 5 学科评估 A+', '"学为人师，行为世范"校训', 'QS 教育学科常年全球前 30', '对外汉语教学师资和教材编写的核心力量'],
      en: ['China’s top teacher-training university; 5 disciplines rated A+ in education and psychology', 'Motto “model teacher for the nation”', 'Global top 30 in Education (QS)', 'Hub for TCSL teacher training and textbook editing'],
      ru: ['Лучший педагогический вуз Китая; 5 дисциплин с рейтингом A+', 'Девиз «Учитель — пример для страны»', 'Топ-30 QS по образованию', 'Центр подготовки преподавателей китайского и учебников'],
      es: ['La mejor universidad china de formación docente; 5 disciplinas con calificación A+', 'Lema «maestro modelo de la nación»', 'Top 30 mundial en Educación (QS)', 'Núcleo de formación de docentes de chino y libros de texto']
    },
    overview: {
      'zh-CN': '北京师范大学创建于 1902 年，是教育部直属重点大学。学校 15 个学科进入 ESI 全球前 1%，教育学、心理学、中国语言文学等专业在教育部学科评估中均获 A+。',
      en: 'Beijing Normal University, founded in 1902, is a Ministry of Education key university. 15 disciplines are in the ESI global top 1%, with Education, Psychology and Chinese Language rated A+.',
      ru: 'Пекинский педагогический университет (1902) — ключевой вуз Минобразования. 15 дисциплин в топ-1% ESI; образование, психология и китайская литература — A+.',
      es: 'BNU (1902) es universidad clave del Ministerio de Educación. 15 disciplinas en el top 1% de ESI; Educación, Psicología y Lengua China con A+.'
    },
    programs: ['Education', 'Psychology', 'Chinese Language & Literature', 'Public Health', 'Geography & Environmental Sciences', 'History', 'Mathematics & Applied Mathematics', 'TESOL'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.0 / 托福 80 / HSK 5'],
      en: ['High school / bachelor diploma', 'IELTS 6.0 / TOEFL 80 / HSK 5'],
      ru: ['Аттестат / диплом', 'IELTS 6.0 / TOEFL 80 / HSK 5'],
      es: ['Diploma', 'IELTS 6.0 / TOEFL 80 / HSK 5']
    },
    contact: { website: 'https://www.bnu.edu.cn', email: 'iso@bnu.edu.cn' }
  },
  {
    id: 'hust',
    name: { 'zh-CN': '华中科技大学', en: 'Huazhong University of Science and Technology', ru: 'Хуачжунский университет науки и технологий', es: 'Universidad de Ciencia y Tecnología de Huazhong' },
    shortName: { 'zh-CN': '华科', en: 'HUST', ru: 'Хуачжун', es: 'HUST' },
    city: { 'zh-CN': '武汉', en: 'Wuhan', ru: 'Ухань', es: 'Wuhan' },
    cityKey: 'wh',
    type: { 'zh-CN': '理工', en: 'Science & Engineering', ru: 'Инженерный', es: 'Ciencia e Ingeniería' },
    qsRank: 282,
    founded: 1952,
    students: 58000,
    intl: 5000,
    languages: { 'zh-CN': '中英双语', en: 'Bilingual', ru: 'Билингвально', es: 'Bilingüe' },
    color: ['#0E5D32', '#F1B81A'],
    accent: '梧桐大道',
    scholarship: true,
    why: {
      'zh-CN': ['QS 2026 第 282 位，工程学科全 50', '"梧桐大道"校园被誉为 "中国最美的工科校园"', '光电信息、电气工程全国第一', '与武汉光谷产业带深度协同'],
      en: ['QS 282nd; engineering subjects in global top 50', 'Phoenix Avenue campus — one of China’s most beautiful tech universities', 'Optoelectronics and Electrical Engineering consistently #1 in China', 'Deep links with Optics Valley industrial corridor'],
      ru: ['282-е место QS; инженерия в топ-50 мира', 'Кампус «Аллея Фениксов» — один из красивейших технологических вузов', 'Оптоэлектроника и электротехника — №1 в Китае', 'Тесные связи с индустриальным поясом Оптической долины'],
      es: ['Puesto 282 (QS); ingeniería en el top 50 mundial', 'Campus de la Avenida Phoenix — una de las universidades tecnológicas más bellas', 'Optoelectrónica e Ingeniería Eléctrica n.º 1 en China', 'Vínculos profundos con el corredor de Valle Óptico']
    },
    overview: {
      'zh-CN': '华中科技大学是国家"211 工程"重点建设高校。学校位于武汉光谷核心区，光电信息学院、电气与电子工程学院在全国学科评估中连续获评 A+。',
      en: 'HUST is a Project 211 key university. Located in the Optics Valley of Wuhan, its School of Optical and Electronic Information and the School of Electrical and Electronic Engineering are consistently rated A+.',
      ru: 'Хуачжунский университет — ключевой вуз проекта 211. В оптической долине Уханя; оптика и электроника — стабильно A+.',
      es: 'HUST es universidad clave del Proyecto 211. En el Valle Óptico de Wuhan; Óptica y Electrónica con A+ de forma sostenida.'
    },
    programs: ['Optoelectronic Information Science', 'Electrical Engineering', 'Computer Science', 'Mechanical Engineering', 'Automation', 'Biomedical Engineering', 'Materials Science', 'Software Engineering'],
    req: {
      'zh-CN': ['高中 / 本科毕业证', '雅思 6.0 / 托福 80 / HSK 4'],
      en: ['High school / bachelor diploma', 'IELTS 6.0 / TOEFL 80 / HSK 4'],
      ru: ['Аттестат / диплом', 'IELTS 6.0 / TOEFL 80 / HSK 4'],
      es: ['Diploma', 'IELTS 6.0 / TOEFL 80 / HSK 4']
    },
    contact: { website: 'https://www.hust.edu.cn', email: 'iso@hust.edu.cn' }
  }
];

/* Lookup helper */
window.getUniversity = function(id) {
  return window.UNIVERSITIES.find(u => u.id === id) || null;
};
