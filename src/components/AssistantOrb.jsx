import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AssistantOrb() {
  const host = useRef(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    el.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.IcosahedronGeometry(1, 5);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x9b75ed, metalness: 0.28, roughness: 0.2,
      transmission: 0.15, thickness: 0.8, clearcoat: 1,
      emissive: 0x3a176d, emissiveIntensity: 0.35
    });
    group.add(new THREE.Mesh(geometry, material));
    const wireGeometry = new THREE.IcosahedronGeometry(1.12, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({ color: 0xc9b5ff, wireframe: true, transparent: true, opacity: 0.22 });
    group.add(new THREE.Mesh(wireGeometry, wireMaterial));
    const light = new THREE.PointLight(0xffffff, 16);
    light.position.set(2, 2, 3);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    let frame;
    const resize = () => {
      const width = Math.max(el.clientWidth, 180);
      const height = Math.min(width, 250);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      group.rotation.x = Math.sin(Date.now() * 0.0005) * 0.12;
      group.scale.setScalar(1 + Math.sin(Date.now() * 0.0015) * 0.025);
      renderer.render(scene, camera);
    };
    resize(); animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      geometry.dispose(); material.dispose(); wireGeometry.dispose(); wireMaterial.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);
  return <div className="assistant-orb" ref={host} />;
}
