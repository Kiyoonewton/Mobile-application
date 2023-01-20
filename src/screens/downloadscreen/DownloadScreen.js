import React, { useState } from 'react'
import { RefreshControl, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import BoxDownload from "../../assets/img/download-box.svg" 
import { styles } from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const DownloadScreen = ({navigation}) => {
  const [navScreen, setNavScreen] = useState(1);
  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);


  const switchScreen = (id) => {
    setNavScreen(id)
  }
  return (
    <SafeAreaView>
     <TouchableOpacity style={styles.backBtnInner}>
      <Fontisto name='arrow-left-l' color="#00d9b6" size={30} onPress={() => navigation.goBack()}/>
      <Text style={styles.textColor}>Downloads</Text>
    </TouchableOpacity>
    <View style={styles.downloadHeader}>
      <Text style={styles.textColor}>My Downloads</Text>
      <FontAwesome5 name='clipboard-list' color="#00d9b6" size={30}/>
    </View>
    <View style={styles.downloadHeaderNav}>
      <TouchableOpacity onPress={() => switchScreen(1)}>
        <Text style={navScreen === 1? styles.textColorNavActive : styles.textColorNav}>VIDEOS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => switchScreen(2)}>
        <Text style={navScreen === 2? styles.textColorNavActive : styles.textColorNav}>ClASS NOTE</Text>
      </TouchableOpacity>
    </View>
    <ScrollView
    contentContainerStyle={styles.scrollView}
    refreshControl={
      <RefreshControl
        style={styles.refreshContr}
        refreshing={refreshing}
        onRefresh={onRefresh}
        progressBackgroundColor="#00d9b6"
      />
    }
    >
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={0}>
     { navScreen === 1 && <View style={styles.videoContainer}>
      <BoxDownload width={200} height={300} />
      <Text style={styles.textColorNavDown}>Your download will appear here</Text>
      <Text style={styles.textColorNavDown}>Swipe down to refresh</Text>
    </View>}
    <View style={styles.notesWrapper}>
      <Text style={styles.textColorNote}>
        Notes to read offline
      </Text>
      <Text style={styles.textColorNotes}>
        Download notes to enjoy even when you are offline
      </Text>
    </View>
    </Swiper>
    </ScrollView>
    </SafeAreaView>
  )
}

export default DownloadScreen