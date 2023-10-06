import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
const Layout1 = () => {
    const datas = [
        { username: 'toan', password: '12345' },
        { username: 'van', password: '12345' },
        { username: 'anh', password: '12345' },
    ]
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const checkValue = (a, u, p) => {
        const check = a.some((item, index) => {
            if (item.username === u && item.password === p) {
                return true;
            }
        })
        check ? console.log('true') : console.log('false');

    }
    return (
        <View style={styles.container} >
            <Text style={{ fontWeight: 'bold', fontSize: 33, position: 'absolute', top: 105, left: 30 }}>LOGIN</Text>
            <View style={{ marginTop: 150, marginBottom: 30, alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderColor: 'white', backgroundColor: '#C4C4C4', width: 330, height: 54 }}>
                <Entypo name="user" size={24} color="black" />
                <TextInput value={user} onChangeText={setUser} placeholder='Name' style={{ fontSize: 18, marginLeft: 5, width: 310 }} />
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderColor: 'white', backgroundColor: '#C4C4C4', width: 330, height: 54 }}>
                <MaterialIcons name="lock" size={24} color="black" />
                <TextInput value={password} onChangeText={setPassword} placeholder='Password' style={{ fontSize: 18, marginLeft: 5, width: 260 }} />
                <Ionicons name="eye" size={24} color="black" />
            </View>
            <Pressable onPress={() => checkValue(datas, user, password)}>
                <View style={{ marginVertical: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', width: 330, height: 45 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
                </View>
            </Pressable>


            <View style={{ marginVertical: 5, alignItems: 'center', justifyContent: 'center', width: 330, height: 45 }}>
                <Text style={{ fontWeight: 'bold', }}>CREATE ACCOUNT</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBCB00',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
});
export default Layout1