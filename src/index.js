import React, { useState } from "react";
import { render } from "react-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// credential configuration here
const firebaseConfig = {
    
  };

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

const ReactFirebaseFileUpload = () => {

  const [image, setImage] = useState(null);
    
  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadTask = () => {
    const storageRef = ref(storage, 'images/' + image.name);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log('Uploaded a file!');
    });
  };

  return(
    <div>
    <br />
    <br />
    <input type="file" accept="image/png, image/jpeg" onChange={handleChange} />
    <button onClick={uploadTask}>Submit</button>
    <br />
  </div>
  );
};

render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
