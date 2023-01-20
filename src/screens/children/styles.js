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
        flexDirection: "column",
        justifyContent: 'center',
        
    },
    arrowback:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    inneTitleWrapper:{
        backgroundColor: "red",
        // marginBottom: 10
        
    },
    innerheader:{
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent:"space-between",
        paddingRight: 20,
        width: "100%",
        height: "19%",
        marginBottom: 100,
        // marginTop: 10,
        // paddingTop: 50,
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
        // marginTop: 10,
        width: "100%",
        height: "25%",
        display: "flex",
        flexDirection: "row",
        // paddingTop: 20,
        paddingHorizontal: 10,
        paddingVertical:10,
        alignItems: "center",
        backgroundColor: "#FAF9F6",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#00d9b6",
        justifyContent: "space-between"
        
    },
    innerfooterText: {
        color: "#000",
        fontSize: 26,
        fontWeight: "bold",

    },
    headerContainer:{
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
    },
    textColor: {
        color: "#000",
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
    },
    textColorList:{
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
    },
    textColorTitle:{
        color: "#000",
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
        backgroundColor: "red",
        width: "100%",

    },
    textColorInner: {
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        width: "100%",
        fontSize: 23,

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
        top: "16%",
        zIndex: 999,
        marginLeft: 25,
        alignItems: "center",
        flexDirection: "row",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 40,
    },
    textColorFloat:{
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        width: "100%",
        fontSize: 17,
        marginLeft: 10,
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