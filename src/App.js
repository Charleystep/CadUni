import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements/dist/buttons/Button'
import { UsersProvider } from './context/UsersContext'

const Stack = createStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <createStackNavigator>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Alunos",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "tela de cadastro"
                        }}
                    />
                </Stack.Navigator>
            </createStackNavigator>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#7C00FF'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}