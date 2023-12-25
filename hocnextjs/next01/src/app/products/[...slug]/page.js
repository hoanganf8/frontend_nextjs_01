const ProductPage = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <h1>Danh mục: {slug[0]}</h1>
      <h1>Sản phẩm: {slug[1]}</h1>
    </div>
  );
};

export default ProductPage;
