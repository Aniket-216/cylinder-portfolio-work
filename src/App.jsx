import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
    Bloom,
    EffectComposer,
    // ToneMapping,
} from "@react-three/postprocessing";
import Cyl from "./Cyl";
import "./style.css";

const App = () => {
    return (
        <Canvas
            flat
            camera={{
                fov: 35,
            }}
        >
            <OrbitControls />
            <ambientLight />
            <Cyl />
            <EffectComposer>
                <Bloom
                    mipmapBlur
                    intensity={12.0} // The bloom intensity.
                    luminanceThreshold={0.36} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
                />
                {/* <ToneMapping adaptive={true} /> */}
            </EffectComposer>
        </Canvas>
    );
};

export default App;
