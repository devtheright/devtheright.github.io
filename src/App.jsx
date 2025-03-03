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
        <section className={`${styles.section} ${styles.home}`}>
          <h2 className={styles.title}>POLTFOLIO</h2>
        </section>

        <section className={`${styles.section} ${styles.about}`}>
          <h2 className={styles.title}><span>ABOUT</span></h2>
          <p className={styles.subTitle}>&#123; 디자인을 코드로 깨우다 &#125;</p>
          <p className={styles.desc}>안녕하세요. 웹 퍼블리셔 정지우입니다.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}><span>PROJECTS</span></h2>
          <ul className={styles.pjList}>
            <li>
              <div className={styles.imgBox}></div>
              <div className={styles.textBox}>
                <h3 className={styles.pjTitle}>웅진씽크빅 AIDT</h3>
                <span className={styles.date}>2023.12~2024.03</span>
                <div className={styles.skills}>
                  <span>시맨틱 마크업</span>
                  <span>HTML5</span>
                  <span>SCSS</span>
                  <span>REACT</span>
                  <span>웹 접근성</span>
                </div>
              </div>
            </li>

            <li>
              <a href="https://www.samsung.com/sec/" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.pjTitle}>삼성닷컴 운영</h3>
                  <span className={styles.date}>2023.05~2023.11</span>
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
              <div className={styles.imgBox}></div>
              <div className={styles.textBox}>
                <h3 className={styles.pjTitle}>웅진씽크빅 모바일 LMS</h3>
                <span className={styles.date}>2022.06~2023.04</span>
                <div className={styles.skills}>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>jQuery</span>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.imgBox}></div>
              <div className={styles.textBox}>
                <h3 className={styles.pjTitle}>AI 금융연계 화상 서비스</h3>
                <span className={styles.date}>2022.04~2023.05</span>
                <div className={styles.skills}>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>jQuery</span>
                </div>
              </div>
            </li>

            <li>
              <a href="https://www.sjcf.or.kr" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.pjTitle}>세종시문화재단</h3>
                  <span className={styles.date}>2021.09~2021.12</span>
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
                  <h3 className={styles.pjTitle}>인천문화정보 아이큐</h3>
                  <span className={styles.date}>2020.12~2021.04</span>
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
                  <h3 className={styles.pjTitle}>조달청 본청</h3>
                  <span className={styles.date}>2020.09~2021.02</span>
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
                  <h3 className={styles.pjTitle}>조달청 열린 청장실</h3>
                  <span className={styles.date}>2020.09~2021.02</span>
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
              <a href="https://www.pps.go.kr/green/index.do" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.pjTitle}>조달청 공공녹색구매 통합정보망</h3>
                  <span className={styles.date}>2020.09~2021.02</span>
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
              <a href="https://www.pps.go.kr/kid/index.do" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.pjTitle}>조달청 어린이 세상</h3>
                  <span className={styles.date}>2020.09~2021.02</span>
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
              <a href="https://www.pps.go.kr/eng/index.do" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.pjTitle}>조달청 영문</h3>
                  <span className={styles.date}>2020.09~2021.02</span>
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
              <a href="https://www.bike.go.kr" target="_blank" title="새창 열림">
                <div className={styles.imgBox}></div>
                <div className={styles.textBox}>
                  <h3 className={styles.pjTitle}>자전거 행복나눔</h3>
                  <span className={styles.date}>2020.04~2020.09</span>
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
              <div className={styles.imgBox}></div>
              <div className={styles.textBox}>
                <h3 className={styles.pjTitle}>국가연구개발혁신법 의견수렴</h3>
                <span className={styles.date}>2020.07~2020.08</span>
                <div className={styles.skills}>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>jQuery</span>
                  <span>반응형</span>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.imgBox}></div>
              <div className={styles.textBox}>
                <h3 className={styles.pjTitle}>충북도청 유지보수</h3>
                <span className={styles.date}>2019.02~2020.01</span>
                <div className={styles.skills}>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>jQuery</span>
                  <span>반응형</span>
                  <span>웹 접근성</span>
                </div>
              </div>
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
