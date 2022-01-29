import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

//Required dependency
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
 <Text style={{color:"black",fontSize:25,justifyContent:"center",alignSelf:"center",margin:60}}>Linear Gradient</Text>
    
      <LinearGradient
        colors={['#95EF95', '#B5F4B5', '#D8FAD8', '#E1F8E1']}
        style={{ flex: 1 }}
      />
      <LinearGradient
        colors={['#FFA030', '#FF8B3E', '#FF774F', '#FF5B67']}
        style={{ flex: 1 }}
      />
       <LinearGradient
        colors={[ '#92DFF3', '#B7E9F7', '#DBF3FA', '#F5FCFF']}
        style={{ flex: 1 }}
      />
       <LinearGradient
        colors={['#FF5772', '#DA5A9D', '#C45BB3', '#905FE5']}
        style={{ flex: 1 }}
      />
        <LinearGradient
        colors={['#BF953F','#FCF6BA', '#B38728','#FBF5B7', '#AA771C']}
        style={{ flex: 1 }}
        //x and y should have a value between 0 and 1
        start={{x:1,y:1}}        
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{ flex: 1 }}
      />
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
