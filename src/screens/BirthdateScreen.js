import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

const BirthdateScreen = ({ user, onComplete }) => {
    const { saveBirthdate } = useContext(AuthContext);
    const [birthdate, setBirthdate] = useState("");

    const handleSave = async () => {
        await saveBirthdate(user.uid, birthdate);
        onComplete();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Birthdate</Text>
            <TextInput placeholder="YYYY-MM-DD" value={birthdate} onChangeText={setBirthdate} style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save Birthdate</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: { width: "80%", padding: 10, margin: 5, borderWidth: 1, borderRadius: 5 },
    button: { backgroundColor: "#007BFF", padding: 10, width: "80%", marginTop: 10, borderRadius: 5, alignItems: "center" },
    buttonText: { color: "white", fontSize: 16 },
    error: { color: "red", marginBottom: 10 },
    toggleText: { marginTop: 10, color: "blue" },
});


export default BirthdateScreen;
