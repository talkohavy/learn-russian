function getRandomObjects<T = any>(arr: Array<T>, itemsCount = 10) {
  if (arr.length <= itemsCount) return arr;

  const randomObjects: Array<T> = [];

  const copyArr = [...arr];

  for (let i = 0; i < itemsCount; i++) {
    const randomIndex = Math.floor(Math.random() * copyArr.length);

    randomObjects.push(copyArr.splice(randomIndex, 1)[0]!);
  }

  return randomObjects;
}

export { getRandomObjects };
