import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView} from 'react-native';

export default class App extends Component {
    state = {
        isLoading: false
    }


    render() {
        const {isLoading} = this.state;

        return (
            <View style={styles.container}>
                {isLoading ? null : (
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>..Getting Loading!</Text>
                    </View>
                )}

                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.weather}
                >
                    <View style={styles.day}>
                        <Text style={styles.temp}>27</Text>
                        <Text style={styles.description}>Sunny</Text>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.temp}>27</Text>
                        <Text style={styles.description}>Sunny</Text>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.temp}>27</Text>
                        <Text style={styles.description}>Sunny</Text>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.temp}>27</Text>
                        <Text style={styles.description}>Sunny</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
    },
    loading : {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: "flex-end",
        paddingRight: 25
    },
    loadingText: {
        fontSize: 30,
        marginBottom: 100
    },
    city: {
        flex: 1.2,
        justifyContent: "center",
        alignItems: "center",
    },
    cityName: {
        fontSize: 48,
        fontWeight: "500",
    },
    weather: {
        // backgroundColor: "blue",
    },
    day: {
        // width: SCRREN_WIDTH,
        alignItems: "center",
    },
    temp: {
        marginTop: 50,
        fontSize: 178,
    },
    description: {
        marginTop: -30,
        fontSize: 60,
    },
});
