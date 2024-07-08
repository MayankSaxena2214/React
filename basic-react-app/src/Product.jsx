import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}){
   let oldPrice=["1000","2000","3000","4000"];
   let newPrice=["2000","3000","4000","5000"];
   let description=[["8000 DPI","Smooth"],["8000 DPI","Smooth"],["8000 DPI","Smooth"],["8000 DPI","Smooth"]];
        
            return (
                <div className="Product" >
                    <p>Title</p>
                    <p>{description[idx][0]}</p>
                    <p>{description[idx][1]}</p>
                    <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} description={description[idx]}/>
                </div>
            );
        
}

export default Product;