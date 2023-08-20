import './buy.css'
import p49 from '../../img/xx99'
import See_button from '../See_button';
function Buy() {
  return (
    <div className="product-buy">
      <div className="buy-left">
        <img src={p49} alt="" />
      </div>
      <div className="buy-right">
        <span>NEW PRODUCT</span>
        <h6>XX99 Mark II Headphones</h6>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
              <div className="coin">$ 2,999</div>
              <div className="use">
                  <div className="count">
                      <See_button to="add" clas="buy-see"/>
                  </div>

              </div>
      </div>
    </div>
  );
}

export default Buy