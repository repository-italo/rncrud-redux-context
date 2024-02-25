import {Button, ButtonGroup} from '@rneui/themed';
import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);
  return (
    <View style={{flex: 8}}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 40, color: 'black'}}>Edite o usuário</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setUser({...user, name})}
          placeholder="Informe o nome"
          placeholderTextColor="grey"
          value={user.name}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setUser({...user, email})}
          placeholder="Informe o Email"
          placeholderTextColor="grey"
          autoCapitalize='none'
          value={user.email}
        />
        <Text style={styles.label}>Foto</Text>
        <TextInput
          style={styles.input}
          onChangeText={photo => setUser({...user, photo})}
          placeholder="Informe a Url da Foto"
          placeholderTextColor="grey"
          value={user.photo}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user,
            });
            navigation.goBack()
          }}>
          <Text style={{color: 'black'}}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 4,
    padding: 15,
    tintColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  input: {
    alignSelf: 'flex-start',
    shadowColor: 'black',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 14,
    width: '85%',
    marginHorizontal: 'auto',
    margin: 5,
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 9,
    paddingVertical: 10,
  },
  label: {
    marginTop: 25,
    alignSelf: 'flex-start',
    fontSize: 17,
    color: 'black',
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    width: '60%',
    alignItems: 'center',
    borderRadius: 14,
  },
});
