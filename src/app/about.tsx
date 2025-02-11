import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router'
import { useAuth } from '../../AuthContext';
import HeaderWithTitle from '../components/header/HeaderWithTitle';
import FullScreen from '../components/container/FullScreen';
import Footer from '../components/shared/Footer';
import Card from '../components/container/Card';
import Scrollable from '../components/container/Scrollable';


export default function About() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        router.replace("/")
      }, 10)
    }
  }), [isAuthenticated, router]

  return (

    <FullScreen>
      <HeaderWithTitle title='About' sheetOptions={["Logout"]} destructiveButton={0} />
      <Scrollable>
        <Text style={styles.cardTitle}>Duty Free</Text>
        <Card title='version 1.0'>
          <View style={styles.cardContent}>
            <Text style={styles.owner}>developed by</Text>
            <Text style={styles.name}>Pedro Afonso Carraro</Text>
            <Link style={styles.address} href={"https://github.com/paccarrar0"}>Link: https://github.com/paccarrar0</Link>
          </View>
        </Card>
      </Scrollable>
      <Footer />
    </FullScreen>

  )
}


const styles = StyleSheet.create({
  cardTitle: {
    marginTop: 30,
    marginBottom: 45,
    alignSelf: "center",
    fontSize: 35
  },
  cardContent: {
    alignSelf: "center",
    marginTop: 35
  },
  name: {
    marginBottom: 10,
    fontSize: 20,
    textDecorationLine: 'underline',
    fontStyle: "italic"
  },
  owner: {
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 40
  },
  address: {
    fontSize: 15,
    color: "#20b2aa"
  }
})