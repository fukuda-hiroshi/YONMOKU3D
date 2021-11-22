let scene;
let camera;
let renderer;
let width = window.innerWidth;
let height = window.innerHeight;
let control;

function main(){
  makeScene();
  var axes = new THREE.AxisHelper(100);
  scene.add(axes);
  makeGameField();
  makePerspectiveCamera();
  makeAmbientLight();
  makeRenderer();
  makeControler();
  renderLoop();  
};

main();

function makeScene(){
  scene = new THREE.Scene();//scene生成
}
/*-------------------------------------
ゲームフィールドの生成
台、柱を生成する
-------------------------------------*/
function makeGameField(){
  let geometry = new THREE.BoxGeometry( 30, 3, 30 );
  let material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
  let cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  
  geometry = new THREE.CylinderGeometry( 1, 1, 20, 32 );//
  material = new THREE.MeshBasicMaterial( {color: 0x00caff} );
  let cylinder = new THREE.Mesh( geometry, material );

  cylinder.position.set(0,10,0);
  scene.add( cylinder );
  }
//PerspectiveCamera生成
function makePerspectiveCamera(){
  camera = new THREE.PerspectiveCamera(45,width / height, 1, 1000);
  camera.aspect = 0.5 * window.innerWidth / window.innerHeight;
  camera.position.set(50,50,50);
  scene.add(camera);
  // camera.lookAt(0,0,0);
}
function makeControler(){
  control = new THREE.OrbitControls(camera, renderer.domElement);
  control.target.set(0,0,0);
  control.minDistance  = 0;
  control.maxDistance  = 6000;
  // control.maxPolarAngle = 100/180*Math.PI;
  // control.minPolarAngle = 80/180*Math.PI;
  control.autoRotate = false;
  control.autoRotateSpeed  = 1.0;
}
function makeAmbientLight(){
  // 全方向ライトとりあえず設定（ライトが無いと真っ黒に描画される）
  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  scene.add( ambientLight );

}
//レンダラー生成
function makeRenderer(){
  renderer = new THREE.WebGLRenderer({antialias:true});
  width = window.innerWidth;
  height = window.innerHeight;
  renderer.setSize(width,height);
  renderer.setPixelRatio(window.devivePixelRatio);
  document.getElementById('scene').appendChild(renderer.domElement);
}
//ジオメトリ生成
function makeGeometory(){
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  // objSetCount++;
}
//レンダリング実行
function renderLoop(){
  // if(objSetCount == totalExhibitNum){
    control.update();
    renderer.render( scene, camera );

    // renderLoop2();
    // return;
  // }
  requestAnimationFrame(renderLoop);
}
// function renderLoop2(){
//   requestAnimationFrame( renderLoop2 );

// }
function user3DmodelLoader(textureURL,objURL){
  let map = textureLoader.load( textureURL+'?'+nowTime,function(){
    let material = new THREE.MeshBasicMaterial({
      map: map,
    });
    objLoader.load(objURL, function ( object ) {
        for(let j = 0; j < object.children.length; j++){
          object.children[j].material = material;
          object.children[j].scale.set(1,1,1);
          object.children[j].position.set(0,0,0);
        };
        scene.add( object );
        objSetCount++;
    });
  },
  undefined,
  function(err){
    objLoader.load(objURL, function ( object ) {
      for(let j = 0; j < object.children.length; j++){
        object.children[j].scale.set(1,1,1);
        object.children[j].position.set(0,0,0);
      };
      scene.add( object );
      objSetCount++;
  });
  });
}
window.addEventListener('resize', function() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}, false );



