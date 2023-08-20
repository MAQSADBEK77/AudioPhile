import "./home.css";
import See_button from "../../components/See_button";
import Slide3 from "../../components/Slide_3";
import zx7_img from "../../img/speaker-zx7.jpg";
import ManHeadphone from "../../components/ManHeadphone";
function Home() {
  return (
    <div className="home">
      <div className="xx99-container">
        <div className="xx99">
          <span>NEW PRODUCT</span>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <See_button to="/product/xx99" clas="home-see" />
        </div>
      </div>
      <div className="container">
        <Slide3 />
        <div className="zx9">
          <div className="zx9-left">
            <img src="https://s3-alpha-sig.figma.com/img/e0c8/6dd2/a7f4c7505f96ce15449ca178ce6b7ad1?Expires=1693180800&Signature=NVrTuLbdvTKh4dxwzoZPgq6YjnNLu8KVI9FAnDSBWPp0cwvTZeL0s2dFnWTi6F1e3GamTaBiqWtuokM~bWWh8U69sPIUX3lJLkha~KAJlGqCI7t1VM0n08CKVkDP9UViW7El5Un1ivxDp1sdLF09kyyZe0kfljAt94X~9823oD2xasXzNxg3yiBU7j-NRmUBk-~OPX871FNzSvaTcVc7aCy5xZLKDASGffU-rTclr22BayJssJActMtEFrzWKBjewhhfSF2qmCWIBUf1vrirRqlu-ID5j7Lq~yOf2YtX5bAGL0j0-Otr-HR-2vPDmlP1k7pF44Ot192oBpBQvzYUwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="zx9-right">
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <See_button to="/product/zx9" clas="speaker-see" />
          </div>
        </div>
        <div className="zx7">
          <div className="zx7-left">
            <h4>ZX7 SPEAKER</h4>
            <See_button to="/product/zx7" clas="see_speaker2" />
          </div>
          <div className="zx7-right">
            <img src={zx7_img} alt="" />
          </div>
        </div>
        <div className="earthphone-home">
          <div className="earthphone-left">
            <img src="https://s3-alpha-sig.figma.com/img/86bb/9423/fa199827480977a028c4dfc1f770ab02?Expires=1693180800&Signature=i8R8gIvFKIrBvw76L9PS1-T-UHzq475jGpE4EiSz2hG1FL9Sb73YWPiXSOfG9zmBdvBuGLmh8uMXrMW4KBjW93elWV4HOXujMJ7CPGGeTvz4dpZUvmFGnOZllJBGoBY7Ntk2OY1PZXM-ltnX2I84RvhY-4GuGzaGpS4i5H2VoNjOvqAGi5Hql3q6imV-DhJtG7qDlFan-QgbLWxMNm9P~lYQGmzeZ8-LtE5V9aBS3wWVlN877dmPTi3BggBvevIw2fZGkbW9VCb5rXH5-4hS1hWKLFhKDqFT5TLSbCSgS97F8UEitBTixMR~kQeo8L6VNXdLJUI11DSazP-Jp59VJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="earthphone-right">
            <div className="right-child">
              <h4>YX1 EARPHONES</h4>
              <See_button to="/product/yx1" clas="see_speaker2" />
            </div>
          </div>
        </div>
        <ManHeadphone />
      </div>
    </div>
  );
}

export default Home;
