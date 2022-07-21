import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSlice } from '../redux/slice/fetch.slice'

const HomePage = () => {
    const details = useSelector((state: any) => state)
    console.log('details :>> ', details);
    const dispatch = useDispatch()

    const handlesubmit = () => {
        dispatch(fetchSlice.actions.fetchDetails())

    }
    useEffect(() => {
        handlesubmit()
        // dispatch(fetchSlice.actions.fetchDetails())

    }, [])

    return (
        <View>
            <FlatList
                data={details.fetch}
                renderItem={({ item }) => <View>
                    <Text style={styles.text}>{item}</Text>

                </View>
                }
            />


        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 10,
        paddingLeft: 10,
        color: 'blue',
        fontWeight: '400'

    }
})