import React, {PropsWithChildren} from 'react';
import styles from './SearchBar.styles';
import {TextInput} from 'react-native';

type SearchBarProps = PropsWithChildren<{
  searchPhrase: string;
  testID: string;
  onChange: (newPhase: string) => void;
}>;

function SearchBar({searchPhrase, onChange, testID}: SearchBarProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Buscar por nome"
      value={searchPhrase}
      onChangeText={onChange}
      testID={testID}
    />
  );
}

export default SearchBar;
