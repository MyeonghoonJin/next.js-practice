import "./list.module.css";
export default function List() {

  let name = "명훈"
  const handleSubmit = {}

  return (
    //return 안에는 반드시 하나의 태그로 시작해서 하나의 태그로 끝나야함.병렬적으로 태그 불가
    <div className="list">
        <h2 style={{textAlign : "center"}}>List</h2>
        <div className="items-container">
            <div className="items">
                <h4>상품1</h4>
            </div>
            <div className="items">
                <h4>상품2</h4>
            </div>
            <div className="items">
                <h4>상품3</h4>
            </div>
            <div className="items">
                <h4>상품4</h4>
            </div>
            <div className="items">
                <h4>상품5</h4>
            </div>
            <div className="items">
                <h4>상품6</h4>
            </div>
        </div>
    </div>
  );
}
