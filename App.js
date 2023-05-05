import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [goalStore, setGoalStore] = useState([])

  function startGoal() {
    setModalVisible(true)
  }

  function endGoal() {
    setModalVisible(false)
  }

  function addGoal(enteredGoalText) {
    console.log('The added goal is: ', enteredGoalText)
    setGoalStore((currentGoalStore) => [...currentGoalStore, { text: enteredGoalText, id: Math.random().toString() }])
    endGoal()
  }

  function deleteGoal(id) {
    console.log('item deleted')
    setGoalStore(currentGoalStore => {
      return currentGoalStore.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appCont}>
        <Button title="Add new Goal" color="#5e0acc" onPress={startGoal} />
        <GoalInput visible={modalVisible} onAddGoal={addGoal} onCancel={endGoal} />
        <View style={styles.goalsCont}>
          <FlatList
            data={goalStore}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoal} />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appCont: {
    flex: 1,
    padding: 50,
    backgroundColor: '#1e085a',
  },
  goalsCont: {
    flex: 4,
  },
});