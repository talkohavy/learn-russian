import { Category, Word } from '@src/utils/types';

// • where is the toilet/bathroom? - где туалет?
// • you are not my father - ты не мой папа
// • do you have water? - у тебя есть вода?
// • this person is a doctor - етот человек доктор
// • Excuse me, where is my tea? - извините, где мой чай?
// • I do no eat soup - я не ем суп
// • our plan - наш план
// • our notebooks - наши тетради
// • Does she drink coffee? - Она пьёт кофи?
// • Does he drink coffee? - Он пьёт кофи?
// • where is my sister? - где мая сестра?
// • where are my sisters? - где мои сёстры?
// • this is my friend, mark - это мой друг, марк
// • sorry for my bad grammer - извините за мою плохую грамматику
// • Anton is already in the office - антон уже в офис
// • I am in the city now - Я сейчас в городе
// • Are you at school? - ты в школе?
// • Yes, Petach Tikva is far away - Да, Petach Tikva далеко
// • what is in the park? - что в етом парке?
// • are you at home or already at work? - ты дома или уже на работе?

// у меня есть - i have
// у тебя есть - you have
// у нас есть - we have
// у него есть - he has
// у нёо ??? есть - she has

// .--- e at the end ---
// • Are you at school? - ты в школе?
// • I am in the park - я в парке
// • mom & dad are in the park - мама и папн в парке
// • the plate is on the table - тарелка на столе (notice the e)
// • Are you at work? - ты на работе?
// • I am already at work - я уже на работе
// • he is in the bathroom - он в туалете
// .--- a at the end ---
// • mom is at home - мама дома
// • I am not home - я не дома
// • Yulia is already at home - юлия уже дома
// • are you at home? - ты дома?
// .--- ETOM ---
// • my plate is on this table - моя тарелка на этом столе
// • are you in this cafe? - Ты в этом кафе?
// • what is in this park? - что в етом парке?
// .--- a at the end ---
// • we are in the cafe - мы в кафе

export const sentences: Array<Word> = [
  {
    spelling: 'мой брат живёт в Москве',
    meaning: ['my brother lives in Moscow'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'кто здесь живёт',
    meaning: ['who lives here?'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'марк в россии сейчас',
    meaning: ['Mark is in Russia now'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'я не в москве сейчас',
    meaning: ['I am not in Moscow now'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'мы в америке сейчас',
    meaning: ['we are in America now'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'я на работе сейчас',
    meaning: ['I am at work now'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'ты уже дома',
    meaning: ['are you at home already?'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'берлин город в германии',
    meaning: ['Berlin is a city in Germany'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'катя не живёт в городе',
    meaning: ['katia does not live in the city'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'тарелка на месте',
    meaning: ['the plate is in its place'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'мои брат и сестра в школе',
    meaning: ['my brother and sister are at school'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'эта кровать не на месте',
    meaning: ['this bed is not in its place'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'Я хочу знать',
    meaning: ['i want to know'],
    points: 0,
    categories: [Category.Sentences],
  },
  {
    spelling: 'я знал это',
    meaning: ['I knew that'],
    points: 0,
    categories: [Category.Sentences],
  },
];
