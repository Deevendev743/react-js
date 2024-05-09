let Cards = (props)=>{
    const{
        id,mobile,Price,image,height,width,Description
    }=props
    return(
        <div>
        
    

<div className="card" style={{ width: "220px", height:"330px", border:"2px solid red",marginRight:"60px", borderRadius:"10px", padding:"20px",}}>
  <img src={image} height={170} width={200} className="card-img-top" alt="..." />
  <div className="card-body">
    <h3 className="card-title">Mobile : -{mobile}</h3>
    <p className="card-text">{id} 
    <h4> <p>Description : -{Description}</p></h4>
    </p>
    <h4> Price : - {Price}   </h4>
    <a href="#"
    style={{position:'relative',left:'-5%',padding:'5px 20px'}} className="btn btn-primary">
  
    </a>
    </div>
  </div>
</div>
    )

}
export default Cards;