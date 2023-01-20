import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    backButton:{
        flexDirection: "row", 
        justifyContent: "space-evenly",
        width: 240, 
        height: 50, 
        alignItems: 'center', 
        margin: 30, 
        marginRight: 120
    },
    inputWrapper :{
        borderWidth: 1,
        color: '#000',
        backgroundColor: '#6B6B6B',
        width: 315,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10
    },
    alreadyUserWrapper:{
        flexDirection: 'row', justifyContent:"space-between", 
        width: 200, 
        alignItems: "center", 
        marginTop: 5, 
        marginBottom: 80,
        display: "flex", 
    },
    signUpBtn:{
        backgroundColor: '#00d9b6',
        padding: 15,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    signUpText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#000'
    }
})