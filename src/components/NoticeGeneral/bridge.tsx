import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.div`
  max-width: 420px;
  margin: 0 auto 20px auto;
  padding: 10px;
  font-size: 13px;
  text-align: center;
`
export default function NoticeTomoBridge() {
  return (
    <>
      <StyledInfo style={{ color: '#00a5f0' }}>
        <a style={{ fontSize: '15px', color: '#00b0ff' }} href="https://bridge.tomochain.com/" target="true">
          Bring
        </a>{' '}
        any ERC20 token into the Inexchange ecosystem. 
        Take advantage of near-zero as fees & super fast trades!
      </StyledInfo>
    </>
  )
}
