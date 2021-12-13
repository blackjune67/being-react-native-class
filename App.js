import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView, StatusBar } from 'react-native';
import Weather from "./Weather";
import * as Location from 'expo-location';

export default class App extends Component {
    state = {
        isLoading: false
    };

    getLocation = async() => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            console.log(location)
        } catch (error) {
            Alert.alert('실패');
        }
    }
    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {isLoading} = this.state;

        return (
            <View style={styles.loading}>
                {/*<StatusBar style="light" />*/}
                <StatusBar hidden={true} />
                {isLoading ? <Weather/> : (
                    <Text style={styles.loadingText}>Getting the fucking weather!!</Text>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loading: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: "flex-end",
    },
    loadingText: {
        fontSize: 38,
        marginBottom: 24,
        paddingLeft: 25
    },
    // temp: {
    //     marginTop: 50,
    //     fontSize: 178,
    // },
    // description: {
    //     marginTop: -30,
    //     fontSize: 60,
    // },
});
