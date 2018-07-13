import React, { Component } from 'react';
import Camera from 'react-camera';
import { connect } from 'react-redux';

const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '50%',
  },
  container: {
    width: '40%'
  }
};

 class Picture2 extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
      localStorage.setItem("img2", this.img.src);
    })
    
  }

  

  render() {
    return (
      <div style={style.container}>
        <Camera 
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
       
      </div>
      
    );
  }
}




const mapStateToProps = (state) => ({
    img2 : this.img2
})


export default connect(mapStateToProps)(Picture2)