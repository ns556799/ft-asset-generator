import React, { Component } from 'react';
import ColorPallete from './ColorPallete'
import axios from 'axios';

const red = 'url("https://www.metoffice.gov.uk/webfiles/1544018228657/images/video/placeholder_thumb_1152x648.jpg")'

const oColors = {
    paper: '#FFF1E5',
    black: '#000000',
    white: '#FFFFFF',
    claret: '#990F3D',
    oxford: '#0F5499',
    teal: '#0D7680',
    wheat: '#F2DFCE',
    sky: '#CCE6FF',
    slate: '#262A33',
    velvet: '#593380',
    mandarin: '#FF8833',
    lemon: '#FFEC1A'
}

class App extends Component {
    constructor () {
        super();
        this.state = {
          file: null,
          fileLocation: null,
          imageType: {
              type: null,
              height: null,
              width: null
          }
        }
    }


    background() {
        return 'red'
    }

    helpme(e) {
        console.log(e.target)
    }

    submitFile = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file[0]);
        axios.post(`https://react-cors.herokuapp.com/https://ft-node-scraper.herokuapp.com/test-upload `, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
    .then(response => {
        console.log(response)})
        .catch(error => console.log(error));
      }
    
      handleFileUpload = (event) => {
        this.setState({file: event.target.files});
      }
      
      onSelect(e) {
          console.log( e.target.dataset.width)
        this.setState({
            imageType: {
                type: e.target.innerText,
                height: parseInt(e.target.dataset.height),
                width: parseInt(e.target.dataset.width)
            }
        })  
      }

   render() {
        return(
            <div>
                <form onSubmit={this.submitFile}>
                    <input label='upload file' type='file' onChange={this.handleFileUpload} />
                    <button type='submit'>Send</button>
                </form>

                <div className='selector'>
                    <div onClick={this.onSelect.bind(this)} data-width='1200'  data-height='630'>
                        Facebook
                    </div>
                    <div onClick={this.onSelect.bind(this)} data-width='900'  data-height='506'>
                        Twitter
                    </div>
                    <div onClick={this.onSelect.bind(this)} data-width='1200'  data-height='627'>
                        LinkedIn
                    </div>
                    <div onClick={this.onSelect.bind(this)} data-width='1280'  data-height='720'>
                        YouTube
                    </div>
                    <div onClick={this.onSelect.bind(this)} data-width='1160'  data-height='525'>
                        Email
                    </div>
                    <div onClick={this.onSelect.bind(this)} data-width='240'  data-height='135'>
                        Paid Post
                    </div>
                </div>
                <ColorPallete func={this.helpme} colors = {oColors} />
                <div style={{background: this.background(), height: this.state.imageType.height, width:this.state.imageType.width}}>
               
                </div>
            </div>
        )
    }
}
export default App