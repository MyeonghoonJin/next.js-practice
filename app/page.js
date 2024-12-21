import './globals.css';

export default function Home() {

  let name = "명훈"
  const handleSubmit = {}

  return (
    //return 안에는 반드시 하나의 태그로 시작해서 하나의 태그로 끝나야함.병렬적으로 태그 불가
    <div className='main'>
      <h2 className='title'>{name} 스토어</h2>
      <p className='title-sub'>띠기띠기 캅캅</p>
      <div className='signIn-container'>
        <label style={{marginTop : 50, fontSize : 25}}>환영합니다!</label>
        <div className='singIn-input'>
          <div className='id-input'>
            <label>아이디</label><br></br>
            <input type='text' placeholder='아이디'></input>
          </div><br></br>
          <div className='pwd-input'>
            <label>비밀번호</label><br></br>
            <input type='password' placeholder='비밀번호'></input>
          </div><a class="outer-link pull-left" href="#/forgot">아이디/비밀번호 찾기</a><br></br>
          <button 
            className='signIn-button'
            onClick={handleSubmit}
          >로그인
          </button>
        </div>
      </div>
    </div>
  );
}
