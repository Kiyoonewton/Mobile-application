import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';

import { styles } from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const MyChildren = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerHeaderWrapper}>
          <View style={styles.arrowback}>
            <TouchableOpacity>
            <Fontisto name='arrow-left-l' color="#000" size={30} onPress={() => navigation.goBack()}/>
            </TouchableOpacity>
            <TouchableOpacity >
            <Text style={styles.textColor}> Parent Materials</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                 <Text style={styles.textColor}>Share App</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
              <Text style={styles.textColorInner}>My Child(ren)</Text>
          </View>         
          
        </View>
        
      </View>
      <View style={styles.floatHeader}>
         <View>
         <Octicons name='link' color="#000" size={20} />
         </View>
        <TouchableOpacity>
        <Text style={styles.textColorFloat}>
          Link Existing Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>

       <View style={styles.innerfooter}>
          <View style={styles.detailswrapper}>
          <Text style={styles.textColorList}>Chijioke Seedhub</Text>
          <Text style={styles.textColorList}>ChijiokeSeedhub@gmail.com</Text>
          <Text style={styles.textColorList}>JSS Two</Text>
          </View>
          <Entypo name='dots-three-vertical' color="#000" size={30} />
       </View>
       <View style={styles.innerfooter}>
          <View>
          <Text style={styles.textColorList}>Chijioke Seedhub</Text>
          <Text style={styles.textColorList}>ChijiokeSeedhub@gmail.com</Text>
          <Text style={styles.textColorList}>JSS Two</Text>
          </View>
          <Entypo name='dots-three-vertical' color="#000" size={30} />
       </View>
       <View style={styles.innerfooter}>
          <View>
          <Text style={styles.textColorList}>Chijioke Seedhub</Text>
          <Text style={styles.textColorList}>ChijiokeSeedhub@gmail.com</Text>
          <Text style={styles.textColorList}>JSS Two</Text>
          </View>
          <Entypo name='dots-three-vertical' color="#000" size={30} />
       </View>
      </View>
   </View>
  )
}

export default MyChildren