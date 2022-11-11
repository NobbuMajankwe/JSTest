import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


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

      export const sumCount = (ary) => {
            let sum = 0;
            ary.forEach(element => {
                sum += element.count;
            });
            return sum;
       }

      export const sortCount = (ary) => {
            let sortedCount = ary.sort((a, b) => b.count-a.count);
            sortedCount.forEach( element, i => {
                element.order = i;
            });
            return sortedCount;
       }

       export const addElement = ( newEntry) => {
            elements.push(newEntry);

           // let myarray = []
           // myarray = sortCount(elements);
           // return myarray;
       }

       let total = sumCount(elements);
       let myarray = [] ;
       myarray = sortCount(elements)

    export const Chain = (newEntry) =>{
      addElement(newEntry).then(()=>{
      sumCount(elements);
        let myarray = [] ;
        myarray = sortCount(elements)
      })
    }
