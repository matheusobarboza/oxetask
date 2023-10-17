import React from "react"
import { Text, TouchableOpacity, View, FlatList } from "react-native"
import Ionicons from '@expo/vector-icons/FontAwesome';
import { styles } from "../../components/task/styles"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { useAppContext } from "../../context/hook";
import { Task as ITask } from "../../interfaces/task";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Task() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const { tasks, loadTasks } = useAppContext()

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id))
    .then(() => {
      loadTasks()
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTask}>
        <Text style={styles.headerTitle}>OxeTask</Text>
      </View>
      <FlatList
        refreshing={false}
        onRefresh={() => {
          loadTasks()
        }}
        style={{ paddingTop: 20, maxHeight: '72%' }}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }: { item: ITask }) => (
          <View style={[styles.containerTasks, styles.shadowProp]}>
            <BouncyCheckbox
              size={28}
              fillColor="#17E0BC"
              unfillColor="#FFFFFF"
              text={item.description}
              textStyle={{
                paddingHorizontal: 20,
                fontWeight: '500',
                fontSize: 17,
                color: '#000',
                maxWidth: 170,
              }}
              innerIconStyle={{ borderWidth: 3, borderColor: '#e1e1e1' }}
              onPress={(isChecked: boolean) => { }}
            />
            <View style={styles.containerIcons}>
              <TouchableOpacity
                style={[styles.btnDeleteTasks, { backgroundColor: '#17E0BC' }]}
                onPress={() => {
                  navigation.navigate('Details', {
                    description: item.description,
                    taskId: item.taskId,
                  })
                }}
              >
                <Ionicons name="pencil-square-o" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnDeleteTasks, { borderTopRightRadius: 20, borderBottomRightRadius: 20, }]}
                onPress={() => {
                  deleteTask(item.taskId)
                }}
              >
                <Ionicons name="trash" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={[styles.btnNewTask, styles.shadowProp]}
        onPress={() => navigation.navigate('NewTask')}
      >
        <Text style={styles.btnIcon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

