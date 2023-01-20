import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton:{
        flexDirection: "row", 
        justifyContent: "space-evenly",
        width: 240, 
        height: 50, 
        alignItems: 'center', 
        margin: 90, 
        marginRight: 200
    },
    emalInputField: {
        borderWidth: 1,
        color: '#000',
        backgroundColor: '#6B6B6B',
        width: 315,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    passwordInputField: {
        borderWidth: 1,
        color: '#000',
        backgroundColor: '#6B6B6B',
        width: 315,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    loginBtn : {
        backgroundColor: '#00d9b6',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#000'
    },
    newToAfrilearnTextWrapper:{
        display: "flex", 
        flexDirection: 'row', justifyContent:"space-between", 
        width: 200, 
        alignItems: "center", 
        marginTop: 10
    }
})