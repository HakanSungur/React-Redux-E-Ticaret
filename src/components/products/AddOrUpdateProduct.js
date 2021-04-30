import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  //product stateni setProduct fonksiyonu ile set edebilirim.
  const [product, setProduct] = useState({ ...props.product });
  const [errors,setErrors]=useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]); //sonsuz döngüye girmesin diye
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name,value);
      
      }
      
    function validate(name,value){
      if(name==="productName" && value===""){
       setErrors(previousErrors=>({ ...previousErrors,productName:"Ürün ismi olmalıdır!"
          }))
    }  
 
  }
  function handleSave(event) {
    event.preventDefault(); //sayfanın refresh olmasını engelliyoruz.
    saveProduct(product).then(() => {
      history.push("/"); //daha önce geldiğimiz sayfalara yönlendirme yapmak için
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories:state.categoryListReducer,
};
}
const mapDispatchToProps = {
  getCategories,
  saveProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
