const DndPic = ({ id, url }) => {
    // handle drag start
    const onDragStart = (e) => {
        e.DragEvent(id)
        console.log('drag started', id)
    }
    // handle drag enter
    const onDragEnter = (e) => {
        e.DragEvent(id)
        console.log('drag started', id)
    }

    const myImageStyle = { width: '200px', height: '150px', objectFit: 'cover', borderRadius:'6px' };

    return ( 
        <img src={url} style={myImageStyle} draggable="true"/>
     );
}
 
export default DndPic;