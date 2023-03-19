import { useMemo, useRef, useState } from "react";
import imageStyle from './InspoImage.module.css';

function InspoImage() {

    const fileInput = useRef(null);
    const [imageFile, setImageFile] = useState({
        filename: '',
        fileUrl: ''
    });

    const showImage = useMemo(() => {
        if(imageFile.fileUrl == '') {
            return <label className={imageStyle.NoImage}>(텅~)</label>
        }
        
        return <img src={imageFile.fileUrl} style={{width: "80%"}}/>
    }
    ,[imageFile]
    )

    const onClickHandler = (e) => {
        fileInput.current.click();
    }

    const onChangeHandler = e => {
        console.log(e.target.files[0]);
        setImageFile({
            filename: e.target.files[0].name,
            fileUrl: URL.createObjectURL(e.target.files[0])
        });
    }

    return (
        <div className={imageStyle.Container}>
            {showImage}
            <input type="file" ref={fileInput} onChange={onChangeHandler} style={{display: "none"}}></input>
            <button onClick={onClickHandler} className={imageStyle.UploadButton}>{imageFile.fileUrl? '이미지 바꾸기': '이미지 올리기'}</button>
        </div>
    );
}

export default InspoImage;