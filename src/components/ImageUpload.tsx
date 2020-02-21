import React from 'react';
import ImageUploader from 'react-images-upload';

const ImageUpload: React.FC = () => {
    return (
        <ImageUploader
            withIcon={false}
            withPreview={true}
            buttonText='Choose images'
            // onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    )

}



export default ImageUpload