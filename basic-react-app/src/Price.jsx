export default function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecoration:"line-through",
    }
    let newStyles={
        fontWeight:"bold"
    }
    let style={
        backgroundColor:"lightblue",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
    }
    return (
        <>
            <div style={style}>
          <span style={oldStyles}>{oldPrice}</span>
          &nbsp;
          <span style={newStyles}>{newPrice}</span>
            </div>
        </>
    )
}