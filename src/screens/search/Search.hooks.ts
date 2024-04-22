import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { RootStackParamList } from 'router';

export const useSearch = (route: RouteProp<RootStackParamList, 'Search'>) => {
  const { items, placeholder, query: initialQuery } = route.params;

  const [query, setQuery] = useState(initialQuery ?? '');

  const filtredItems = items.filter((item) => {
    const lowerTitle = item.title.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const includes = lowerTitle.includes(lowerQuery);
    return includes;
  });

  return { filtredItems, placeholder, query, setQuery };
};
