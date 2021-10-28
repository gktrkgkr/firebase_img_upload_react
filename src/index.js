import React, { useState } from "react";
import { render } from "react-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCw-2Q5hUQH2YTe6XbRs8WCZ6sKD7tjZYc",
    authDomain: "coone-330219.firebaseapp.com",
    projectId: "coone-330219",
    storageBucket: "coone-330219.appspot.com",
    messagingSenderId: "226040133408",
    appId: "1:226040133408:web:d9475e63e72d3bb5ba8945"
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