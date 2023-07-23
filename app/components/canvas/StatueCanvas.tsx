import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Statue = () => {
	const statue = useGLTF("./xenophon/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={1} groundColor="black" />
			<spotLight
				position={[-5, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={statue.scene}
				scale={0.8}
				position={[0, -6, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const StatueCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 60 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={null}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Statue />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default StatueCanvas;
