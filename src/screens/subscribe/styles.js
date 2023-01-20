import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flex: 3,
        
    },
    textColor: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold"
    },
    textColorListTitle:{
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        marginVertical: 20,
    },
    textColorList:{
        color: "#000",
        fontSize: 16,
        marginLeft: 10,
    },
    mainListWrapper:{
        paddingHorizontal: 40,
    },
    subwrapper:{
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    subtextColor:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
        // marginLeft: 10,
    },

    backBtnInner:{
        width: "60%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingLeft: 20,
        alignItems: "center",
    },
    inputWrapper:{
        paddingTop: 20,
        paddingLeft: 20,
    },
    innerlistwrapper:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    textWrapper:{
        textAlign: "center",
        alignItems: "center"
    },

    innerTextColor: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },


})