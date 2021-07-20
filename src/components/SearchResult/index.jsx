
import React, {useState} from 'react';
import {Divider, Tabs} from 'antd';
import {AppleOutlined, AndroidOutlined} from '@ant-design/icons';
import SearchResultList from "../SearchResultList";
import TypeTag from "../TypeTag";
import TV from "../../images/icons/tv.png";
import Game from "../../images/icons/game.png";
import Book from "../../images/icons/book.png";
import Character from "../../images/icons/character.png";
import Company from "../../images/icons/company.png";
import Person from "../../images/icons/person.png";
import Music from "../../images/icons/music.png";
import './index.css'
import {Link} from "react-router-dom";
import WordCloud from "../WordCloud";

const {TabPane} = Tabs;

function FilterHeader(props) {
    return (
        <div style={{minHeight:'100vh'}}>
            <Tabs defaultActiveKey="1" centered size={'large'}>
                <TabPane
                    tab={
                        <div>
                            <img src={TV} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;动画
                        </div>
                    }
                    key="1"
                >
                    <SearchResultList searchString={props.searchString} searchType={'anime'}/>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <img src={Book} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;书籍
                        </div>
                    }
                    key="2"
                >
                    <SearchResultList searchString={props.searchString} searchType={'book'}/>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <img src={Music} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;音乐
                        </div>
                    }
                    key="3"
                >
                    <SearchResultList searchString={props.searchString} searchType={'music'}/>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <img src={Game} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;游戏
                        </div>
                    }
                    key="4"
                >
                    <SearchResultList searchString={props.searchString} searchType={'game'}/>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <img src={Person} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;人物
                        </div>
                    }
                    key="5"
                >
                    <SearchResultList searchString={props.searchString} searchType={'real_person'}/>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <img src={Character} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;虚拟人物
                        </div>
                    }
                    key="6"
                >
                    <SearchResultList searchString={props.searchString} searchType={'character'}/>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <img src={Company} style={{display:'inline-block', width:'.8rem'}} alt={'动画'}/>
                            &nbsp;公司
                        </div>
                    }
                    key="7"
                >
                    <SearchResultList searchString={props.searchString} searchType={'company'}/>
                </TabPane>
            </Tabs>
        </div>
    )
}

function SearchResult(props) {
    return (
        <div style={{backgroundColor: '#f3f3f3', minHeight:'100vh'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}} id={'searchContainer'}>
                <div style={{backgroundColor: '#fff', padding:'0 1rem 1rem 1rem'}} id={'infoContainer'}>
                    <FilterHeader searchString={props.searchString}/>
                </div>
                <div id={'relatedContainer'}>
                    <div  style={{backgroundColor: '#fff', padding:'1rem',borderRadius:'1rem'}}>
                        <Divider>相关搜索条目</Divider>
                        <ul className={'related-search-list'}>
                            <li ><Link>工作细胞</Link></li>
                            <li><Link>红细胞</Link></li>
                        </ul>
                    </div>
                    <div  style={{backgroundColor: '#fff', padding:'1rem',borderRadius:'1rem',marginTop:'1rem'}}>
                        <Divider>搜索热榜</Divider>
                        <WordCloud />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SearchResult;