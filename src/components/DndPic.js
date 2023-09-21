import { useDrag } from "react-dnd";

const DndPic = ({ id, url }) => {
   
    const [{ isDragging }, drag] = useDrag( () => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const myImageStyle = { width: '200px', height: '150px', objectFit: 'cover', borderRadius:'6px', opacity: isDragging ? 0.5: 1};

    return ( 
        
        <img src={url} style={myImageStyle} ref = {drag}/>
     );
}
 
export default DndPic;