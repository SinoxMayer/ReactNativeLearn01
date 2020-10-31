import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1",age :30 },
    { name: "Friend #2" ,age :23},
    { name: "Friend #3" ,age :45},
    { name: "Friend #4" ,age :37},
    { name: "Friend #5" ,age :85},
    { name: "Friend #6" ,age :46},
    { name: "Friend #7" ,age :32},
    { name: "Friend #8" ,age :21},
    { name: "Friend #9" ,age :32},
  ];
  return (
    <FlatList
    ////*=>
    ////bu horizontal komutu listeyi sağdan sola şekline çeviriyor 
    //horizontal
    //showsHorizontalScrollIndicator={false}
    ////showsHorizontalScrollIndicator={false} ise bu scroll yaparken altta çıkan scroll bar ı kaldırıyor.
    ////<=*

    //*=>
    //keyExtractor sayesinde herbirini key olarak secmiş oluyorum içlerine girip teker terek
    // { name: "Friend #1",key:'1' },    gibi yazmam gerekmiyor 
      keyExtractor={(friend) => friend.name}
      //<=*
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textSyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
      
    
  );
};

const styles = StyleSheet.create({

    textSyle:{
        marginVertical:50

    }
});

export default ListScreen;
