import React from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  SafeAreaView 
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'


const SearchBarComponent = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.searchWrapper}>
            <TextInput style={styles.searchBar} placeholder="Search"
            placeholderTextColor="#000"
             />
            <View style={styles.searchContent}>
              <Ionicons name='search-outline' size={20} color="#C0C0C0"/>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default SearchBarComponent