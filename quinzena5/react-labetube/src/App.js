//import logo from './img/logo.svg';

//Import Componetes
import CardVideo from './components/CardVideo/index';

//Iframe
import Iframe from 'react-iframe'



import './styles/App.css'


//import Video1 from './pages/video1'

const linstaVideos =[

	'https://storage.googleapis.com/future-apis.appspot.com/1.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/2.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/3.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/4.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/5.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/6.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/7.mp4',
	'https://storage.googleapis.com/future-apis.appspot.com/8.mp4',
	
	];

  const titulos = [

    'Video 1 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 2 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 3 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 4 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 5 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 6 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 7 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',
    'Video 8 - ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.',

  ];



  const Modal = {
    open(){
     //Abrir modal
    //Adicionar a class active ao modal
    //alert("Teste")
    document
    .querySelector('.modal-overlay')
    .classList
    .add('active')

    },
    
    close(){
     //Fechar modal
    //Remover a class active do modal

    document
    .querySelector('.modal-overlay')
    .classList
    .remove('active')
    }
}


function App() {
  
 
  // function reproduzVideo() {
  //   alert("O vídeo está sendo reproduzido")
  // }

  return (
   <>
    
    <div className="modal-overlay">
        <div className="modal">
          <h1>MODAL</h1>

          <div className="videoFull">
                <div className="boxfull"> 
                <Iframe width="100%" height="100%" className="video" src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4"></Iframe>
                </div>
            </div>

          <div className="input-group actions">
              <div onClick={Modal.close} className="button cancel">Cancelar</div>
          </div>

        </div>
    </div>


    <h4>Todos os vídeos</h4>
    
    <div className="lista">
      <div class="listaVideo"onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[0]} 
          titulo={titulos[0]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[1]} 
          titulo={titulos[1]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[2]} 
          titulo={titulos[2]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[3]} 
          titulo={titulos[3]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[4]} 
          titulo={titulos[4]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[5]} 
          titulo={titulos[5]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[6]} 
          titulo={titulos[6]}
          />           
      </div>
      <div class="listaVideo" onClick={Modal.open}> 
          <CardVideo 
          video={linstaVideos[7]} 
          titulo={titulos[7]}
          />           
      </div>
    </div>


    
    </>
    
  );
}

export default App;
