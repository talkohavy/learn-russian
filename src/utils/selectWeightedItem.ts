type SelectWeightedItemProps<T> = {
  data: Array<T>;
  getItemWeight: (obj: T) => number;
  maxWeight: number;
};

export function selectWeightedItem<T = any>(props: SelectWeightedItemProps<T>) {
  const { data, getItemWeight, maxWeight } = props;

  const totalWeight = data.reduce((sum, item) => sum + (maxWeight - getItemWeight(item) + 1), 0);

  let randomValue = Math.random() * totalWeight;

  for (const item of data) {
    randomValue -= maxWeight - getItemWeight(item) + 1;
    if (randomValue <= 0) return item;
  }
}
