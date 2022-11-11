import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Functions = () => {

    const elements = [
        {
          name: 'John',
          count: 5,
        },
        {
          name: 'Sarra',
          count: 13,
        },
        {
          name: 'Kevin',
          count: 38,
        },
        {
          name: 'Shaun',
          count: 5,
        },
        {
          name: 'Gerald',
          count: 31,
        },
        {
          name: 'Amos',
          count: 27,
        },
       ];

       const sumCount = (ary) => {
            let sum = 0;
            ary.forEach(element => {
                sum += element.count;
            });
            return sum;
       }

       const sortCount = (ary) => {
            let sortedCount = ary.sort((a, b) => b.count-a.count);
            sortedCount.forEach(element, i => {
                element.order = i;
            });
            return sortedCount;
       }

       const addElement = ( newEntry) => {
            elements.push(newEntry);
            
           // let myarray = []
           // myarray = sortCount(elements);
           // return myarray;
       }

       let total = sumCount(elements);
       let myarray = [] ;
       myarray = sortCount(elements)

    return (
        <View>
            <Text>1.1: {sumCount(elements)}</Text>
            <Text>1.2: {sortCount(elements)}</Text>
            <Text>1.3: {addElement({name: Shereen, count: 16})}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Functions;
