import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from '@material-ui/icons'
import styled from "styled-components"

const Info = styled.div`
      opacity: 0;        //hover effect
      width: 100%;
      height: 100%;
      position: absolute;         //positioning within
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.2);
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      cursor: pointer;
`

const Container = styled.div`
      flex: 1;
      margin: 5px;
      min-width: 280px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f5fbfb;
      position: relative;

      &:hover ${Info}{        // hover effect on details 
          opacity:1;
      }
`
const Circle = styled.div`
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: white;
      position: absolute;
`
const Image = styled.img`
     width: 100%;
     height: 100%;           // fitting an image all the 3
     object-fit: cover;
     z-index: 2;    // disappear
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;            // space items
    transition: all 0.5s ease;  // transition on hover

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1)          // simple hover effect
    }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                   <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                   <SearchOutlined/>
                </Icon>
                <Icon>
                   <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
