export type CategoryType = {
  text: string;
  name: string;
};

export const sortMethod = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export const sortCategories = [
  { text: '오름차 순', name: sortMethod.ASCENDING },
  { text: '내림차 순', name: sortMethod.DESCENDING },
];
