import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
const Layout3 = () => {
    const [check, setCheck] = useState(false)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [pass, setPass] = useState('')
    const generaterPass = (prop1, prop2, prop3, prop4,) => {
        var mess = ""
        if (prop1 === true) {
            mess += 'afafaf'
            if (prop2 === true) {
                mess += 'A'
            } if (prop3 === true) {
                mess += '1'
            } if (prop4 === true) {
                mess += '@'
            }
        }
        else {
            console.log('choose 1');
        }
        setPass(mess)
        // console.log(mess);

    }
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#23235B', width:
                    322, height: 605, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{ color: 'white', width: 184, height: 64, fontWeight: 'bold', fontSize: 25, marginTop: -80, marginBottom: 30 }}>PASSWORD GENERATOR</Text>
                <View style={{ width: 297, height: 55, backgroundColor: '#151537' }}></View>
                <View style={{ width: 297, height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Password length</Text>
                    <TextInput style={{ width: 118, height: 33, backgroundColor: 'white' }} value={pass} />
                </View>
                <Pressable onPress={() => setCheck(!check)}>
                    <View style={{ width: 297, height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Include lower case letters</Text>

                        <Text style={{ width: 25, height: 25, backgroundColor: 'white', fontSize: 23, textAlign: 'center' }} >{check ? '√' : ''}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => setCheck1(!check1)}>
                    <View style={{ width: 297, height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Include upcase letters</Text>

                        <Text style={{ fontSize: 23, textAlign: 'center', width: 25, height: 25, backgroundColor: 'white' }} >{check1 ? '√' : ''}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => setCheck2(!check2)}>
                    <View style={{ width: 297, height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Include number</Text>

                        <Text style={{ fontSize: 23, textAlign: 'center', width: 25, height: 25, backgroundColor: 'white' }} >{check2 ? '√' : ''}</Text>
                    </View></Pressable>
                < Pressable onPress={() => setCheck3(!check3)}>
                    <View style={{ width: 297, height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Include special symbol</Text>

                        <Text style={{ fontSize: 23, textAlign: 'center', width: 25, height: 25, backgroundColor: 'white' }} >{check3 ? '√' : ''}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => generaterPass(check, check1, check2, check3)}>
                    <View style={{ backgroundColor: '#3B3B98', width: 297, height: 55, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>GENERATE PASSWORD </Text>
                    </View>
                </Pressable>

            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B3B98',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Layout3