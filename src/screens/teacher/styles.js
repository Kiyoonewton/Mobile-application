import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textColor:{
        color: "#000"
    },
    addClassBtn:{
        flexDirection: "row",
        alignContent: "flex-end",
        paddingTop: "8%",
        paddingLeft: "40%" ,
    },
    innerwrapper:{
        flexDirection: "row",
        justifyContent:"space-evenly",
    },
    dotwrapper:{
        marginLeft: 50,
    },
    welcomeheader:{
        marginTop: 20,
        paddingHorizontal: 20,

    },
    textColorWelcome:{
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",

    },
    textColorInner:{
        color: "#000",
        marginRight: 20,
        fontSize: 18,
    },
    textColorInnerT:{
        color: "#000",
        marginRight: 20,
        fontSize: 18,
    },
    innerwelcome:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
    },
    subjectContainer:{
        marginTop: 20,
        paddingHorizontal: 20,
    },
    subjectHeader:{
        color: "#000",
        marginRight: 20,
        fontSize: 20,
        fontWeight:"bold",
    },
})