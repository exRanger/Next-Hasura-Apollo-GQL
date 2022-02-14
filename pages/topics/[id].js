import {useRouter} from "next/router"
import {DataContext} from '../../pages/index'
import client from '../../graphql/apollo'
import {gql} from '@apollo/client'
import {Row, Col} from 'antd'
import styles from '../../styles/post.module.scss'
import Topics from '../../components/Topics'
import {getTasks, tasks_By_pk} from '../../graphql/queries'

export default (data) => {
    const {query} = useRouter()
   
    return (
        <DataContext.Provider value={data}>     
            <div className={styles.post}>
                <Row>
                    <Topics/>
                    <Col>
                        <h1>
                            Данный пост создан: {data.tasksBy.created_at}
                        </h1>
                         <h2>
                            Описание поста: {data.tasksBy.description} 
                        </h2>
                         <h2>
                            Пост создан пользователем: {data.tasksBy.user_id}
                        </h2>
                    </Col>
                </Row>
            </div>
          </DataContext.Provider>    
    )
}

export async function getServerSideProps({query, params}){

    query = query.page || 10
    
    const {data} = await client.query({
        query: gql`query MyQuery{
            ${getTasks(query.page)}
            ${tasks_By_pk(params.id)}
        }`
    })
    return {
        props: {
            tasks: data.tasks,
            tasksBy: data.tasks_by_pk
        }
    }
}
