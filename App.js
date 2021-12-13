import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView, StatusBar} from 'react-native';
import Weather from "./Weather";
import * as Location from 'expo-location';

const API_KEY = "0ca950d865f3ac6b76cd5e5da0212cc2";

export default class App extends Component {
    state = {
        isLoading: false,
        error: null,
        temperature: null,
        name: null
    };

    componentDidMount() {
        this.getLocation();
    };

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            // console.log('==> location : ' + JSON.stringify(location))
            this._getWeather(location.coords.latitude, location.coords.longitude);
        } catch (error) {
            //Alert.alert('실패');
            this.setState({
                error: 'Something went wrong'
            })
        }
    }

    _getWeather = (lat, long) => { //위도, 경도
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    temperature:json.main.temp,
                    name: json.weather[0].main,
                    isLoading: true
                })
                // console.log('==> json : ' + JSON.stringify(json));
            })
    }

    render() {
        const {isLoading, error, temperature, name} = this.state;
        return (
            <View style={styles.loading}>
                {/*<StatusBar style="light" />*/}
                <StatusBar hidden={true}/>
                {isLoading ? (
                    <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/>
                ) : (
                    <View>
                        <Text style={styles.loadingText}>Getting the fucking weather!!!</Text>
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    </View>
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
    errorText: {
        color: "red",
        backgroundColor: "transparent",
        marginBottom: 40
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
