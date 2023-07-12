export const ProductImage = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div className="product-title-resp">{item.name}</div>
            <div className="product-image">
              <a href="">
                <img className="productImg" src={item.image} alt="" />
              </a>
            </div>
          </>
        );
      })}
    </>
  );
};
