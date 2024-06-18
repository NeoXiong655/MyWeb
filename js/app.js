let scene,camera,renderer;
const init=()=>{
    scene= new THREE.Scene();
    scene.background =new THREE.Color(0x000000);
    renderer =new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); 
    const aspect =window.innerWidth/window.innerHeight;
    camera=new THREE.PerspectiveCamera(60,aspect,0.01,5000);
    camera.positon.set(0.5,0,0);

    ambientLight = new THREE.AmbientLight(0x404040, 20);
    scene.add(ambientLight);

    const loader = new THREE.GLTFLoader();
    loader.load("RB18.gltf",(result) => {
        scene.add(result.scene);
        renderer.render(scene,camera);
    });
}

init();

