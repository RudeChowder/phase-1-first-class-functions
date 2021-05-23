 function receivesAFunction(callback){
    callback()
 }

 function returnsANamedFunction(){
     const greeting = "Hello world"
          return function greet(){return greeting}
 }

 function returnsAnAnonymousFunction(){
     return () => 500 * 7
 }