// BirthdateScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useUser } from "../contexts/UserContext"; // Use user context

const BirthdateScreen = ({ onComplete }) => {
    const { createUserData } = useUser(); // Get createUserData function
    const [fname, setFname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [userLocation, setUserLocation] = useState("");

    const handleSend = async () => {
        try {
            const about = "Hi! I'm using TouristTrack"; // Default about text
            await createUserData(fname, birthdate, userLocation, about); // Save data to Firestore
            onComplete(); // Call onComplete callback to navigate to the next screen
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Data ;)</Text>
            <TextInput
                placeholder="First name"
                value={fname}
                onChangeText={setFname}
                style={styles.input}
            />
            <TextInput
                placeholder="yyyy-mm-dd"
                value={birthdate}
                onChangeText={setBirthdate}
                style={styles.input}
            />
            <TextInput
                placeholder="Location"
                value={userLocation}
                onChangeText={setUserLocation}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text style={styles.buttonText}>Save Data</Text>
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
});

export default BirthdateScreen;
