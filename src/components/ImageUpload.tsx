import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   container: {
//     position: 'relative',
//     width: '100%',
//     height: '200px',
//   },
// });

const thumbsContainer: any = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb: any = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


const ImageUpload: React.FC = () => {
  // const classes = useStyles();

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: []) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign
          (
            file,
            {
              preview: URL.createObjectURL(file)
            }
          )
        )
      );
    }
  });

  // TODO CHANGE ALL ANY TYPE

  const thumbs = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          alt={file.name}
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default ImageUpload