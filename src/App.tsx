
import { useState } from 'react';
import {Musicstream,MusicRecording} from './VanilaJs/StartMusic'

function App() {
  const [audioChunks,setAudioChunks]=useState<string|null>('');

  const StartRecoding=async ()=>{
      const data=await MusicRecording();
      if(data){
      setAudioChunks(data)
      }else{
        alert('Somthing wrong')
      }
  }
  const PlayRecording=()=>{
      if(audioChunks)
      Musicstream(audioChunks)
  }

  return (
      <div>
        <button onClick={PlayRecording}> Start Music</button>
        <button onClick={StartRecoding}>Record Music</button>
      </div>
  
  )
}

export default App
