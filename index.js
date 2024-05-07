const os = require('os');
const tmpDir = os.tmpdir();

const convert = require('fbx2gltf');
convert('fbx/934b17fa-0bd4-49e4-adac-767059068ea6.fbx', 'gltf/1.gltf', ['--khr-materials-unlit']).then(
  destPath => {
    // yay, do what we will with our shiny new GLB file!
  },
  error => {
    // ack, conversion failed: inspect 'error' for details
  }
);