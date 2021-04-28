//import logo from './img/logo.svg';

//Import Componetes
//import CardVideo from './components/CardVideo/index';


import './styles/App.css'


//import Video1 from './pages/video1'

const linstaVideos =[

  "Diogo","Vilma"

	// {video1:'https://storage.googleapis.com/future-apis.appspot.com/1.mp4'},
	// {video2:'https://storage.googleapis.com/future-apis.appspot.com/2.mp4'},
	// {video3:'https://storage.googleapis.com/future-apis.appspot.com/3.mp4'},
	// {video4:'https://storage.googleapis.com/future-apis.appspot.com/4.mp4'},
	// {video5:'https://storage.googleapis.com/future-apis.appspot.com/5.mp4'},
	// {video6:'https://storage.googleapis.com/future-apis.appspot.com/6.mp4'},
	// {video7:'https://storage.googleapis.com/future-apis.appspot.com/7.mp4'},
	// {video8:'https://storage.googleapis.com/future-apis.appspot.com/8.mp4'},
	
	];

function App() {
  
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
   <>
    <h4>Todos os vídeos</h4>
    
    <div className="lista">

      <div className="listaVideo"> 
      
      <div class="listaVideo" onClick={reproduzVideo}> 
          <video className="videos" src= {linstaVideos[1]}></video>
          <p>{titulo}</p>
      </div>
      
      </div>
      <div class="listaVideo"> 
        <a target="blank" href="video2.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/2.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</p>
        </a> 
      </div>

      <div class="listaVideo"> 
        <a target="blank" href="video3.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/3.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.g</p>
        </a> 
      </div>

      <div class="listaVideo"> 
        <a target="blank" href="video4.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/4.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</p>
        </a> 
      </div>

      <div class="listaVideo"> 
        <a target="blank" href="video5.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/5.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</p>
        </a> 
      </div>

      <div class="listaVideo"> 
        <a target="blank" href="video6.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/6.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</p>
        </a> 
      </div>

      <div class="listaVideo"> 
        <a target="blank" href="video7.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/7.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</p>
        </a> 
      </div>

      <div class="listaVideo"> 
        <a target="blank" href="video8.html">
        <video class="videos" src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4"></video>
        <p>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</p>
        </a> 
      </div>
      
    </div>

    </>

  );
}

export default App;
