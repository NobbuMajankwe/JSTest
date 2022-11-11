import React from 'react';
import {View, StyleSheet} from 'react-native';

const ApiFunctions = () => {

    function getResponse() {
        return new Promise((resolve, reject) => {
          const timeout = Math.floor(Math.random() * 2000);
          setTimeout(() => {
           resolve(timeout);
          }, timeout);
        });
       }

    const outputResponse = () => {
        let promise = getResponse();
        promise.then(
            (result) => { 
                console.log(result);
            }
          );
    }

    const WrapperResponse = () => {
        let promise = getResponse();
        promise.then(
            (result) => { 
                console.log(result);
                if (result.value < 800) {
                    resolve(result.response);
                  } else {
                    reject("There is an Error!");
                  }
            }
          );
    }

    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default ApiFunctions;
