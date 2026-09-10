import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedBackground({ theme }) {
  const containerRef = useRef(null);
  const materialsRef = useRef(null);
  const targetColorsRef = useRef({
    wire: new THREE.Color(theme.wire),
    ridge: new THREE.Color(theme.ridge),
    particle: new THREE.Color(theme.particle),
    glow: new THREE.Color(theme.glow),
  });

  // Jab bhi page/theme badle, sirf target colors update karo (scene restart nahi hoti)
  useEffect(() => {
    targetColorsRef.current.wire.set(theme.wire);
    targetColorsRef.current.ridge.set(theme.ridge);
    targetColorsRef.current.particle.set(theme.particle);
    targetColorsRef.current.glow.set(theme.glow);
  }, [theme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --------------------------------------------------
    // SCENE
    // --------------------------------------------------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000607);

    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(0, 7, 17);
    camera.lookAt(0, 0, -2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // --------------------------------------------------
    // TERRAIN
    // --------------------------------------------------
    const width = 38;
    const depth = 25;
    const segmentsX = 115;
    const segmentsZ = 75;

    const geometry = new THREE.PlaneGeometry(
      width,
      depth,
      segmentsX,
      segmentsZ,
    );
    geometry.rotateX(-Math.PI / 2);

    const position = geometry.attributes.position;
    const basePositions = new Float32Array(position.count * 3);
    for (let i = 0; i < position.count; i++) {
      basePositions[i * 3] = position.getX(i);
      basePositions[i * 3 + 1] = position.getY(i);
      basePositions[i * 3 + 2] = position.getZ(i);
    }

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: targetColorsRef.current.wire.clone(),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const terrain = new THREE.Mesh(geometry, wireMaterial);
    terrain.position.y = -2.7;
    terrain.rotation.x = 0.02;
    scene.add(terrain);

    // --------------------------------------------------
    // BRIGHT RIDGES
    // --------------------------------------------------
    const ridgeGroup = new THREE.Group();
    const ridgeMaterial = new THREE.LineBasicMaterial({
      color: targetColorsRef.current.ridge.clone(),
      transparent: true,
      opacity: 0.65,
    });

    const ridgeCount = 7;
    for (let r = 0; r < ridgeCount; r++) {
      const points = [];
      for (let i = 0; i <= 150; i++) {
        const x = -19 + (38 * i) / 150;
        const wave1 = Math.sin(x * 0.42 + r * 0.6) * (1.0 + r * 0.03);
        const wave2 = Math.sin(x * 0.17 - r * 0.8) * 0.8;
        const y = -1.8 + wave1 + wave2 - r * 0.52;
        points.push(new THREE.Vector3(x, y, -2 - r * 0.75));
      }
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, ridgeMaterial);
      ridgeGroup.add(line);
    }
    scene.add(ridgeGroup);

    // --------------------------------------------------
    // PARTICLE FIELD
    // --------------------------------------------------
    const particleCount = 2600;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 27;
      const y =
        -1.4 +
        Math.sin(x * 0.35) * 0.8 +
        Math.sin(z * 0.28) * 0.7 +
        Math.random() * 1.2;
      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
      particleSizes[i] = Math.random() > 0.9 ? 2.2 : 1;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    particleGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(particleSizes, 1),
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: targetColorsRef.current.particle.clone(),
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --------------------------------------------------
    // ATMOSPHERIC GLOW
    // --------------------------------------------------
    const glowGeometry = new THREE.SphereGeometry(9, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: targetColorsRef.current.glow.clone(),
      transparent: true,
      opacity: 0.025,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.set(4, 1, -5);
    scene.add(glow);

    materialsRef.current = {
      wireMaterial,
      ridgeMaterial,
      particleMaterial,
      glowMaterial,
    };

    // --------------------------------------------------
    // MOUSE PARALLAX
    // --------------------------------------------------
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (event) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // --------------------------------------------------
    // ANIMATION
    // --------------------------------------------------
    const clock = new THREE.Clock();
    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth color transition jab theme/page badle
      wireMaterial.color.lerp(targetColorsRef.current.wire, 0.02);
      ridgeMaterial.color.lerp(targetColorsRef.current.ridge, 0.02);
      particleMaterial.color.lerp(targetColorsRef.current.particle, 0.02);
      glowMaterial.color.lerp(targetColorsRef.current.glow, 0.02);

      // TERRAIN DEFORMATION
      for (let i = 0; i < position.count; i++) {
        const x = basePositions[i * 3];
        const originalZ = basePositions[i * 3 + 2];
        const waveA =
          Math.sin(x * 0.42 + elapsed * 0.65 + originalZ * 0.13) * 0.85;
        const waveB =
          Math.sin(x * 0.18 - elapsed * 0.38 + originalZ * 0.35) * 0.7;
        const waveC = Math.sin(originalZ * 0.45 + elapsed * 0.28) * 0.35;
        const centerLift = Math.exp(-Math.pow(x / 8, 2)) * 0.5;
        position.setY(i, waveA + waveB + waveC + centerLift);
      }
      position.needsUpdate = true;

      // TERRAIN MOTION
      terrain.rotation.z += (targetX * 0.025 - terrain.rotation.z) * 0.025;
      terrain.position.x += (targetX * 0.45 - terrain.position.x) * 0.015;
      terrain.position.y +=
        (-2.7 + targetY * 0.15 - terrain.position.y) * 0.015;

      // PARTICLES
      particles.rotation.y = elapsed * 0.008;
      particles.position.x += (targetX * 0.35 - particles.position.x) * 0.01;
      particles.position.y += (-targetY * 0.2 - particles.position.y) * 0.01;

      // RIDGES
      ridgeGroup.children.forEach((line, index) => {
        line.position.y = Math.sin(elapsed * 0.6 + index * 0.35) * 0.08;
      });

      // GLOW
      glow.scale.setScalar(1 + Math.sin(elapsed * 0.6) * 0.04);

      renderer.render(scene, camera);
    };
    animate();

    // --------------------------------------------------
    // RESIZE
    // --------------------------------------------------
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      wireMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      ridgeGroup.children.forEach((child) => child.geometry.dispose());

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // <-- sirf ek dafa mount, kabhi restart nahi

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div
        className="
          absolute inset-0 z-10
          bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.80)_24%,rgba(0,0,0,0.38)_48%,rgba(0,0,0,0.12)_75%,rgba(0,0,0,0.28)_100%)]
        "
      />
      <div
        className="
          absolute inset-0 z-10
          bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.58)_100%)]
        "
      />
      <div
        className="
          absolute inset-x-0 bottom-0 z-10 h-32
          bg-linear-to-t from-black to-transparent
        "
      />
    </div>
  );
}
