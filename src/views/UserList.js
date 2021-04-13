import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { Button, Icon, ListItem } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) { //função do delete grafica
        Alert.alert('Excluir Usuário', 'Deseja Excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button //botão para edicão
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="purple" />}
                />
                <Button //botão delete
                    onPress={() => ponfirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }
    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{ source: { uri: user.avatarUrl } }}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm')}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                database={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}