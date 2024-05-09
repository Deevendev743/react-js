const ButtonComponent =(kumar)=>{
    console.log( kumar,"kumar");
    const{text,bgColor,buttonProperties:{height,width},}= kumar;
return(
    <>
    <button style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        
        
    }}
    >
        {text}
        </button>
    </>
);
};

export default ButtonComponent;