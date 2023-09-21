import { useState } from 'react';
import DndPic from './DndPic';
import { useDrop } from 'react-dnd';

const Gallery = () => {

    const PictureList =[
        {
            id:1,
            url:"https://media.cnn.com/api/v1/images/stellar/prod/170615135501-iconic-mountains-mount-fitz-roy.jpg",
            alt:"mountain"
        },
        {
            id:2,
            url: "https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg",
            alt:"forest"
        },
        {
            id:3,
            url:"https://www.vladi-private-islands.de/fileadmin/_processed_/6/a/csm_thanda-01_2cccdb7fdb.jpg",
            alt:"island"
        }
    ];

    // state for the dropbox. the state representing what is going into the drop box.
    const [dropbox, setDropbox] = useState([]);

    const [{ isOver }, drop] = useDrop( () => ({
        // specify the type of object to accept. and pass a fxn when the item is dropped.
        accept: "image",
        drop: (item) => addImageToDropbox(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToDropbox = (id) => {
        // check if we are actually dragging
        // console.log(id)
        const picsList = PictureList.filter((pic) => id === pic.id)
        setDropbox((dropbox) => [...dropbox, picsList[0]]);
        // below is used to replace the image dropped.
        // setDropbox([picsList[0]]);
    }

    return ( 
        <div className="gallery-main">
            <div className="gallery-para">
                <h3>Hello ....</h3>
                <p>Kindly drag and drop your preferred images into the box below.</p>
            </div>
            <div className="dnd-img">
                <div className="all-images">
                    <div className="search">
                        <input type="search" />
                        <button>search</button>
                    </div>
                    <div className="imgs">
                        { PictureList.map((pic) => {
                           return <DndPic url={pic.url} id={pic.id} key={pic.id} alt={pic.alt}/>
                        } )}
                        
                    {/* <img src={require("../images/beach.png")}/> */}
                    {/* <img src="./images/beach.png" /> */}
                    </div>  
                </div>
                <div className="drop-box">
                    <p>Your Selections: </p>
                    <div className="chosen-pic">
                    <div className="user-img" ref={drop}>
                        {dropbox.map((pic) => {
                            return <DndPic url={pic.url} id={pic.id} key={pic.id} alt={pic.alt}/>
                        } )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;