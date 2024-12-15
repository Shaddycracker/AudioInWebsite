// check browser allow audio or Not allow 


export const MusicRecording=async ()=>{
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const MediaRecording=new MediaRecorder(stream)

       MediaRecording.start()
        let audioChunks:Blob[]=[]
       MediaRecording.addEventListener('dataavailable',(event)=>{
        audioChunks.push(event.data)
        console.log('Array Chunk',audioChunks)
       })
       console.log('2')

       console.log('5')
       MediaRecording.addEventListener('stop',()=>{
          return audioChunks;
       })
       setTimeout(()=>{
          MediaRecording.stop();
       },10000)

    // setTimeout(() => {
    //     const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
    //     console.log('3')
    //   // Create a URL for the audio blob
    //   const audioUrl = URL.createObjectURL(audioBlob);
    //   console.log('4')
    //   MediaRecording.stop();
    //   console.log('6')
    //   return "";
        
    //   }, 10000);
      // Now you can use the 'source' node to process audio data
      // For example, you can connect it to an analyser node for visualization,
      // or to a recorder node to save the audio.
    } catch (err) {

      console.error("Error accessing microphone:", err);
      return null;
    }
  }
  export const Musicstream=async (audioUrl:string)=>{
    const audio = new Audio(audioUrl);
    audio.play();

  }
