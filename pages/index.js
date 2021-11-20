import MainContainer from '../components/MainContainer'
import client from '../graphql/apollo'
import {gql} from '@apollo/client'
import {useState, useContext, createContext} from 'react'
import {useRouter} from 'next/router'
import Header from "../components/Header/Header"
import {getTasks,getUsers} from '../graphql/queries'
import {Row, Col, Card, List} from "antd"
import 'antd/dist/antd.css'
import Posts from '../components/Posts'
import Topics from '../components/Topics'


export const DataContext = createContext()

const Index = (props) => {
    return (
        <>
    <MainContainer>
        <DataContext.Provider value={props}>
            <Row>
                <Topics/>
                <Posts/>
            </Row>
        </DataContext.Provider>
    </MainContainer>    
    </>
    )
}

export default Index

export async function getServerSideProps({query}){

    query = query.page || 10
    const {data} = await client.query({
        query: gql`query MyQuery{
            ${getUsers()}
            ${getTasks(query)}
        }`
    })
    return {
        props: {
            users: data.users,
            tasks: data.tasks
        }
    }
}
