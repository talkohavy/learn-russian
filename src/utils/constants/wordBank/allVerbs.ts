import { Category, Word } from '@src/utils/types';

export const allVerbsObj = {
  know: {
    toVerb: {
      spelling: 'знать',
      soundsLike: 'ZNAT',
      meaning: ['to know'],
      points: 0,
      categories: [Category.Verbs],
    },
    theAction: {
      spelling: 'зная',
      soundsLike: 'ZNAYA',
      meaning: ['knowing'],
      points: 0,
      categories: [Category.Verbs],
    },
    present: {
      i: {
        spelling: 'знаю',
        soundsLike: 'ZNAYU',
        meaning: ['I know'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'знаешь',
        soundsLike: 'ZNAYESH',
        meaning: ['you (single) know'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'знает',
        soundsLike: 'ZNAYET',
        meaning: ['he/she knows'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'знаем',
        soundsLike: 'ZNAYEM',
        meaning: ['we know'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'знаете',
        soundsLike: 'ZNAYETE',
        meaning: ['you (plural) know'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'знают',
        soundsLike: 'ZNAYUT',
        meaning: ['they know'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    future: {
      i: {
        spelling: 'буду знать',
        soundsLike: 'BUDU ZNAT',
        meaning: ['i will know'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'будешь знать',
        soundsLike: 'BUDYESH ZNAT',
        meaning: ['you (single) will know'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'будет знать',
        soundsLike: 'BUDYET ZNAT',
        meaning: ['he/she will know'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'будем знать',
        soundsLike: 'BUDYEM ZNAT',
        meaning: ['we will know'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'будете знать',
        soundsLike: 'BUDYETYE ZNAT',
        meaning: ['you (plural) will know'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'будут знать',
        soundsLike: '**BU**DUT ZNAT',
        meaning: ['they will know'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    past: {
      masculine: {
        spelling: 'знал',
        soundsLike: 'ZNAL',
        meaning: ['knew (masculine)'],
        points: 0,
        categories: [Category.Verbs],
      },
      feminine: {
        spelling: 'знала',
        soundsLike: 'ZNALA',
        meaning: ['knew (feminine)'],
        points: 0,
        categories: [Category.Verbs],
      },
      plural: {
        spelling: 'знали',
        soundsLike: '**ZNA**LI',
        meaning: ['knew (plural)'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
  },
  live: {
    toVerb: {
      spelling: 'жить',
      soundsLike: 'ZHIT',
      meaning: ['to live'],
      points: 0,
      categories: [Category.Verbs],
    },
    theAction: { spelling: '', soundsLike: '', points: 0, meaning: [''] } as unknown as Word,
    present: {
      i: {
        spelling: 'живу',
        soundsLike: '',
        meaning: ['i live'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'живешь',
        soundsLike: '',
        meaning: ['you (single) live'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'живет',
        soundsLike: '',
        meaning: ['he/she lives'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'живем',
        soundsLike: '',
        meaning: ['we live'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'живете',
        soundsLike: '',
        meaning: ['you (plural) live'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'живут',
        soundsLike: '',
        meaning: ['they live'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    future: {
      i: {
        spelling: 'буду жить',
        soundsLike: '**BU**DU ZHIT',
        meaning: ['i will live'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'будешь жить',
        soundsLike: '',
        meaning: ['you (single) will live'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'будет жить',
        soundsLike: '**BU**DYET ZHIT',
        meaning: ['he/she will live'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'будем жить',
        soundsLike: '',
        meaning: ['we will live'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'будете жить',
        soundsLike: '',
        meaning: ['you (plural) will live'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'будут жить',
        soundsLike: '**BU**DUT ZHIT',
        meaning: ['they will live'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    past: {
      masculine: {
        spelling: 'жил',
        soundsLike: 'ZHIL',
        meaning: ['lived (single male)'],
        points: 0,
        categories: [Category.Verbs],
      },
      feminine: {
        spelling: 'жила',
        soundsLike: '',
        meaning: ['lived (single female)'],
        points: 0,
        categories: [Category.Verbs],
      },
      plural: {
        spelling: 'жили',
        soundsLike: '',
        meaning: ['lived (plural)'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
  },
  love: {
    toVerb: {
      spelling: 'любить',
      soundsLike: '',
      meaning: ['to love'],
      points: 0,
      categories: [Category.Verbs],
    },
    theAction: {
      spelling: 'любящий',
      soundsLike: '',
      meaning: ['loving'],
      points: 0,
      categories: [Category.Verbs],
    },
    present: {
      i: {
        spelling: 'люблю',
        soundsLike: '',
        meaning: ['i love'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'любишь',
        soundsLike: '',
        meaning: ['you (single) love'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'любит',
        soundsLike: '',
        meaning: ['he/she loves'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'любим',
        soundsLike: '',
        meaning: ['we love'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'любите',
        soundsLike: '',
        meaning: ['you (plural) love'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'любят',
        soundsLike: '',
        meaning: ['they love'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    future: {
      i: {
        spelling: 'буду любить',
        soundsLike: '**BU**DU LU**BIT**',
        meaning: ['i will love'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'будешь любить',
        soundsLike: '',
        meaning: ['you (single) will love'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'будет любить',
        soundsLike: '',
        meaning: ['he/she will love'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'будем любить',
        soundsLike: '',
        meaning: ['we will love'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'будете любить',
        soundsLike: '',
        meaning: ['you (plural) will love'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'будут любить',
        soundsLike: '',
        meaning: ['they will love'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    past: {
      masculine: {
        spelling: 'любил',
        soundsLike: '',
        meaning: ['loved (single male)'],
        points: 0,
        categories: [Category.Verbs],
      },
      feminine: {
        spelling: 'любила',
        soundsLike: '',
        meaning: ['loved (single female)'],
        points: 0,
        categories: [Category.Verbs],
      },
      plural: {
        spelling: 'любили',
        soundsLike: '',
        meaning: ['loved (plural)'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
  },
  work: {
    toVerb: {
      spelling: 'работать',
      soundsLike: '',
      meaning: ['to work'],
      points: 0,
      categories: [Category.Verbs],
    },
    theAction: {
      spelling: 'работающий',
      soundsLike: '',
      meaning: ['working'],
      points: 0,
      categories: [Category.Verbs],
    },
    present: {
      i: {
        spelling: 'работаю',
        soundsLike: '',
        meaning: ['i work'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'работаешь',
        soundsLike: '',
        meaning: ['you (single) work'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'работает',
        soundsLike: '',
        meaning: ['he/she works'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'работаем',
        soundsLike: 'RA**BO**TEM',
        meaning: ['we work'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'работаете',
        soundsLike: '',
        meaning: ['you (single) work'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'работают',
        soundsLike: '',
        meaning: ['they work'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    future: {
      i: {
        spelling: 'буду работать',
        soundsLike: '',
        meaning: ['i will work'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_single: {
        spelling: 'будешь работать',
        soundsLike: '',
        meaning: ['you (single) will work'],
        points: 0,
        categories: [Category.Verbs],
      },
      he_she: {
        spelling: 'будет работать',
        soundsLike: '',
        meaning: ['he/she will work'],
        points: 0,
        categories: [Category.Verbs],
      },
      we: {
        spelling: 'будем работать',
        soundsLike: '**BU**DYEM RA**BO**TET',
        meaning: ['we will work'],
        points: 0,
        categories: [Category.Verbs],
      },
      you_plural: {
        spelling: 'будете работать',
        soundsLike: '',
        meaning: ['you (plural) will work'],
        points: 0,
        categories: [Category.Verbs],
      },
      they: {
        spelling: 'будут работать',
        soundsLike: '',
        meaning: ['they will work'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
    past: {
      masculine: {
        spelling: 'работал',
        soundsLike: '',
        meaning: ['worked (single male)'],
        points: 0,
        categories: [Category.Verbs],
      },
      feminine: {
        spelling: 'работала',
        soundsLike: '',
        meaning: ['worked (single female)'],
        points: 0,
        categories: [Category.Verbs],
      },
      plural: {
        spelling: 'работали',
        soundsLike: '',
        meaning: ['worked (plural)'],
        points: 0,
        categories: [Category.Verbs],
      },
    },
  },

  // xxx: {
  //   toVerb: {
  //   },
  //   theAction: {
  //   },
  //   present: {
  //     i: {
  //     },
  //     you_single: {
  //     },
  //     he_she: {
  //     },
  //     we: {
  //     },
  //     you_plural: {
  //     },
  //     they: {
  //     },
  //   },
  //   future: {
  //     i: {
  //     },
  //     you_single: {
  //     },
  //     he_she: {
  //     },
  //     we: {
  //     },
  //     you_plural: {
  //     },
  //     they: {
  //     },
  //   },
  //   past: {
  //     masculine: {
  //     },
  //     feminine: {
  //     },
  //     plural: {
  //     },
  //   },
  // },
};

function extractAllWordsFrom(verbObj: any) {
  return [
    verbObj.toVerb,
    verbObj.theAction,
    verbObj.past.masculine,
    verbObj.past.feminine,
    verbObj.past.plural,
    verbObj.present.i,
    verbObj.present.you_single,
    verbObj.present.he_she,
    verbObj.present.we,
    verbObj.present.you_plural,
    verbObj.present.they,
    verbObj.future.i,
    verbObj.future.you_single,
    verbObj.future.he_she,
    verbObj.future.we,
    verbObj.future.you_plural,
    verbObj.future.they,
  ];
}

export const allVerbs: Array<Word> = Object.keys(allVerbsObj)
  .map((word) => extractAllWordsFrom((allVerbsObj as any)[word]))
  .flat();
