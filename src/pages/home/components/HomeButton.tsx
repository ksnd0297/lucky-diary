import { styled } from "styled-components";

function HomeButton() {
  return (
    <Con>
    <Wrapper>
      <Div 
        width="140px"
        height="140px"
        marginTop="40px"
        marginRight="-40px"
      >
        <P fontSize="28px">일기 쓰기</P>
      </Div>
      <Div><P>종료</P></Div>
      <Div><P>일기 목록</P></Div>
      <Div
        marginTop="-60px"
        marginRight="60px"
      >
        <P>행운 기록</P>
      </Div>
    </Wrapper>
    </Con>
  )
}

export default HomeButton;

const Con = styled.div`
  width: 100%;
  height: 35%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`

  display: grid;
  grid-template-rows: repeat(2, 140px);
  grid-template-columns: repeat(2, 140px);
  place-items: center;

  gap: 7%;

  transform: rotate( 45deg );
`

const Div = styled.div<{width?: string, height?: string, margin?: string, marginTop?: string, marginRight?: string}>`
  background-color: yellow;
  width: ${props => props.width || '80px'};
  height: ${props => props.height || '80px'};
  border-radius: 50%;
  margin: ${props => props.margin || '1%'};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  background-color: #FFE3E1;
`

const P = styled.p<{fontSize?: string}>`
  transform: rotate( -45deg );
  font-weight: bold;
  font-size: ${props => props.fontSize || '16px'};
`