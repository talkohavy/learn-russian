import { MAX_WEIGHT } from '@src/utils/constants';
import { getRandomObjects } from '@src/utils/getRandomObjects';
import { selectWeightedItem } from '@src/utils/selectWeightedItem';
import type { Word } from '@src/utils/types';

export enum SelectionStrategies {
  EvenChance = 'even-chance',
  Knowledge = 'knowledge',
}

type StrategyProps = {
  data: Array<Word>;
  wordCount: number;
};

const SELECTION_STRATEGIES = {
  [SelectionStrategies.EvenChance]: (props: StrategyProps) => {
    const { data } = props;

    const result = getRandomObjects<Word>(data);

    return result;
  },
  [SelectionStrategies.Knowledge]: (props: StrategyProps) => {
    const { data, wordCount } = props;

    if (data.length <= wordCount) return data;

    const selectedWords: Array<Word> = [];

    for (let i = 0; i < wordCount; i++) {
      const currentlySelectedWord = selectWeightedItem<Word>({
        data,
        maxWeight: MAX_WEIGHT,
        getItemWeight: (item: any) => item.points,
      })!;

      if (!selectedWords.find((word) => word.meaning === currentlySelectedWord?.meaning)) {
        selectedWords.push(currentlySelectedWord);
      } else {
        i--;
      }
    }

    return selectedWords;
  },
};

type SelectKWordsProps = {
  data: Array<Word>;
  wordCount?: number;
  strategy?: SelectionStrategies;
};

function selectKWords(props: SelectKWordsProps) {
  const { data, wordCount = 10, strategy = SelectionStrategies.EvenChance } = props;

  const strategyMethod = SELECTION_STRATEGIES[strategy];

  const selectedWords = strategyMethod({ data, wordCount });

  return selectedWords;
}

export { selectKWords };
