import React from 'react';
import { firebaseDb } from '../server/firebase';
import { filestackDb } from '../server/filestack';

const UploadImage = props => {
  const renderPicker = () => {
    const ratio = 1 / 1;
    filestackDb
      .pick({
        transformations: {
          crop: {
            aspectRatio: ratio,
            force: true
          }
        }
      })
      .then(function(response) {
        const imageUrl = response.filesUploaded[0].url;

        const date = Date();

        firebaseDb
          .ref('users/' + props.userId)
          .push({
            profileImage: imageUrl,
            date: date
          })
          .then(() => {
            props.fetchProfileImage(props.userId);
          });
      });
  };

  return (
    <div className="class-name">
      <button onClick={() => renderPicker()}>Update Profile Picture</button>
    </div>
  );
};

export default UploadImage;
