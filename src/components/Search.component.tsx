import { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import SearchBarComponent from './SearchAppBar.component';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export default function SearchComponent<T>({
  items,
  getText,
  getKey,
  onPress,
  onRefresh,
  placeholder,
  noData,
  icon,
}: {
  items?: T[] | null;
  getText: (item: T) => string;
  getKey: (item: T) => string;
  onPress: (item: T) => void;
  onRefresh: () => Promise<void>;
  placeholder: string;
  noData: string;
  icon?: IconSource;
}) {
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const refresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  const filtredItems = items?.filter((item) => {
    const text = getText(item);
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    return lowerText.includes(lowerQuery);
  });

  return (
    <>
      <SearchBarComponent
        query={query}
        setQuery={setQuery}
        placeholder={placeholder}
      />
      {filtredItems ? (
        <FlatList
          data={filtredItems}
          ListEmptyComponent={<Text>{noData}</Text>}
          keyExtractor={getKey}
          showsVerticalScrollIndicator={false}
          style={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          renderItem={({ item }) => {
            const text = getText(item);
            return (
              <Button
                icon={icon}
                mode="outlined"
                contentStyle={styles.button}
                onPress={() => onPress(item)}
              >
                {text}
              </Button>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.gap} />}
        />
      ) : (
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loading}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  gap: { height: 16 },
  button: { height: 48, justifyContent: 'flex-start' },
  loading: { flex: 1 },
});
