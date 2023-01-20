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
        alignItems: 'flex-end',

        
    },
    innerheader:{
        alignItems: "flex-end",
        paddingRight: 20,
        width: "60%",
        height: "15%",
        marginBottom: 100,
        // marginLeft: "20%"
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 15,

        // marginTop: 30,
    },
    innerfooter:{
        marginTop: 10,
        width: "100%",
        height: "100%",
        paddingTop: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#FAF9F6",
        alignItems: "flex-start"
        
    },
    innerfooterText: {
        color: "#000",
        fontSize: 26,
        fontWeight: "bold",

    },
    textColor: {
        color: "#000",
        fontSize: 15,
        marginTop: 5,
    },
    textColorInner: {
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        width: "100%",
        fontSize: 20,

    },
    welcomeText: {
        fontSize: 25,
        color: "#000",
        fontWeight: 'bold',

    },
    floatHeader:{
        backgroundColor: "#fff",
        width: "85%",
        height: "10%",
        position: "absolute",
        top: "15%",
        zIndex: 999,
        marginLeft: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopColor: "red",
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