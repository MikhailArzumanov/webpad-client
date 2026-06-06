'use client'
import Link from 'next/link';
import styles from './NavBlock.module.css'
import { ParsedUrlQueryInput } from 'querystring';

interface SideBlockContainmentModel {
  text: string;
  link?: string;
  queryParams?: ParsedUrlQueryInput;
}

interface SideBlockModel {
  parts: SideBlockContainmentModel[];
}

function SideBlock(props: {model: SideBlockModel}){
  const elements = props.model.parts.map((x, index) =>
    !!x.link ? 
      <Link key={index} 
        href={{pathname: x.link, query: x.queryParams}}
        className={styles.link}
      >
        {x.text}
      </Link>
      : 
      <span key={index}>{x.text}</span>
  );
  return (
    <p className={styles.sideBlock}>
      {elements}
    </p>
  );
}

function AuthSide(){
  const model = {
    parts:[
      {text:'Авторизоваться', link: '/auth', queryParams: {mode: 'auth'}},
      {text:'или'},
      {text:'Зарегистрироваться', link: '/auth', queryParams: {mode: 'register'}},
    ]
  };
  return <SideBlock model={model}/>;
}

function DocsSide(){
  const model = {
    parts: [
      {text:'Начать'}, 
      {text:'знакомство с'},
      {text:'документацией', link:'/docs'}
    ]
  };
  return <SideBlock model={model}/>;
}

export default function NavBlock(){
  return (
    <div className={styles.navWrapper}>
      <AuthSide />
      <div className={styles.verticalDivisor}></div>
      <DocsSide />
    </div>
  );
}