import React, { useContext, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({ route, navigatiom }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text>avatarUrl</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigatiom.goBack()
                }}
            />
        </View>

    )
}
const style = StyleSheet.create({
    form: {
        padding: 15
    },
    imput: {
        height: 40,
        borderColor: 'gray',
        borderWidht: 1,
        marginBottom: 10,
    }
})