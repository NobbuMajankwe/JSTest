import React from 'react';


    function getResponse() {
        return new Promise((resolve, reject) => {
          const timeout = Math.floor(Math.random() * 2000);
          setTimeout(() => {
           resolve(timeout);
          }, timeout);
        });
       }

    export const outputResponse = () => {
        let promise = getResponse();
        promise.then(
            (result) => { 
                console.log(result);
            }
          );
    }

    export const WrapperResponse = () => {
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

   