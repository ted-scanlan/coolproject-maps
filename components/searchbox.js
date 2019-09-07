import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from "native-base";

import styles from "./searchboxStyles.js";

export const SearchBox = () =>{

  return(
    <View style={styles.searchBox}>
    <View style={styles.inputWrapper}>
    <Text style={styles.label} ></Text>
    <InputGroup>
    <Input style={styles.inputSearch} placeholder="Where you going?"/>


    </InputGroup>

    </View>
    </View>
  )
}

export default SearchBox;
