import { useDrag } from "react-dnd";

const DndPic = ({ id, url }) => {
   
    const [{ isDragging }, drag] = useDrag( () => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

<<<<<<< HEAD
<<<<<<< HEAD
    const myImageStyle = { width:'100%', objectFit: 'cover', borderRadius:'6px', opacity: isDragging ? 0.5: 1};

    return ( 
        
        <img src={url} ref = {drag} style={myImageStyle} className={'imgmedia'}/>
=======
=======
>>>>>>> e784d3f8544f4b5ddfb81fcf7b85affcfb4d003a
    const myImageStyle = { width: '200px', height: '150px', objectFit: 'cover', borderRadius:'6px', opacity: isDragging ? 0.5: 1};

    return ( 
        
        <img src={url} style={myImageStyle} ref = {drag}/>
<<<<<<< HEAD
>>>>>>> e784d3f8544f4b5ddfb81fcf7b85affcfb4d003a
=======
>>>>>>> e784d3f8544f4b5ddfb81fcf7b85affcfb4d003a
     );
}
 
export default DndPic;