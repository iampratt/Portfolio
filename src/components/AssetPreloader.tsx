import { useEffect } from 'react';
import useStore from '../store/store';

const models = [
    'face/Shaded/base_basic_shaded.glb',
    'coffee/Pbr/base_basic_pbr.glb',
    'computer/Shaded/base_basic_shaded.glb'
];

export function AssetPreloader() {
    const setAssetsLoading = useStore(state => state.setAssetsLoading);
    const setLoadingProgress = useStore(state => state.setLoadingProgress);

    useEffect(() => {
        let loadedCount = 0;
        
        const loadModels = async () => {
            try {
                const loadModel = (modelPath: string) => {
                    return new Promise<void>((resolve, reject) => {
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', modelPath, true);
                        xhr.responseType = 'blob';
                        
                        xhr.onload = () => {
                            if (xhr.status === 200) {
                                loadedCount++;
                                setLoadingProgress((loadedCount / models.length) * 100);
                                resolve();
                            } else {
                                reject(new Error(`Failed to load ${modelPath}`));
                            }
                        };
                        
                        xhr.onerror = () => reject(new Error(`Network error loading ${modelPath}`));
                        xhr.send();
                    });
                };

                const promises = models.map(loadModel);
                await Promise.all(promises);
                setAssetsLoading(false);
            } catch (error) {
                console.error('Error preloading assets:', error);
                setAssetsLoading(false);
            }
        };

        loadModels();
    }, [setAssetsLoading, setLoadingProgress]);

    return null;
}