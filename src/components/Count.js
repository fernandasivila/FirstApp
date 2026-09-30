import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export const Count = () => {
    const [count , setCount] = useState(0)

    const decrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

    const increment = ()=>{
        setCount(count+1)
    }

    const reset = ()=>{
        setCount(0)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Taskflow</Text>
            <Text style={styles.subtitle}>Contador de Tareas</Text>
            <View style={styles.countContainer}>
                <View>
                    <Pressable onPress={() => decrement()} >
                        <Text style={styles.button}>-</Text>
                    </Pressable>
                </View>
                <Text style={styles.count}>{count}</Text>
                <View>
                    <Pressable onPress={() => increment()} >
                        <Text style={styles.button}>+</Text>
                    </Pressable>
                </View>
            </View>
            <Pressable onPress={() => reset()}>
            <Text style={styles.reset}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 16,
        color: '#818181'
    },
    countContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    count:{
        fontSize: 50,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    button:{
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#c78989',
        borderRadius: 10,
        color: '#fff'
    },
    reset:{
        color: '#c78989',
        fontSize: 20,
        fontWeight: '500'
    }
})