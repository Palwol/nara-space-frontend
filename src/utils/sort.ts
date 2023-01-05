import { UserData } from '@/api/api';
import { CategoryType, sortMethod } from '@/constants/sort';

export const sortData = (category: CategoryType, data: UserData[]) => {
  const _data = [...data];
  return _data.sort((a, b) => {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();
    if (aDate === bDate) {
      return a.name > b.name ? 1 : -1;
    }
    return category.name === sortMethod.ASCENDING ? aDate - bDate : bDate - aDate;
  });
};
