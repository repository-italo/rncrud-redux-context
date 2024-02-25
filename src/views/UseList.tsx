import React, {useContext} from 'react';
import {Alert, FlatList} from 'react-native';
import {Text, View} from 'react-native';
import {ListItem, Avatar, Icon} from '@rneui/themed';
import {Button} from '@rneui/base';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  function getItem({item: user}) {

    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UseForm')}>
        <Avatar source={{uri: user.photo}} />

        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );

  }
  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UseForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="#0000FF" />}
        />
        <Button
          onPress={() => confirmUserDelection(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function confirmUserDelection(user) {
    Alert.alert(
      'Excluir Usuário',
      `Deseja excluir permanentemente o usuário ${user.name}`,
      [
        {
          text: 'Sim',
          onPress(){
            dispatch({
              type: 'deleteUser',
              payload: user,
            })
          },
        },
        {
          text: 'Não',
        },
      ],
    );
  }

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getItem}
      />
    </View>
  );
};
