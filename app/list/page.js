import "./list.module.css";
import Image from "next/image";
// import TravisScot from "/public/트레비스 스캇 로우.jpg"
export default function List() {

  let name = "명훈"
  const handleSubmit = {}

  let 상품 = ['트레비스 스캇 로우','나이키 에어포스1','아식스 젤 카야노','뉴발란스 993']


  return (
    //return 안에는 반드시 하나의 태그로 시작해서 하나의 태그로 끝나야함.병렬적으로 태그 불가
    <div className="list">
        <h2 style={{textAlign : "center"}}>List</h2>
        <div className="items-container">
            {/* map함수 == JSX상의 for문 */}
            {
                상품.map((item,index) =>{
                    return(
                    <div className="items" key={index}>{/*key속성 => 반복되는 html요소를 구분하기 위해 사용 권장 */}
                        {/* 외부 경로 이미지를 가져올 때는 반드시 width,height 속성을 추가해야함.
                            또한 next.config.json에서 외부 경로 셋팅 필요  */}
                        <img src = {`${상품[index]}.jpg`} className="image"/>
                        <h4>{item}</h4>
                    </div>
                    )
                })
            }
        </div>
    </div>
  );
}
