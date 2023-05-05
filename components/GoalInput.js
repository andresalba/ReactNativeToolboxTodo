import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from "react";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function inpHandler(enteredText) {
        console.log('The wrote test is: ', enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoal() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputCont}>
                <Image source={require('../assets/images/goal.png')}  style={styles.img} />
                <TextInput placeholder='Goal' style={styles.textInp} onChangeText={inpHandler} value={enteredGoalText} />
                <View style={styles.buttonCont}>
                    <View style={styles.btn}><Button title="Add Goal" onPress={addGoal} color="#5e0acc" /></View>
                    <View style={styles.btn}><Button title="Cancel" onPress={props.onCancel} color="#f31282" /></View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311b6b',
    },
    img: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInp: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonCont: {
        marginTop: 16,
        flexDirection: "row"
    },
    btn:{
        width: 100,
        marginHorizontal: 8,
    },
})