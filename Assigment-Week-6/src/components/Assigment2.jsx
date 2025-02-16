import { useState } from "react";

const words=["hi","my","name","is","for","to","random","word"];
const TOTAL_LINES=1000;
const ALL_WORDS=[];
for(let i=0;i<TOTAL_LINES; i++){
    let sentence="";
    for(let j=0;j<words.length;j++)
    {
        sentence+=(words[Math.floor(words.length*Math.random())])
        sentence+=" "
    }
    ALL_WORDS.push(sentence);
}
function Assigment2(){
    const[sentence , setSentences]=useState(ALL_WORDS);
    const[filter , setFilter]=useState("");
     
    const filteredSentences=sentence.filter(x=>x.includes(filter))
     return <div>
      <input type="text" placeholder="enter the element here" onChange={function(e){
       setFilter(e.target.value)
      }}/>
      {
          filteredSentences.map(word=><div>{word}</div>)
      }
     </div>
  }

export default Assigment2;