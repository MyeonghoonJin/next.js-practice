import Data from "./data";
import "./cart.module.css";
import Link from "next/link";
import { handleClientScriptLoad } from "next/script";
export default function Cart() {

    let a = [1,2]
    return (
      <div>
        <h4 className="title">Cart</h4>
        {a.map( (a,i) => {
            return(
                <CartItem key={i}/>
            )
        })}
      </div>
    )
  }

// 컴포넌트 :              코드 재사용, 코드 축약
// 컴포넌트 이용 :         1. function생성    2.원하는 태그 입력   3. 다른 function 내에서 사용

// 클라이언트 컴포넌트 vs 서버 컴포넌트
// 디폴트는 서버 컴포넌트
// 서버 컴포넌트는 JSX문법에서 자바스크립트를 사용할 수 없음
// 클라이언트 컴포넌트는 JSX문법에서 자바스크립트를 사용할 수 있음
// 단, 클라이언트 컴포넌트는 자바스크립트 + hydration 에 의해 로딩속도가 느림
// 따라서 자바스크립트 기능이 필요한 컴포넌트만 클라이언트 컴포넌트로 만들어서 사용!!

// 클라이언트 컴포넌트 이용 : 최상단(다른곳x)에 'use client' 입력 후 하단에 function(컴포넌트) 작성
function CartItem(){

    // handleDetailButton = () =>{
        
    // }
    return(
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>10개</p>
            <Link href = "/details">
            <p className="detailButton">+</p>
            </Link>
        </div>
    );
}
