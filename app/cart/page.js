import Data from "./data.js";
import "./cart.module.css";
import Link from "next/link";
import { handleClientScriptLoad } from "next/script";
export default function Cart() {

    let a = ["템1","템2"]
    return (
      <div>
        <h4 className="title">Cart</h4>
        {a.map( (item,i) => {
            return(
                <CartItem items={item}/>
            )
        })}
        <RedButton color = "blue"/>
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

// props문법
// 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달 시 '변수명 = "데이터"' 형태로 속성처럼 작성
// 자식 컴포넌트 정의에 매개변수로 props
// 자식 컴포넌트에서 쓸 데이터 => 'props.변수명'
function CartItem(props){

    // handleDetailButton = () =>{
        
    // }
    return(
        <div className="cart-item">
            <p>{props.items}</p>
            <p>$40</p>
            <p>10개</p>
            <Link href = "/details">
            <p className="detailButton">+</p>
            </Link>
        </div>
    );
}

function RedButton(props){
  return <button style={{background:props.color}}>RedButton</button>
}