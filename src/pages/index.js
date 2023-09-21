import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import headerBanner from '@site/static/img/pic_banner.webp';
import ArrowRightSvg from '@site/static/img/arrow_right.svg';

import picContent1 from '@site/static/img/pic_content01.webp';
import picContent2 from '@site/static/img/pic_content02.webp';
import picContent3 from '@site/static/img/pic_content03.webp';
import picContent4 from '@site/static/img/pic_content04.webp';
import picContent5 from '@site/static/img/pic_content05.webp';

import picAccount from '@site/static/img/pic_account.webp';
import picCombine from '@site/static/img/pic_combine.webp';
import picPost from '@site/static/img/pic_post.webp';

import styles from './index.module.css';

function JumpButton(props) {
  const { children, className, native, ...params } = props;
  if (native) {
    return (
      <a {...params} className={styles['jump__button']}>
        <span>{children}</span>
        <ArrowRightSvg />
      </a>
    );
  }
  return (
    <Link {...params} className={styles['jump__button']}>
      <span>{children}</span>
      <ArrowRightSvg />
    </Link>
  );
}

function HomeMain() {
  return (
    <main>
      {/* KeepShare - File hosting and sharing automation */}
      <header className={styles.header}>
        <h1 className={styles['header-title']}>KeepShare - File hosting and sharing automation.</h1>
        <p className={styles['header-subtitle']}>You can easily create a large number of file shares through uploads or links such as DDL/Magnet/Ed2K, and automatically keep the shares valid.</p>
        <JumpButton native href="/console">Get Started</JumpButton>
        <img className={styles['header__banner']} src={headerBanner} alt="header banner" />
      </header>
      {/* Why KeepShare */}
      <div className={styles['why-keep-share']}>
        <h1 className={styles['block__title']}>Why KeepShare</h1>
        <ul className={styles['why-keep-share__ul']}>
          <li>
            <section>
              <h2>Quickly eliminate the "original sin" of Magnet links</h2>
              <p className={styles['subtitle']}>KeepShare converts BitTorrent/Magnet links with the brand of "original sin" into file hosting and sharing in the easiest way.</p>
              <JumpButton href="/docs/intro#quickly-eliminate-the-original-sin-of-magnet-links">Learn More</JumpButton>
            </section>
            <img className={styles['why-keep-share__img']} src={picContent1} alt="" />
          </li>
          <li>
            <img className={styles['why-keep-share__img']} src={picContent2} alt="" />
            <section>
              <h2>Anonymous file sharing publisher</h2>
              <p className={styles['subtitle']}>KeepShare automatically creates enough anonymous accounts for you to host files without worrying about privacy leaks.</p>
              <JumpButton href="/docs/intro#anonymous-file-sharing-publisher">Learn More</JumpButton>
            </section>
          </li>
          <li>
            <section>
              <h2>Unlimited file hosting</h2>
              <p className={styles['subtitle']}>KeepShare helps you build a file hosting cluster and break through the account or space limitations of the file hosting provider.</p>
              <JumpButton href="/docs/intro#unlimited-file-hosting">Learn More</JumpButton>
            </section>
            <img className={styles['why-keep-share__img']} src={picContent3} alt="" />
          </li>
          <li>
            <img className={styles['why-keep-share__img']} src={picContent4} alt="" />
            <section>
              <h2>Automatically repair banned sharings</h2>
              <p className={styles['subtitle']}>As the name suggests, KeepShare will automatically handle banned file shares and keep them valid.</p>
              <JumpButton href="/docs/intro#automatically-repair-banned-sharings">Learn More</JumpButton>
            </section>
          </li>
          <li>
            <section>
              <h2>Help you make money, not us</h2>
              <p className={styles['subtitle']}>You can get commission from the file hosting provider, and KeepShare supports you completely free of charge.</p>
              <JumpButton href="/docs/intro#help-you-make-money-not-us">Learn More</JumpButton>
            </section>
            <img className={styles['why-keep-share__img']} src={picContent5} alt="" />
          </li>
        </ul>
      </div>
      {/* KeepShare for Whom */}
      <div className={styles['keep-share-4-whom']}>
        <h1 className={styles['block__title']}>KeepShare for Whom</h1>
        <ul className={styles['keep-share-4-whom__ul']}>
          <li>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="49.7667" cy="24.0127" rx="10.462" ry="11.0127" fill="#5B67EA"/>
              <ellipse cx="21.1345" cy="28.3179" rx="8.2595" ry="8.81014" fill="#64D2FF"/>
              <path d="M26.0906 56.9484C23.3378 50.3408 29.3948 43.1826 31.5969 42.6319C31.5969 42.6319 28.4185 39.3281 21.6859 39.3281C12.1929 39.3281 5.86222 45.4095 3.01014 51.2454C1.59567 54.1397 4.07521 56.9484 7.29664 56.9484H26.0906Z" fill="#64D2FF"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M49.1928 47.1848L45.4911 37.4568C34.6499 39.1974 29.9627 47.478 28.3935 53.4308C27.8176 55.6159 29.6181 57.5013 31.8778 57.5013H67.3593C69.524 57.5013 71.3072 55.765 70.8816 53.6426C69.621 47.3563 64.9254 38.9032 53.5322 37.3711L49.8105 47.1845C49.7028 47.4686 49.3009 47.4688 49.1928 47.1848ZM63.5363 49.2405H55.8275V51.443H63.5363V49.2405Z" fill="#5B67EA"/>
            </svg>
            <p>Webmaster of file download or sharing website</p>
          </li>
          <li>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.8438 34.1577C29.8438 30.1464 33.0956 26.8945 37.1069 26.8945H57.6859C61.6972 26.8945 64.949 30.1464 64.949 34.1577V46.263C64.949 50.2743 61.6972 53.5261 57.6859 53.5261H54.6595V59.4347C54.6595 60.4577 53.4692 61.0195 52.6795 60.3692L44.3701 53.5261H37.1069C33.0956 53.5261 29.8438 50.2743 29.8438 46.263V34.1577Z" fill="#64D2FF"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M43.156 16C47.1674 16 50.4192 19.2518 50.4192 23.2632V24.4753H35.8929C31.213 24.4753 27.4192 28.269 27.4192 32.9489V46.2647C27.4192 48.1919 28.0626 49.9688 29.1462 51.3924L19.9028 57.2026C19.0966 57.7093 18.0481 57.1299 18.0481 56.1777V50.5626H15.3139C11.3026 50.5626 8.05078 47.3108 8.05078 43.2995V23.2632C8.05078 19.2518 11.3026 16 15.3139 16H43.156Z" fill="#5B67EA"/>
              <ellipse cx="53.9191" cy="35.2167" rx="3.05583" ry="3.21667" fill="white"/>
              <path d="M58.635 44.9977H49.1532C48.2447 44.9977 47.5234 44.2349 47.8113 43.3731C48.4489 41.4647 50.1529 39.0467 53.9255 39.0469C57.78 39.0471 59.4557 41.4821 59.9929 43.4542C60.2217 44.294 59.5054 44.9977 58.635 44.9977Z" fill="white"/>
            </svg>
            <p>Publisher of a file sharing community or group</p>
          </li>
          <li>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.3164 19.1797C17.3164 15.866 20.0027 13.1797 23.3164 13.1797H40.923V24.3804C40.923 25.5051 41.8347 26.4169 42.9595 26.4169H54.2301L54.3172 52.981C54.328 56.3024 51.6386 59.0007 48.3172 59.0007H23.3164C20.0027 59.0007 17.3164 56.3144 17.3164 53.0007V19.1797Z" fill="#5B67EA"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M42.9609 13L54.1626 24.3797H44.5974C43.6936 24.3797 42.9609 23.647 42.9609 22.7432V13Z" fill="#5B67EA"/>
              <path d="M27.9527 53L22.8602 47.9287C21.6524 46.5119 21.7155 44.3867 23.0557 43.0515C23.6984 42.4115 24.5603 42.0372 25.4686 42.0036C26.3768 41.9701 27.2642 42.2798 27.9527 42.8705C28.6406 42.2798 29.5272 41.9696 30.4349 42.0023C31.3427 42.0351 32.2045 42.4082 32.8477 43.0469C33.4908 43.6856 33.8678 44.5428 33.9032 45.4467C33.9385 46.3506 33.6295 47.2343 33.0381 47.9209L27.9527 53Z" fill="white"/>
            </svg>
            <p>File sharing enthusiasts</p>
          </li>
        </ul>
      </div>
      {/* Goals */}
      <div className={styles['goals']}>
        <h1 className={styles['block__title']}>Goals</h1>
        <ul className={styles['goals__ul']}>
          <li>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.7105 17.5313C10.3948 21.7463 7.71562 27.6296 7.71562 34.1386C7.71562 38.4066 8.86748 42.4055 10.8773 45.8414L12.6793 42.84C11.4204 40.2047 10.7156 37.254 10.7156 34.1386C10.7156 28.6618 12.8939 23.6938 16.4314 20.0537L14.7105 17.5313ZM30.9277 57.3507C28.0632 57.3507 25.32 56.8318 22.7868 55.883L24.3615 53.2602C26.4202 53.967 28.6292 54.3507 30.9277 54.3507C37.6007 54.3507 43.5184 51.1169 47.1993 46.131L50.3781 46.8116C46.2353 53.1571 39.0712 57.3507 30.9277 57.3507ZM53.9089 30.8522C52.3126 19.5889 42.6317 10.9266 30.9277 10.9266C30.2893 10.9266 29.657 10.9523 29.0317 11.0029L31.0266 13.9268C40.7893 13.9736 48.916 20.9418 50.7515 30.1762L53.9089 30.8522Z" fill="black"/>
              <circle cx="25.0467" cy="13.785" r="5.28502" stroke="#5B67EA" strokeWidth="3"/>
              <circle cx="15.0936" cy="48.1639" r="5.28502" stroke="#5B67EA" strokeWidth="3"/>
              <circle cx="50.4725" cy="40.9256" r="5.28502" stroke="#5B67EA" strokeWidth="3"/>
            </svg>
            <p>Open and Transparent</p>
          </li>
          <li>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23 10.5H12H10.5V12V58V59.5H12H52H53.5V58V12V10.5H52H41V13.5H50.5V56.5H13.5V13.5H23V10.5Z" fill="black"/>
              <path d="M44.5 31.5L42.5 29L30.5 40L25 34L22.5 36L30.5 44.5L44.5 31.5Z" fill="#5B67EA"/>
              <rect x="22.5" y="8.5" width="19" height="7" stroke="black" strokeWidth="3"/>
            </svg>
            <p>Automation</p>
          </li>
          <li>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 14H31V52H22" stroke="#5B67EA" strokeWidth="3"/>
              <path d="M21 32L41 32" stroke="#5B67EA" strokeWidth="3"/>
              <rect x="41.5" y="24.5" width="15" height="15" stroke="black" strokeWidth="3"/>
              <rect x="9.5" y="8.5" width="11" height="11" stroke="black" strokeWidth="3"/>
              <rect x="9.5" y="26.5" width="11" height="11" stroke="black" strokeWidth="3"/>
              <rect x="9.5" y="44.5" width="11" height="11" stroke="black" strokeWidth="3"/>
            </svg>
            <p>Easy Integration</p>
          </li>
          <li>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 10H13V37H16V10ZM16 45H13V54H16V45Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M34 10H31V18H34V10ZM34 27H31V54H34V27Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M52 10H49V37H52V10ZM52 45H49V54H52V45Z" fill="black"/>
              <circle cx="50.2903" cy="40.2903" r="4.79032" stroke="#5B67EA" strokeWidth="3"/>
              <circle cx="32.2903" cy="23.2903" r="4.79032" stroke="#5B67EA" strokeWidth="3"/>
              <circle cx="14.2903" cy="40.2903" r="4.79032" stroke="#5B67EA" strokeWidth="3"/>
            </svg>
            <p>Controlled by You</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <mask id="path-1-outside-1_1289_43207" maskUnits="userSpaceOnUse" x="4" y="32" width="56" height="25" fill="black">
              <rect fill="white" x="4" y="32" width="56" height="25"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.6265 52.0814H6.56225C5.70301 52.0814 5 51.2999 5 50.3447V34.7366C5 33.7815 5.70301 33 6.56225 33H13.6265C14.4858 33 15.1888 33.7815 15.1888 34.7366V36.5123C15.3158 36.4763 15.4497 36.457 15.588 36.457H23.5045C24.203 36.457 24.887 36.6435 25.4909 36.9949L33.9603 40.9436C34.1131 41.0296 34.2878 41.0798 34.4624 41.0798H44.7872C46.1948 41.0798 47.4955 41.8451 48.1797 43.0294C48.6029 42.7631 49.3341 42.2506 50.541 41.274C53.3933 38.979 56.4129 39.23 57.9191 40.6572C58.6758 41.3816 59.0614 42.3785 58.9959 43.4758C58.9304 44.5229 58.472 45.6059 57.6353 46.7032C55.7653 49.1416 52.3819 51.7594 48.591 53.7173C45.2949 55.4171 40.0901 55.8688 34 55.8688C27.543 55.8688 17.9972 51.5131 15.1888 50.1188V50.3447C15.1888 51.2999 14.4858 52.0814 13.6265 52.0814ZM15.1888 47.069C15.4647 47.068 15.7446 47.1445 15.9939 47.3056C16.1103 47.3773 27.386 53 33.9927 53H34C39.5008 53 44.2326 52.7276 47.2377 51.1784C50.6211 49.4357 53.7134 47.0618 55.3142 44.9819C56.0564 44.0137 56.2965 43.1029 55.9036 42.7299C55.4306 42.2781 53.9827 42.2135 52.3819 43.4973C51.0795 44.5444 50.0972 45.2544 49.3914 45.6632L49.3878 45.6653C49.2498 45.7441 49.0507 45.8577 48.8135 45.9548C48.7571 46.319 48.6472 46.6755 48.4835 47.011L48.4399 47.1042C47.7996 48.4454 46.4171 49.3132 44.9182 49.3132H32.8471C32.0467 49.3132 31.3918 48.6677 31.3918 47.8788C31.3918 47.0899 32.0467 46.4444 32.8471 46.4444H44.9182C45.2966 46.4444 45.6458 46.2293 45.8132 45.885L45.8568 45.7918C45.9733 45.5551 45.9805 45.2754 45.8859 45.0244L45.7113 44.5725C45.5658 44.1996 45.1947 43.9486 44.7872 43.9486H34.4624C33.7639 43.9486 33.0799 43.7621 32.476 43.4107L24.0065 39.4621C23.8538 39.376 23.6791 39.3258 23.5045 39.3258H15.588C15.4497 39.3258 15.3158 39.3065 15.1888 39.2706V47.069ZM6.95281 49.9106H13.236V35.1708H6.95281V49.9106Z"/>
              </mask>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.6265 52.0814H6.56225C5.70301 52.0814 5 51.2999 5 50.3447V34.7366C5 33.7815 5.70301 33 6.56225 33H13.6265C14.4858 33 15.1888 33.7815 15.1888 34.7366V36.5123C15.3158 36.4763 15.4497 36.457 15.588 36.457H23.5045C24.203 36.457 24.887 36.6435 25.4909 36.9949L33.9603 40.9436C34.1131 41.0296 34.2878 41.0798 34.4624 41.0798H44.7872C46.1948 41.0798 47.4955 41.8451 48.1797 43.0294C48.6029 42.7631 49.3341 42.2506 50.541 41.274C53.3933 38.979 56.4129 39.23 57.9191 40.6572C58.6758 41.3816 59.0614 42.3785 58.9959 43.4758C58.9304 44.5229 58.472 45.6059 57.6353 46.7032C55.7653 49.1416 52.3819 51.7594 48.591 53.7173C45.2949 55.4171 40.0901 55.8688 34 55.8688C27.543 55.8688 17.9972 51.5131 15.1888 50.1188V50.3447C15.1888 51.2999 14.4858 52.0814 13.6265 52.0814ZM15.1888 47.069C15.4647 47.068 15.7446 47.1445 15.9939 47.3056C16.1103 47.3773 27.386 53 33.9927 53H34C39.5008 53 44.2326 52.7276 47.2377 51.1784C50.6211 49.4357 53.7134 47.0618 55.3142 44.9819C56.0564 44.0137 56.2965 43.1029 55.9036 42.7299C55.4306 42.2781 53.9827 42.2135 52.3819 43.4973C51.0795 44.5444 50.0972 45.2544 49.3914 45.6632L49.3878 45.6653C49.2498 45.7441 49.0507 45.8577 48.8135 45.9548C48.7571 46.319 48.6472 46.6755 48.4835 47.011L48.4399 47.1042C47.7996 48.4454 46.4171 49.3132 44.9182 49.3132H32.8471C32.0467 49.3132 31.3918 48.6677 31.3918 47.8788C31.3918 47.0899 32.0467 46.4444 32.8471 46.4444H44.9182C45.2966 46.4444 45.6458 46.2293 45.8132 45.885L45.8568 45.7918C45.9733 45.5551 45.9805 45.2754 45.8859 45.0244L45.7113 44.5725C45.5658 44.1996 45.1947 43.9486 44.7872 43.9486H34.4624C33.7639 43.9486 33.0799 43.7621 32.476 43.4107L24.0065 39.4621C23.8538 39.376 23.6791 39.3258 23.5045 39.3258H15.588C15.4497 39.3258 15.3158 39.3065 15.1888 39.2706V47.069ZM6.95281 49.9106H13.236V35.1708H6.95281V49.9106Z" fill="black"/>
              <path d="M15.1888 36.5123H14.8888V36.909L15.2705 36.8009L15.1888 36.5123ZM25.4909 36.9949L25.34 37.2542L25.3518 37.2611L25.3641 37.2668L25.4909 36.9949ZM33.9603 40.9436L34.1076 40.6822L34.0975 40.6765L34.0871 40.6716L33.9603 40.9436ZM48.1797 43.0294L47.92 43.1794L48.0758 43.4492L48.3395 43.2833L48.1797 43.0294ZM50.541 41.274L50.353 41.0403L50.3523 41.0408L50.541 41.274ZM57.9191 40.6572L58.1265 40.4405L58.1254 40.4395L57.9191 40.6572ZM58.9959 43.4758L59.2953 43.4945L59.2954 43.4937L58.9959 43.4758ZM57.6353 46.7032L57.8733 46.8857L57.8738 46.8851L57.6353 46.7032ZM48.591 53.7173L48.7285 53.9839L48.7287 53.9839L48.591 53.7173ZM15.1888 50.1188L15.3222 49.8501L14.8888 49.6349V50.1188H15.1888ZM15.1888 47.069H14.8888V47.3701L15.1899 47.369L15.1888 47.069ZM15.9939 47.3056L15.8309 47.5576L15.8365 47.561L15.9939 47.3056ZM47.2377 51.1784L47.1003 50.9117L47.1002 50.9118L47.2377 51.1784ZM55.3142 44.9819L55.5519 45.1649L55.5523 45.1644L55.3142 44.9819ZM55.9036 42.7299L55.6963 42.9468L55.697 42.9475L55.9036 42.7299ZM52.3819 43.4973L52.1942 43.2633L52.1939 43.2635L52.3819 43.4973ZM49.3914 45.6632L49.5401 45.9238L49.5418 45.9228L49.3914 45.6632ZM49.3878 45.6653L49.5365 45.9258L49.5366 45.9258L49.3878 45.6653ZM48.8135 45.9548L48.6998 45.6772L48.5429 45.7415L48.517 45.9089L48.8135 45.9548ZM48.4835 47.011L48.2139 46.8794L48.2118 46.8838L48.4835 47.011ZM48.4399 47.1042L48.7106 47.2335L48.7116 47.2314L48.4399 47.1042ZM45.8132 45.885L46.083 46.0162L46.0849 46.0122L45.8132 45.885ZM45.8568 45.7918L45.5876 45.6593L45.5851 45.6646L45.8568 45.7918ZM45.8859 45.0244L46.1667 44.9186L46.1658 44.9162L45.8859 45.0244ZM45.7113 44.5725L45.9911 44.4644L45.9908 44.4635L45.7113 44.5725ZM32.476 43.4107L32.6269 43.1514L32.6151 43.1445L32.6028 43.1388L32.476 43.4107ZM24.0065 39.4621L23.8593 39.7235L23.8694 39.7291L23.8798 39.734L24.0065 39.4621ZM15.1888 39.2706L15.2705 38.9819L14.8888 38.8738V39.2706H15.1888ZM13.236 49.9106V50.2106H13.536V49.9106H13.236ZM6.95281 49.9106H6.65281V50.2106H6.95281V49.9106ZM13.236 35.1708H13.536V34.8708H13.236V35.1708ZM6.95281 35.1708V34.8708H6.65281V35.1708H6.95281ZM6.56225 52.3814H13.6265V51.7814H6.56225V52.3814ZM4.7 50.3447C4.7 51.4349 5.50825 52.3814 6.56225 52.3814V51.7814C5.89777 51.7814 5.3 51.1648 5.3 50.3447H4.7ZM4.7 34.7366V50.3447H5.3V34.7366H4.7ZM6.56225 32.7C5.50825 32.7 4.7 33.6465 4.7 34.7366H5.3C5.3 33.9165 5.89777 33.3 6.56225 33.3V32.7ZM13.6265 32.7H6.56225V33.3H13.6265V32.7ZM15.4888 34.7366C15.4888 33.6465 14.6805 32.7 13.6265 32.7V33.3C14.291 33.3 14.8888 33.9165 14.8888 34.7366H15.4888ZM15.4888 36.5123V34.7366H14.8888V36.5123H15.4888ZM15.588 36.157C15.4217 36.157 15.2603 36.1802 15.107 36.2236L15.2705 36.8009C15.3713 36.7724 15.4777 36.757 15.588 36.757V36.157ZM23.5045 36.157H15.588V36.757H23.5045V36.157ZM25.6418 36.7356C24.9925 36.3578 24.2566 36.157 23.5045 36.157V36.757C24.1494 36.757 24.7814 36.9292 25.34 37.2542L25.6418 36.7356ZM34.0871 40.6716L25.6177 36.723L25.3641 37.2668L33.8336 41.2155L34.0871 40.6716ZM34.4624 40.7798C34.3443 40.7798 34.22 40.7455 34.1076 40.6822L33.8131 41.2049C34.0063 41.3137 34.2312 41.3798 34.4624 41.3798V40.7798ZM44.7872 40.7798H34.4624V41.3798H44.7872V40.7798ZM48.4395 42.8793C47.7019 41.6026 46.3024 40.7798 44.7872 40.7798V41.3798C46.0872 41.3798 47.2891 42.0875 47.92 43.1794L48.4395 42.8793ZM48.3395 43.2833C48.7763 43.0085 49.5176 42.488 50.7297 41.5072L50.3523 41.0408C49.1506 42.0132 48.4295 42.5178 48.02 42.7754L48.3395 43.2833ZM50.7291 41.5078C53.497 39.2806 56.3434 39.5774 57.7127 40.875L58.1254 40.4395C56.4824 38.8826 53.2895 38.6774 50.353 41.0403L50.7291 41.5078ZM57.7116 40.874C58.4023 41.5351 58.7569 42.4451 58.6965 43.4579L59.2954 43.4937C59.3659 42.3119 58.9493 41.2281 58.1265 40.4405L57.7116 40.874ZM58.6965 43.4571C58.6358 44.4285 58.209 45.4561 57.3967 46.5213L57.8738 46.8851C58.7351 45.7557 59.2251 44.6173 59.2953 43.4945L58.6965 43.4571ZM57.3972 46.5206C55.5627 48.9129 52.2197 51.5055 48.4534 53.4508L48.7287 53.9839C52.5441 52.0133 55.968 49.3704 57.8733 46.8857L57.3972 46.5206ZM48.4535 53.4507C45.2304 55.1128 40.0961 55.5688 34 55.5688V56.1688C40.0841 56.1688 45.3594 55.7213 48.7285 53.9839L48.4535 53.4507ZM34 55.5688C30.8253 55.5688 26.8649 54.4949 23.3269 53.2341C19.7964 51.9759 16.719 50.5436 15.3222 49.8501L15.0554 50.3875C16.467 51.0884 19.5667 52.531 23.1255 53.7993C26.6767 55.0648 30.7177 56.1688 34 56.1688V55.5688ZM15.4888 50.3447V50.1188H14.8888V50.3447H15.4888ZM13.6265 52.3814C14.6805 52.3814 15.4888 51.4349 15.4888 50.3447H14.8888C14.8888 51.1648 14.291 51.7814 13.6265 51.7814V52.3814ZM15.1899 47.369C15.4094 47.3682 15.632 47.4289 15.831 47.5575L16.1567 47.0537C15.8572 46.86 15.52 46.7678 15.1877 46.769L15.1899 47.369ZM15.8365 47.561C15.8587 47.5747 15.9276 47.6094 16.0088 47.6499C16.1007 47.6956 16.2321 47.7603 16.3992 47.841C16.7334 48.0025 17.2112 48.229 17.8016 48.4985C18.9823 49.0375 20.6147 49.7496 22.4512 50.4595C26.1108 51.8742 30.6279 53.3 33.9927 53.3V52.7C30.7508 52.7 26.3267 51.3144 22.6676 49.8999C20.8448 49.1952 19.2235 48.4881 18.0508 47.9527C17.4645 47.6851 16.9907 47.4605 16.6602 47.3008C16.495 47.2209 16.3657 47.1574 16.2763 47.1128C16.1764 47.0631 16.1435 47.0455 16.1512 47.0502L15.8365 47.561ZM33.9927 53.3H34V52.7H33.9927V53.3ZM34 53.3C36.7533 53.3 39.3255 53.2319 41.5894 52.9681C43.8507 52.7046 45.8261 52.2437 47.3751 51.4451L47.1002 50.9118C45.6442 51.6624 43.7511 52.1122 41.52 52.3722C39.2916 52.6318 36.7475 52.7 34 52.7V53.3ZM47.375 51.4451C50.7815 49.6905 53.915 47.2917 55.5519 45.1649L55.0765 44.7989C53.5118 46.8318 50.4607 49.1808 47.1003 50.9117L47.375 51.4451ZM55.5523 45.1644C55.9388 44.6602 56.2078 44.1547 56.3247 43.7088C56.4377 43.2778 56.4274 42.8135 56.1101 42.5123L55.697 42.9475C55.7726 43.0193 55.8387 43.1968 55.7443 43.5566C55.6539 43.9014 55.4317 44.3354 55.0761 44.7994L55.5523 45.1644ZM56.1108 42.513C55.78 42.197 55.1892 42.0716 54.5236 42.1657C53.8418 42.2622 53.0304 42.5927 52.1942 43.2633L52.5696 43.7314C53.3341 43.1182 54.0471 42.8391 54.6077 42.7598C55.1845 42.6782 55.5542 42.811 55.6963 42.9468L56.1108 42.513ZM52.1939 43.2635C50.894 44.3086 49.9263 45.0067 49.241 45.4036L49.5418 45.9228C50.2681 45.5021 51.2649 44.7803 52.5699 43.7311L52.1939 43.2635ZM49.2427 45.4027L49.2391 45.4047L49.5366 45.9258L49.5401 45.9238L49.2427 45.4027ZM49.2392 45.4047C49.1011 45.4835 48.9171 45.5882 48.6998 45.6772L48.9272 46.2325C49.1843 46.1271 49.3984 46.0046 49.5365 45.9258L49.2392 45.4047ZM48.7531 47.1425C48.9304 46.7793 49.0491 46.3939 49.1099 46.0008L48.517 45.9089C48.4651 46.2441 48.364 46.5717 48.2139 46.8794L48.7531 47.1425ZM48.7116 47.2314L48.7552 47.1382L48.2118 46.8838L48.1682 46.977L48.7116 47.2314ZM44.9182 49.6132C46.5316 49.6132 48.02 48.68 48.7106 47.2335L48.1691 46.975C47.5791 48.2108 46.3026 49.0132 44.9182 49.0132V49.6132ZM32.8471 49.6132H44.9182V49.0132H32.8471V49.6132ZM31.0918 47.8788C31.0918 48.8375 31.8851 49.6132 32.8471 49.6132V49.0132C32.2083 49.0132 31.6918 48.498 31.6918 47.8788H31.0918ZM32.8471 46.1444C31.8851 46.1444 31.0918 46.9201 31.0918 47.8788H31.6918C31.6918 47.2596 32.2083 46.7444 32.8471 46.7444V46.1444ZM44.9182 46.1444H32.8471V46.7444H44.9182V46.1444ZM45.5434 45.7538C45.4267 45.9938 45.1828 46.1444 44.9182 46.1444V46.7444C45.4103 46.7444 45.8649 46.4647 46.083 46.0162L45.5434 45.7538ZM45.5851 45.6646L45.5415 45.7578L46.0849 46.0122L46.1285 45.919L45.5851 45.6646ZM45.6052 45.1302C45.6727 45.3093 45.6649 45.5023 45.5876 45.6594L46.126 45.9242C46.2816 45.6079 46.2884 45.2415 46.1667 44.9186L45.6052 45.1302ZM45.4315 44.6807L45.6061 45.1325L46.1658 44.9162L45.9911 44.4644L45.4315 44.6807ZM44.7872 44.2486C45.0737 44.2486 45.3322 44.4262 45.4318 44.6816L45.9908 44.4635C45.7994 43.973 45.3158 43.6486 44.7872 43.6486V44.2486ZM34.4624 44.2486H44.7872V43.6486H34.4624V44.2486ZM32.3251 43.67C32.9743 44.0478 33.7103 44.2486 34.4624 44.2486V43.6486C33.8174 43.6486 33.1855 43.4765 32.6269 43.1514L32.3251 43.67ZM23.8798 39.734L32.3492 43.6826L32.6028 43.1388L24.1333 39.1902L23.8798 39.734ZM23.5045 39.6258C23.6225 39.6258 23.7469 39.6601 23.8593 39.7235L24.1538 39.2007C23.9606 39.0919 23.7357 39.0258 23.5045 39.0258V39.6258ZM15.588 39.6258H23.5045V39.0258H15.588V39.6258ZM15.107 39.5592C15.2603 39.6026 15.4217 39.6258 15.588 39.6258V39.0258C15.4777 39.0258 15.3713 39.0104 15.2705 38.9819L15.107 39.5592ZM15.4888 47.069V39.2706H14.8888V47.069H15.4888ZM13.236 49.6106H6.95281V50.2106H13.236V49.6106ZM12.936 35.1708V49.9106H13.536V35.1708H12.936ZM6.95281 35.4708H13.236V34.8708H6.95281V35.4708ZM7.25281 49.9106V35.1708H6.65281V49.9106H7.25281Z" fill="black" mask="url(#path-1-outside-1_1289_43207)"/>
              <rect x="18.5" y="13.5" width="33" height="18" stroke="#5B67EA" strokeWidth="3"/>
              <rect x="19" y="21" width="31" height="3" fill="#5B67EA"/>
              <circle cx="23.4719" cy="18.4719" r="1.47186" fill="#5B67EA"/>
              <circle cx="23.4719" cy="27.4719" r="1.47186" fill="#5B67EA"/>
            </svg>
            <p>Easy to Self-Host</p>
          </li>
        </ul>
        <JumpButton href="/docs/intro#open-and-transparent">Learn More</JumpButton>
      </div>
      {/* Quick Tutorial */}
      <div className={styles['quick-tutorial']}>
        <h1 className={styles['block__title']}>Quick Tutorial </h1>
        <div className={styles['quick-tutorial__wrapper']}>
          <ul className={styles['quick-tutorial__ul']}>
            <li>
              <img width="260" src={picAccount} alt="" />
              <div className={styles['quick-tutorial__step--anchor']}>
                <svg className={clsx(styles['quick-tutorial__step'])} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 14C0.5 6.54416 6.54416 0.5 14 0.5C21.4558 0.5 27.5 6.54416 27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.5 21.4558 0.5 14Z" stroke="#5B67EA"/>
                  <path d="M15.6953 7.5625V19H14.25V9.36719L11.3359 10.4297V9.125L15.4688 7.5625H15.6953Z" fill="#5B67EA"/>
                </svg>
              </div>
              <p>Create Account</p>
            </li>
            <li>
              <img width="260" src={picCombine} alt="" />
              <svg className={styles['quick-tutorial__step']} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 14C0.5 6.54416 6.54416 0.5 14 0.5C21.4558 0.5 27.5 6.54416 27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.5 21.4558 0.5 14Z" stroke="#5B67EA"/>
                <path d="M18.3984 17.8125V19H10.9531V17.9609L14.6797 13.8125C15.138 13.3021 15.4922 12.8698 15.7422 12.5156C15.9974 12.1562 16.1745 11.8359 16.2734 11.5547C16.3776 11.2682 16.4297 10.9766 16.4297 10.6797C16.4297 10.3047 16.3516 9.96615 16.1953 9.66406C16.0443 9.35677 15.8203 9.11198 15.5234 8.92969C15.2266 8.7474 14.8672 8.65625 14.4453 8.65625C13.9401 8.65625 13.5182 8.75521 13.1797 8.95312C12.8464 9.14583 12.5964 9.41667 12.4297 9.76562C12.263 10.1146 12.1797 10.5156 12.1797 10.9688H10.7344C10.7344 10.3281 10.875 9.74219 11.1562 9.21094C11.4375 8.67969 11.8542 8.25781 12.4062 7.94531C12.9583 7.6276 13.638 7.46875 14.4453 7.46875C15.1641 7.46875 15.7786 7.59635 16.2891 7.85156C16.7995 8.10156 17.1901 8.45573 17.4609 8.91406C17.737 9.36719 17.875 9.89844 17.875 10.5078C17.875 10.8411 17.8177 11.1797 17.7031 11.5234C17.5938 11.862 17.4401 12.2005 17.2422 12.5391C17.0495 12.8776 16.8229 13.2109 16.5625 13.5391C16.3073 13.8672 16.0339 14.1901 15.7422 14.5078L12.6953 17.8125H18.3984Z" fill="#5B67EA"/>
              </svg>
              <p>Combine Links According to Auto-Share Link Template</p>
            </li>
            <li>
              <img width="260" src={picPost} alt="" />
              <svg className={styles['quick-tutorial__step']} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 14C0.5 6.54416 6.54416 0.5 14 0.5C21.4558 0.5 27.5 6.54416 27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.5 21.4558 0.5 14Z" stroke="#5B67EA"/>
                <path d="M20.2503 8.96875H19.1581C19.0049 8.96875 18.8596 9.03906 18.7659 9.15937L12.3237 17.3203L9.23463 13.4063C9.1879 13.3469 9.12833 13.2989 9.06041 13.2659C8.99249 13.2329 8.91796 13.2157 8.84244 13.2156H7.75025C7.64557 13.2156 7.58775 13.3359 7.65182 13.4172L11.9315 18.8391C12.1315 19.0922 12.5159 19.0922 12.7174 18.8391L20.3487 9.16875C20.4128 9.08906 20.3549 8.96875 20.2503 8.96875Z" fill="#5B67EA"/>
              </svg>
              <p>Post Links</p>
            </li>
          </ul>
        </div>
        <JumpButton native href="/console" >Get Started</JumpButton>
      </div>
    </main>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - File hosting and sharing automation`}
      description="File hosting and sharing automation">
      <HomeMain />
    </Layout>
  );
}
