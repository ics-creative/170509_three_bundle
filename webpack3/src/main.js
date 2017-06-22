//import {BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three';

import {WebGLRenderer} from 'three/src/renderers/WebGLRenderer';
import {PerspectiveCamera} from 'three/src/cameras/PerspectiveCamera';
import {BoxGeometry} from 'three/src/geometries/BoxGeometry';
import {MeshPhongMaterial} from 'three/src/materials/MeshPhongMaterial';
import {DirectionalLight} from 'three/src/lights/DirectionalLight';

window.addEventListener('DOMContentLoaded', () => {
  // レンダラーを作成
  const renderer = new WebGLRenderer();
  // レンダラーのサイズを設定
  renderer.setSize(800, 600);
  // canvasをbodyに追加
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  const scene = new Scene();

  // カメラを作成
  const camera = new PerspectiveCamera(45, 800 / 600, 1, 1000);

  // 箱を作成
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshPhongMaterial({color: 0xff0000});
  const box = new Mesh(geometry, material);
  box.position.z = -5;
  scene.add(box);

  // 平行光源を生成
  const light = new DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  const tick = () => {
    requestAnimationFrame(tick);

    box.rotation.x += 0.05;
    box.rotation.y += 0.05;

    // 描画
    renderer.render(scene, camera);
  };
  tick();
});
