import { Link } from "react-router-dom";
import "./slide_3.css";
function Slide_3() {
  
  const handleClick = (event) => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="slide">
      <div className="card-slide">
        <img
          className="img1"
          src="https://s3-alpha-sig.figma.com/img/0d2e/6fc8/87d6513c34f10bac56e324f01ec77185?Expires=1693180800&Signature=W4w-sDgmPMkg2dVzcOpoqnVfKJWsMXeA1Lz-kyUoVlY-Ym5FPznQkwqjxU2tn9cZHPTdxzq8z8FlL3QLlDVF4lnO6KaXp~2Ww3RRpy1enTFYXiF6UAJqJ~AH47Vi-eGGCTQZWsFeQd-gbX5zJ6qhwzc9~yycq4a-q2ObF-IDA4VytTZMLUz5wwQkj3TrYcysPl2lObzUuvgGmvrjyj93z6uO4lZjOKIN8MFho2zspjLmDxeCXSBloDNOtQapVvysS2Wl1LnicDFXdfpoPUfzBA3OQyvoECIeJtAhQNHnmkjCzMqmf-H8O43i5rfJCpkQN55ORqSnWs01sePDGBpA~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <h2>HEADPHONES</h2>
        <Link onClick={handleClick} to="/headphones">
          Shop{""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none">
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
      <div className="card-slide">
        <img
          className="img2"
          src="https://s3-alpha-sig.figma.com/img/e0c8/6dd2/a7f4c7505f96ce15449ca178ce6b7ad1?Expires=1693180800&Signature=NVrTuLbdvTKh4dxwzoZPgq6YjnNLu8KVI9FAnDSBWPp0cwvTZeL0s2dFnWTi6F1e3GamTaBiqWtuokM~bWWh8U69sPIUX3lJLkha~KAJlGqCI7t1VM0n08CKVkDP9UViW7El5Un1ivxDp1sdLF09kyyZe0kfljAt94X~9823oD2xasXzNxg3yiBU7j-NRmUBk-~OPX871FNzSvaTcVc7aCy5xZLKDASGffU-rTclr22BayJssJActMtEFrzWKBjewhhfSF2qmCWIBUf1vrirRqlu-ID5j7Lq~yOf2YtX5bAGL0j0-Otr-HR-2vPDmlP1k7pF44Ot192oBpBQvzYUwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <h2>SPEAKERS</h2>
        <Link onClick={handleClick} to="/speakers">
          Shop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none">
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
      <div className="card-slide">
        <img
          className="img3"
          src="https://s3-alpha-sig.figma.com/img/d47b/304d/532a222f08c1500c16aa3ed52c16aa20?Expires=1693180800&Signature=md8yNfJaCuVRRRY30JWHfmDCEYbatriqbwSePONU~WSbKIG234YOQe8q2QywUTgOEaSD1rrtAY8ExUkNMfEuwg9otxCrIB3fqtvQ36pGrYoeYQwdFs1LN~7xUnyZMo-YRwHcjCe2n4o4c4HKae3wt9p83FeT5c4qc1OLBvH5eJPTsG57KeUN2nhw6-fk3wvaLJ73Thv9~c8X3L-Pb2qyiN4TNsbHaBIj61TLUuZ20J9YP~uPUIPm1BPbaAIilDM7P2NgiVMIjXIrp2W59UWDfEJw7P4oMKAs4pAX6mYhcmn7Z8NMdfOFn5yEumasJVnZV3HRpN9lsPVnloBKvS6O~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <h2 className="three-h2">EARPHONES</h2>
        <Link onClick={handleClick} className="three-a" to="/earphones">
          Shop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none">
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Slide_3;
