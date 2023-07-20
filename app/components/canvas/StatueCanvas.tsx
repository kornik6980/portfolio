import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
	const computer = useGLTF("./xenophon/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.25} groundColor="black" />
			<spotLight
				position={[-5, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={0.8}
				position={[0, -6, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 60 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
