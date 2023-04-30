import React, {PropsWithChildren, useEffect, useState} from 'react';
import styles from './SearchBar.styles';
import {TextInput} from 'react-native';

type SearchBarProps = PropsWithChildren<{
  onChange: (searchPhrase: string) => void;
}>;

function SearchBar({onChange}: SearchBarProps) {
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    onChange(searchPhrase);
  }, [searchPhrase, onChange]);

  return (
    <TextInput
      style={styles.input}
      placeholder="Search"
      value={searchPhrase}
      onChangeText={setSearchPhrase}
    />
  );
}

export default SearchBar;
