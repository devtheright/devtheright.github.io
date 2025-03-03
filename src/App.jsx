import logo from './logo.svg';
import './App.css';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>JEONG JIWOO</h1>
        <nav>
          <ul>
            <li>
              <a href="#none">Home</a>
            </li>
            <li>
              <a href="#none">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About</h2>
          <p>&#123; 디자인을 코드로 깨우다 &#125;</p>
          <p>안녕하세요. 웹 퍼블리셔 정지우입니다.</p>
        </section>

        <section className={styles.section}>
          <h2>PROJECTS</h2>
          <ul className={styles.pjList}>
            <li>
              <a href="#none">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>웅진씽크빅</h3>
                  <div className={styles.skills}>
                    <span>시맨틱 마크업</span>
                    <span>HTML5</span>
                    <span>SCSS</span>
                    <span>REACT</span>
                    <span>웹 접근성</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="https://www.samsung.com/sec/" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>삼성닷컴 운영</h3>
                  <div className={styles.skills}>
                    <span>시맨틱 마크업</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                    <span>웹 접근성</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#none">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>웅진씽크빅 모바일 LMS</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#none">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>웅진씽크빅 모바일 LMS</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#none">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>AI 금융연계 화상 서비스</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="https://www.sjcf.or.kr" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>세종시문화재단</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                    <span>웹 접근성</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="https://iq.ifac.or.kr" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>인천문화정보 아이큐</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                    <span>웹 접근성</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="https://www.pps.go.kr/kor/index.do" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>조달청 본청</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                    <span>웹 접근성</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="https://www.pps.go.kr/dir/index.do" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>조달청 열린 청장실</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="https://www.bike.go.kr" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>자전거 행복나눔</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#none">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>국가연구개발혁신법 의견수렴</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#none">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.title}>충북도청 유지보수</h3>
                  <div className={styles.skills}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>jQuery</span>
                    <span>반응형</span>
                    <span>웹 접근성</span>
                  </div>
                </div>
              </a>
            </li>

          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Copyright 2025. Jeong Jiwoo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
