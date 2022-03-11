import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground,StatusBar,SafeAreaView, Platform, Alert} from 'react-native';
import { color } from 'react-native-reanimated';
import {MapView,Marker} from 'react-native-maps';


export default class IssLocationScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            location:{},
        }
    }
    getIssLocation=()=>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(response=>{
            this.setState({location:response.data})
        }).catch(error=>{
            Alert.alert('error.message')
        })
    }
    componentDidMount(){
        this.getIssLocation();
    }
    render(){
        if(Object.key(this.state.location).length===0){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Loading...</Text>

                </View>
            )
        }
        else{

        
        return(
            <View style={styles.conatiner}>
                <SafeAreaView style={styles.androidSafeArea}></SafeAreaView>
                <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundimage}>
                <View style={styles.titleContainer}>
                <Text style={styles.titletext}>ISS Location</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map} 
                    region={{
                        latitude:this.state.location.latitude,
                        longitude:this.state.location.longitude,
                        latitudeDelta:100,
                        longitudeDelta:100
                    }} >
                        <Marker 
                        coordinate={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude,
                        }} >
                            <Image source={require('../assets/iss_icon.png')} style={{height:50,
                            width:50}}></Image>
                        </Marker>
                    </MapView>

                </View>
                </ImageBackground>
                </View>
        )
    }
}

}
const styles= StyleSheet.create({
    conatiner:{
        flex:1
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?Statusbar.currentHeight:0
    },
    backgroundimage:{
        flex:1,
        resizeMode:'cover'
    },
    titleContainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    titletext:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    mapContainer:{
        flex:0.6,

    },
    map:{
        width:'100%',
        height:'%100',
    }
})