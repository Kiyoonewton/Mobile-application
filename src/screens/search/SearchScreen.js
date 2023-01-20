import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { styles} from './styles';
import SearchIcon from '../../assets/img/search.svg'
import SearchBarComponent from '../../components/searchbar/SearchBarComponent'

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchMainWrapper}>
        <SearchBarComponent />
      </View>
        
      <View style={styles.searchInnerWrapper}>
          <SearchIcon width="50%" height="60%" />
        <Text style={styles.textColor}>Explore the beauty of knowledge</Text>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen