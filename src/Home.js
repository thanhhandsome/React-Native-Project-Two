import { Alert, StyleSheet, Text,  TextInput,  View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';

export default function Home({ navigation }){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
      getData();
    },[])

    const getData = () => {
      try {
        AsyncStorage.getItem('UserData')
        .then(value => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);
            setAge(user.Age);
          }
        }

        )
      } catch (error) {
        console.log(error);
      }
    }

    const updateData = async () => {
      if(name.length == 0 || age.length == 0) {
          Alert.alert('Please write your name')
      } else {
          try {
            var user = {
              Name: name,
              Age: age
            }
              await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
              Alert.alert('Yeah! Your data has been updated');
          } catch (error) {
              console.log(error);
          }
      }
    }

    const deleteData = async () => {
      
      try {
          await AsyncStorage.clear();
          navigation.navigate('Login');
      } catch (error) {
          console.log(error);
      }
    }

    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Welcome {name} to world war 2!
        </Text>
        <Text style={styles.text}>
          Your age is {age} 
        </Text>
        <TextInput
        style={styles.input}
        placeholder='Enter your name'
        value={name}
        onChangeText={(value)=> setName(value)}
        />
        <TextInput
        style={styles.input}
        placeholder='Enter your age'
        value={age}
        onChangeText={(value)=> setAge(value)}
        />
        <CustomButton
        title = 'Update'
        color = '#ff7f00'
        onPressFunction={updateData}
        />
        <CustomButton
        title = 'Delete'
        color = '#f40100'
        onPressFunction={deleteData}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10.
    },
    input: {
      width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        // marginTop: 130,
        marginBottom: 10,
    }
})