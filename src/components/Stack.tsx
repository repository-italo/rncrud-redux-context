/**Format */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UseList from '../views/UseList';
import UseForm from '../views/UseForm';
import {Button} from '@rneui/base';
import {Icon} from '@rneui/themed';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <Stack.Navigator
      initialRouteName="UseList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="UseForm"
        component={UseForm}
        options={{title: 'Formulário de Usuário'}}
      />
      <Stack.Screen
        name="UseList"
        component={UseList}
        options={({navigation}) => {
          return {
            title: 'Lista de Usuários',
            headerRight: () => (
              <Button
                type="clear"
                onPress={() =>
                  navigation.navigate('UseForm')
                }
                icon={<Icon name="add" size={25} color="white" />}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
