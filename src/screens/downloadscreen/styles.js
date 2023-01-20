import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backBtnInner:{
        width: "60%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 30,
        paddingLeft: 20,
        alignItems: "center",
    },
    textColor:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    },
    textColorNote:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 50,
    },
    textColorNotes:{
        color: "#000",
        fontSize: 20,
        marginBottom: 10,
    },
    textColorNav:{
        color: "#d3d3d3",
        fontSize: 15,
        // fontWeight: "bold",
    },
    textColorNavDown:{
        color: "#000",
        fontSize: 15,
    },
    textColorNavActive:{
        color: "#00d9b6",
        fontSize: 15,
    },
    refreshContr:{
        backgroundColor: "#00d9b6",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginTop: 40,
    },
    downloadHeaderNav:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        paddingHorizontal: 55,
        marginTop: 30,
    },
    videoContainer:{
        marginTop: 30,
        alignItems: "center",
    },
    notesWrapper:{
        marginTop: 20,
        width: "90%",
        paddingHorizontal: 25,

    },

})