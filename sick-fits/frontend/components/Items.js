import React, { Component } from 'react';
import {Query} from 'react-apollo'
import styled from 'styled-components'
import gql from 'graphql-tag'
import Item from './Item'
const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description 
            image
            largeImage
        }
    }
`

const ItemsList = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 60px;
 max-width: ${props => props.theme.maxWidth};
 margin: 0 auto;
`
const Center = styled.div`
    text-align: center;
`
class Items extends Component {
    render() {
        return (
            <Center>
                <Query query={ALL_ITEMS_QUERY}>
                    {
                        ({data, error, loading}) => {
                            console.log(data)
                            if(loading) return <p>loading...</p>
                            if(error) return <p>error: {error.message}</p>
                            return <ItemsList>
                                            { data.items.map((item) => <Item key={item.id} item={item}></Item> )  }
                                    </ItemsList>
                        }
                    }
                </Query>
            </Center>
        );
    }
}

export default Items;