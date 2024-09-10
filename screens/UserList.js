import React, { useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getUserList } from '../components/redux/action';
import { useDispatch, useSelector } from 'react-redux';

const UserList = ({ navigation }) => {

    const dispatch = useDispatch()
    const userList = useSelector(state => state.reducer.userList)
    useEffect(() => {
        dispatch(getUserList())
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>
                User List Screen
            </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <ScrollView>
                {userList?.map((item, index) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>
                                {item.firstName} {item.lastName}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default UserList;
