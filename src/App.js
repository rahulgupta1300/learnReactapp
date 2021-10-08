
// import './App.css';
// 1st to define comp.
// import User1 from './Example/User1';
// function App() {
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <User1/>
//     </div>
//   );
// }

// export default App;


//2nd way:)
// function App() {
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <User1/>
//       <User1/><User1/><User1/>
//     </div>
//   );
// }

// function User1() {
//   return (
//     <div>
//       <h1>hello world, there is check file react</h1>
//     </div>
//   );
// }

// export default App;


//3rd way:)
// ek compoment k ander dusrey componet ko define krr k woska use krr sktey h 
      // import './App.css';
      // function App() {
      //                 function User1() {
      //                   return (
      //                     <div>
      //                       <h1>hello world, there is check file react</h1>
      //                     </div>
      //                   );
      //                 }
        
      //   return (
      //     <div className="App">
      //       <h1>hello world</h1>
      //       <User1/>
      //     </div>
      //   );
      // }
      // export default App;


// 1st way to defin class compontent:)

// import Cmt from './Example/Class-component';
// import './App.css';
//  function App() {
   
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <Cmt/>
//     </div>
//   );
// }
// export default App;


// 2nd way :)
// import React,{Component} from "react";
// import './App.css';
//  function App() {
//   class Cmt  extends Component
//   {
//       render()
//       {
//           return(
//               <h1>this style is class componet</h1>
//           )
//       }
//   }
   
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <Cmt/>
//     </div>
//   );
// }

// class Cmt  extends Component
// {
//     render()
//     {
//         return(
//             <h1>this style is class componet</h1>
//         )
//     }
// }

// export default App;


// Click Event and fuction ::))


// import "./App.css";
// export default function App() {
//   function Apple(){
//     alert("fuction called");
//   }
//   return(
    
//     <div className="App">
//       <h1>hello world</h1>
//       {/*  // 1...Yaha automatic funtion chll ja rha h*/}
//            {/* <button onClick={Apple()}>click me</button> */}
//       {/* eska soltion  */}
//           {/* <button onClick={Apple}>click me</button><br/><br/> */}
//           {/* <button onClick={()=>Apple()}>click me</button><br/><br/> */}


//       {/* abb agre hmey alert yhi lgana ho tbb.. to automatick chll jayega */}
//           {/* <button onClick={alert("hello problem")}>click me</button><br/><br/> */}
//       {/*soltion fat arrow funtion k use krna h tmko  */}
//           {/* <button onClick={()=>alert("hello soltion is fat arow funtion")}>click me</button><br/><br/> */}
//     </div>
    
//   );
// }



// Now usestate problem ::))

// import "./App.css";
// export default function App() {
    
//     let data="letgyaa yaha";
//     function Apple() {
//         data="problem";
//       alert(data);
//   }
//   return(
    
//     <div className="App">
//     {/* yaha nichey data update nhi hua esliye hm state and props k use krte h */}
//       <h1>{data}</h1> 

//       <button onClick={Apple}>click me</button><br/><br/>
//     </div>
    
//   );
// }


// import "./App.css";
// export default function App() {
    
//     let data="problem";
//     function updateData() {
//         data="Soltion";
//       alert(data);
//   }
//   console.log("__________");
//   return(
    
//     <div className="App">
    
//       <h1>{data}</h1> 

//       <button onClick={updateData}>click me</button><br/><br/>
//     </div>
    
//   );
// }


// import { useState } from "react";
// import "./App.css";
// export default function App() {
    
//    let [data, setdata]=useState("problem");
//     function updateData() {
      
//       alert(data);
//       setdata("soltion");
     
//   }
//   console.log("__________");
//   return(
    
//     <div className="App">
    
//       <h1>{data}</h1> 

//       <button onClick={updateData}>click me</button><br/><br/>
      
//     </div>
   
    
//   );
// }





// import { useState } from "react";
// import "./App.css";
// export default function App() {
    
//    let [data, setdata]=useState(0);
//     function updateData() {
      
      
//       setdata(data+1);
     
//   }
//   console.log("__________");
//   console.log(data+1);
//   return(
    
//     <div className="App">
    
//       <h1>{data}</h1> 

//       <button onClick={updateData}>click me</button><br/><br/>
      
//     </div>
   
    
//   );
// }






// use state in class component :))

// thise is class componet flow:))
// import React, {Component} from "react";
// import "./App.css";
// class App extends Component {

//   render(){
//     return(
//       <div className="App">
//         <h1>hello class compoment</h1>
//       </div>
//  );
//   }
// }
// export default App;

// import "./App.css";
// import React,{Component} from "react";

// class App extends Component {
  
//   constructor() 
//               {
//                 super();
//                 this.state= { data:"hello the ", val:"okay",no:0 }
//               }
//   apple()
//         {
//           // alert("apple function call ther");
//           this.setState({data:"update value there", val:"ckkk", no:this.state.no+1});
          
//         }
//   render(){
//               return(
//                 <div className="App">
//                   <h1>{this.state.data}</h1>
//                   <h1>{this.state.val}</h1>
//                   <h1>{this.state.no}</h1>

//                   <button onClick={()=>this.apple()} >updateData</button>
//                 </div>
//               );
//           }
// }
// export default App;







// Props in Functionl Component :))

import "./App.css";
import React from "react";
 import UseProps from "./UseProps";
function App()
{
  return(
    <div className="App">
      <h3>hello props</h3>

      <UseProps pro="prameter gyya" email="rhau@gmail.com" mobile="900777"/>


      {/* multiple vale sand below */}
      <UseProps  other={"hmm h"} />
    </div>
  )
}
export default App;

