import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as Location from 'expo-location';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const onChangeSearch = query => setTerm(query);
  const [location, setLocation] = useState(null);
  const [locationErr, setLocationErr] = useState(null)

  // const [searchApi, results, errorMsg] = useResults;


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View styles={styles.background}>
      <Searchbar
       placeholder="Search"
       styles={styles.search}
       onChangeText={onChangeSearch}
       value={term}
       onIconPress={searchApi}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {locationErr ? <Text>{locationErr}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee'
  },
  search: {
    marginHorizontal: 15
  }
});

export default SearchScreen;
