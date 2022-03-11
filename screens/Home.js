import React,{Component} from 'react';
import {Text,View,StyleSheet,StatusBar,SafeAreaView,Platform,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.conatiner}>
                <SafeAreaView style={styles.androidSafeArea}></SafeAreaView>
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundimage}>
                <View style={styles.titlebar}>
                <Text style={styles.titletext}>ISS Tracker App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate('IssLocation')}}>
                    <Text style={styles.routeText}>ISS Location</Text>
                    <Text style={styles.knowMore}>{'Know More----->'}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate('Meteor')}}>
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{'Know More----->'}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

}
const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titletext:{
        backgroundColor:'black',
        color:'orange',
        fontSize:20
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    },
    titlebar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white',
        borderWidth:2
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:5,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:100
    },
    backgroundimage:{
        flex:1,
        resizeMode:'cover',

    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15,
    },
    bgDigit:{
        position:'absolute',
        color:'rgba(183,183,183,0.5)',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80,

    }
})