# React


### To create text components

<View>
  <Text>
    This is the text
  </Text>
</View>

### To use a declared variable
Use {variable}

### To add styles

Add StyleSheet to React Native header

<Text style={styles.container}>

const styles = StyleSheet.create({
container: {
  flex = 1,
  backgroundColor: yellow,
  alignItems: 'center',
  },
});


### Button (Self closing tag)
<Button title='Update' />
You cannot add Style property to buttons
Its better to create your own custom buttons

### Text input (Self closing tag)
Add Text Input to header

<TextInput onChangeText={(val) => setName(val)} />

Add style of 
{borderWidth:1, borderColor:'black'} 
to see the button

### Using State

Add {useState} to React header

const [name, setName] = *useState('allwyn'); or useState(0) or useState({name:'olly',age:25})*
name: The name of the variable
setName: The name of the function to change the variable

### Lists

const [people, setPeople] = useState([{name:'peaches', key:'1'},{name:'out', key:'2'},{name:'in', key:'3'},{name:'Georgia', key:'4'}]);


To use the array 

{ people.map(item) => {
return(
  <View key={item.key}>
  <Text>{item.key} : {item.name}</Text>
  </View>
)}

*.map* is for iterating through the list
*(item)* is the each iterable item passed into it. You get it automatically.

### ScrollView
To create a scroll to see all the items displayed on the screen

Add ScrollView tag to the React-Native header
Add <ScrollView>
  
  </ScrollView> _around the items to be iterated._
  
 ### FlatList (Self Closing Tag)
 To render items as they appear on the screen and not before. Provides better performance. ID is automatically obtained from elements as long as they have a 'key' attribute.
 
 <FlatList
       data = {people} //To pass the data
       renderItem={({item}) => ( //item is passed into the render one at a time
        <Text style={styles.text}>{item.name}</Text>
       )}
 />
 
To use *id* as *key* when data comes from the database
Add 
keyExtractor={(item) => item.id}
inside <FlatList> tag
  
numColumns={} //To put it into columns


### Touchable Components

To make items like buttons

Add TouchableOpacity to React Native Tag 
It has a onPress={() => functiontopass (id)} capability 

### Filter
Use filters to remove elements that are touched from the Lists with 
*.filter*



### To make _Components_ which are resuable. Create a components folder and create each component inside it with the same headers as App.js.

*import FunctionName from 'PathToFiles'*

Using the Component

*<FunctionName />*




### Props

Add it in the component. Give a name to the prop and pass a value inside it. For eg.

<ComponentName PropName={PropValue} />

Add the component to the header.
import ComponentName from 'ComponentLocation'

To use the value in the child Component, pass it in the Function Definition

export default function FunctionName({PropName})

Use this prop by PropName.innercontent


### To change state in Parent class

Create a Function in the parent class that changes the state with the changeState function and other operations.

Pass it to the Component like a prop.

<ComponentName PropName={PropValue} />

To use the function in the child Component, pass it in the function Definition

export default function FunctionName({FunctionName})

Add the function to the place you want it to be initialized
like onPress in TouchableOpacity


### Spread operator
Takes everything in state and spreads them into the new variable before you add new ones to it
[
 ... theStateData 
]


### Alert

Add Alert to React Native header

To use Alert

Alert.alert('Title of message','The actual message',[{text:'Message displayed on console'}])


### Dismiss Keyboard

Instead of pressing back button to get rid of keyboard.
Add *Touchablewithoutfeedback, Keyboard* to React Native header

Wrap elements with touchable & use onPress to call *Keyboard.dismiss()*

<TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
  
  
### Flexbox

*flex:1*
Become a flexible component and cover the whole screen
Everything inside flex-container becomes a flex item

*flexDirection: 'row' or 'column'*
To display elements in rows or columns

*justifyContent: 'flex-start' or 'center' or 'flex-end' or 'space-between' or 'space-around'*
To display content on main axis



  


