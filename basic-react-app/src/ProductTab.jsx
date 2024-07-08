import Product from "./Product.jsx";
function ProductTab(){
    // let options=[<li>"Good"</li>,<li>"Better"</li>,<li>"Best"</li>];
    // let options=["good","better","best"];
    // let options2={a:"React",b:"Bootstrap",c:"Vite"};
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    return (
        <div style={styles}>
            
            <Product title="Logitech MX Mater" idx={0}/>
            <Product title="Apple Magic Keyboard" idx={1}/>
            <Product title="Apple Magic Mouse" idx={2}/>
            <Product title="Apple Magic Trackpad"   idx={3}/>
        </div>
    );
}

export default ProductTab;