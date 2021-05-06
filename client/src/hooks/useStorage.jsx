import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    
    //any err of the upload
    const [err, setErr] = useState(null);
    //img url that we get back after the img is fully uploaded
    const [url, setUrl] = useState(null);
    //img desc that we get back after the img is fully uploaded
    const [desc, setDesc] = useState(null);



    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (err) => {
            setErr(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            // const createdAt = timestamp();
            const desc = "new image";
            collectionRef.add({ url, desc })
            setUrl(url);
            setDesc(desc);
        }); //is async

    }, [file]);

    return { url, desc, err };

}

export default useStorage;