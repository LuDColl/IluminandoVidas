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
      {items ? (
        <FlatList
          data={filtredItems}
          ListEmptyComponent={<Text>{noData}</Text>}
          keyExtractor={getKey}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          renderItem={({ item }) => {
            const text = getText(item);
            return (
              <Button
                icon={icon}
                mode="outlined"
                contentStyle={styles.contentButton}
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
          style={styles.loading}
          animating={true}
          size="large"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  gap: { height: 16 },
  loading: { flex: 1, justifyContent: 'center' },
  list: { padding: 16 },
  contentButton: { height: 48, justifyContent: 'flex-start' },
});
