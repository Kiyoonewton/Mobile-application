import { StyleSheet, Dimensions} from "react-native";

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


export const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#00d9b6'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    innerheader:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
        marginBottom: 20,
        marginLeft: "20%"
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 15,
        // marginTop: 30,
    },
    innerfooter:{
        marginTop: 30,
        width: "100%",
        height: "100%",
        paddingTop: 30,
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#FAF9F6",
        
    },
    innerfooterText: {
        color: "#000",
        fontSize: 26,
        fontWeight: "bold",

    },
    textColor: {
        color: "#000"
    },
    welcomeText: {
        fontSize: 25,
        color: "#000",
        fontWeight: 'bold',

    },
    floatHeader:{
        backgroundColor: "#00d9b6",
        width: "90%",
        height: "50%",
        position: "absolute",
        bottom: "-30%",
        zIndex: 999,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftBox:{
        backgroundColor: "#fff",
        borderRightColor: "red",
        height:"100%",
        width: "48%",        
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        // textAlign: "center"
        // display: "flex",
        alignItems: "center"
    },
    rightBox:{
        backgroundColor: "#fff",
        height:"100%",
        width: "48%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        alignItems: "center"
    },
    generateBtn:{
        backgroundColor: '#00d9b6',
        padding: 15,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    generateText:{
        color: "#000",
        fontSize: 20,
    }
    
  });