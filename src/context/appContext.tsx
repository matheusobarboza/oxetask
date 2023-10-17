'use client'

import { createContext, useEffect, useState } from "react"
import { db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamsList } from "../routes/app.routes"
import { Task } from "../interfaces/task"

interface IAppContext {
  tasks: Task[]
  // storageUser: (data: IUser) => void
  setTasks: (tasks: Task[]) => void
}

interface IProps {
  children: React.ReactNode
}

export const AppContext = createContext({} as IAppContext)

export const AppProvider = ({ children }: IProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const loadTasks = async () => {
      const tasksList: Task[] = []
      const tasksCollection = collection(db, 'tasks')
      const tasksSnapshot = await getDocs(tasksCollection)
      
      tasksSnapshot.forEach((doc) => {
        const data = doc.data()
        tasksList.push({ taskId: doc.id, description: data.description || '', status: data.status })
      })

      setTasks(tasksList)
    }

    loadTasks()
  }, [])

  return (
    <AppContext.Provider value={{
      tasks,
      setTasks,
    }}>
      {children}
    </AppContext.Provider>
  )
}