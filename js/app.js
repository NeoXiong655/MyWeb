let scence,cam,rend;
const init=()=>{
    scence= new Three.Scene();
    scence.background =new THREE.Color(0x000000);
    rend =new Three.WebGLRenderer({antialias: true});
    rend.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rend.domElement); 
    const aspect =window.innerWidth/window.innerHeight;
    cam=new THREE.PerspectiveCamera(60,aspect,0.01,5000);
    cam.positon.set(0.5,0,0);

    ambientLight = new THREE.AmbientLight(0x404040, 20);
    scence.add(ambientLight);

    const loader = new THREE.GLTFLoader();
    loader.load("RB18.gltf",(result) => {
        scence.add(result.scence);
        rend.render(scence,cam);
    });
}

init();

