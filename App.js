import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import { Fontisto, AntDesign, FontAwesome, Entypo, Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';



export default function App() {
  const soft = { uri: "https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_02-2-850x412.jpg" };
  const mobile = { uri: "https://img.etimg.com/thumb/msid-56288836,width-650,imgsize-63506,,resizemode-4,quality-100/.jpg" };
  const cPlus = { uri: "https://www.tutorialspoint.com/images/cpp-mini-logo.png" };
  const java = { uri: "https://thumbs.dreamstime.com/z/java-programming-concept-virtual-machine-server-room-background-java-programming-concept-virtual-machine-server-room-148684554.jpg" };
  const stats = { uri: "https://www.analyticssteps.com/backend/media/thumbnail/5566054/4417030_1594110697_probability.jpg" };

  return (

    <ScrollView style={{ flex: 1, paddingBottom: 60 }}>
      <View style={styles.container}>
        <View style={styles.rect1}><Entypo name="menu" size={24} color="red" />
          <Text style={styles.mytext}>Ujoy</Text>
          <View style={styles.rect2}><Fontisto name="plus-a" size={24} color="blue" />
            <Fontisto name="nav-icon-grid-a" size={24} color="black" />
            <FontAwesome name="user-circle" size={24} color="black" />
          </View>
        </View>

        <ImageBackground source={soft} resizeMode="cover" style={styles.soft}>
          <Text style={styles.desc}>
            Software Engineering have courses that are very best world wide.
            which are;Java Programming and Software
            Engineering Fundamentals Specialization.
            Software Design and Architecture Specialization.
            Android App Development Specialization.
          </Text>
        </ImageBackground>
        );



        <ImageBackground source={java} resizeMode="cover" style={styles.java}>
          <View style={styles.owner}>
            <FontAwesome name="user-circle" size={40} color="red">
              <Text style={styles.mytext}>Temo Thuto</Text>
            </FontAwesome>
            <Ionicons name="md-ellipsis-vertical-sharp" size={40} color="red" />
          </View>
          <View style={styles.timeline}><Text style={styles.Text3}>JAVA Programming II</Text>
            <Fontisto name="java" size={30} color="red" />
          </View>
          <Text style={styles.Text2}>BSSMY2S1</Text>
          <View style={styles.attach}>
            <MaterialIcons name="folder-open" size={40} color="red" />
          </View>
        </ImageBackground>


        <ImageBackground source={mobile} resizeMode="cover" style={styles.mobile}>
          <View style={styles.owner1}>
            <FontAwesome name="user-circle" size={40} color="black">
              <Text style={styles.mytext}>Thabo Lebese</Text></FontAwesome>
            <Ionicons name="md-ellipsis-vertical-sharp" size={40} color="black" />
          </View>
          <View style={styles.timeline1}><Text style={styles.Text2}>Mobile Device Programming</Text>
            <AntDesign name="android1" size={24} color="black" />
          </View>
          <Text style={styles.Text2}>BSSMY2S1</Text>
          <View style={styles.attach1}>
            <MaterialIcons name="folder-open" size={40} color="red" />
          </View>
        </ImageBackground>


        <ImageBackground source={cPlus} resizeMode="cover" style={styles.cPlus}>
          <View style={styles.owner2}>
            <FontAwesome name="user-circle" size={40} color="black">
              <Text style={styles.mytext}>Thabo Lebese</Text></FontAwesome>
            <Ionicons name="md-ellipsis-vertical-sharp" size={40} color="black" />
          </View>
          <View style={styles.timeline2}><Text style={styles.Text2}>C++ Programming II</Text>
            <FontAwesome5 name="dev" size={40} color="black" />
          </View>
          <Text style={styles.Text2}>BSSMY2S1</Text>
          <View style={styles.attach2}>
            <MaterialIcons name="folder-open" size={40} color="white" />
          </View>
        </ImageBackground>

        <ImageBackground source={stats} resizeMode="cover" style={styles.stats}>
          <View style={styles.owner3}>
            <FontAwesome name="user-circle" size={40} color="red">
              <Text style={styles.mytext}>Life Tumo</Text></FontAwesome>
            <Ionicons name="md-ellipsis-vertical-sharp" size={40} color="red" />
          </View>
          <View style={styles.timeline3}><Text style={styles.Text3}>Probability and Statistics</Text>
          </View>
          <Text style={styles.Text5}>BSSMY2S1</Text>
          <View style={styles.attach3}>
            <MaterialIcons name="folder-open" size={40} color="blue" />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    paddingBottom: 6000
  },

  rect1: {

    width: '95%',
    height: 50,
    padding: 5,
    backgroundColor: 'silver',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 80



  },
  mytext: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    color: 'red'
  },

  rect2: {
    width: '45%',
    height: 50,
    backgroundColor: 'silver',
    marginLeft: '38%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,

  },
  scrollview: {
    backgroundColor: 'silver',
    flex: 1,



  },
  soft: {
    flex: 1,
    justifyContent: "center",
    width: '98%',
    height: 160,
    flexDirection: 'column',
    paddingVertical: 10,
  },

  desc: {
    color: 'red',
    marginTop: 5,
    fontSize: 18
  },

  java: {
    width: '98%',
    height: 200,
    borderRadius: 20,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginVertical: 3,
    paddingVertical: 10,
    marginTop: -5


  },

  owner: {

    width: '99%',
    height: '25%',
    backgroundColor: '',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  timeline: {
    width: '70%',
    height: '25%',
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    flexDirection: 'row',
    padding: 5,
    paddingVertical: -10
  },

  attach: {
    width: '100%',
    height: '20%',
    backgroundColor: '',
    alignSelf: 'baseline',
    marginBottom: -13,
    alignItems: 'flex-end',
    marginBottom: -10
  },

  Text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  },

  mobile: {
    width: '98%',
    height: 200,
    backgroundColor: '',
    borderRadius: 8,
    alignItems: 'flex-start',
    padding: 20,
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginVertical: 10,
    paddingVertical: 10
  },

  owner1: {

    width: '99%',
    height: '15%',
    backgroundColor: '',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  timeline1: {
    width: '70%',
    height: '25%',
    backgroundColor: '',
    borderLeftWidth: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    flexDirection: 'row',
    padding: 5
  },

  attach1: {
    width: '100%',
    height: '15%',
    backgroundColor: '',
    alignSelf: 'baseline',
    marginBottom: -13,
    alignItems: 'flex-end'
  },

  Text2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'
  },

  Textt: {
    fontSize: 10,
    color: 'black',

  },


  cPlus: {
    width: '95%',
    height: 200,
    borderRadius: 8,
    alignItems: 'flex-start',
    padding: 20,
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginVertical: 10,
    paddingVertical: 20
  },

  owner2: {

    width: '99%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  timeline2: {
    width: '70%',
    height: '25%',
    backgroundColor: '',
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    flexDirection: 'row',
    padding: 5
  },

  attach2: {
    width: '100%',
    height: '15%',
    backgroundColor: '',
    alignSelf: 'baseline',
    marginBottom: -13,
    alignItems: 'flex-end'
  },


  stats: {
    width: '98%',
    height: 200,
    backgroundColor: '',
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
    marginVertical: 3,
    paddingVertical: 10

  },

  owner3: {

    width: '99%',
    height: '15%',
    backgroundColor: '',
    flexDirection: 'row',
    justifyContent: 'space-between'


  },


  timeline3: {
    width: '70%',
    height: '25%',
    backgroundColor: '',
    borderLeftWidth: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'white'
  },

  attach3: {
    width: '100%',
    height: '15%',
    backgroundColor: '',
    alignSelf: 'baseline',
    marginBottom: -13,
    alignItems: 'flex-end'
  },
  Text5: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }


});
