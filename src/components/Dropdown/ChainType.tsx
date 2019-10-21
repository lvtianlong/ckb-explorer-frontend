import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../contexts/providers'

export const ChainTypePanel = styled.div`
  width: 184px;
  height: 89px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  position: -webkit-fixed;
  z-index: 1000;
  right: 14.6vw;
  top: 70px;

  @media (max-width: 1440px) {
    right: 11.5vw;
  }

  .chain_type_selected {
    width: 100%;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: ${props => props.theme.primary};
  }
  .chain_type_normal {
    width: 100%;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #676767;
  }
  .chain_type_separate {
    width: 100%;
    height: 1px;
    background: #f2f2f2;
  }

  @media (max-width: 700px) {
    width: 106px;
    height: 75px;
    right: 15vw;
    top: 35px;

    .chain_type_selected {
      font-size: 12px;
      height: 37px;
      line-height: 37px;
    }
    .chain_type_normal {
      font-size: 12px;
      height: 37px;
      line-height: 37px;
    }
  }
`

export default ({ setShowChainDropdown }: { setShowChainDropdown: Function }) => {
  const { app } = useContext(AppContext)
  const { chainType } = app

  return (
    <ChainTypePanel
      onMouseLeave={() => {
        setShowChainDropdown(false)
      }}
    >
      <div
        className={`chain_type_${chainType === 'main' ? 'selected' : 'normal'}`}
        role="button"
        tabIndex={-1}
        onKeyDown={() => {}}
        onClick={() => {
          setShowChainDropdown(false)
        }}
      >
        {chainType === 'main' ? 'MAINNET' : 'Coming..'}
      </div>
      <div className="chain_type_separate" />
      <div
        className={`chain_type_${chainType !== 'main' ? 'selected' : 'normal'}`}
        role="button"
        tabIndex={-1}
        onKeyDown={() => {}}
        onClick={() => {
          setShowChainDropdown(false)
        }}
      >
        {chainType === 'ckb_test' ? 'TESTNET' : <a href="https://nervos.org">TESTNET</a>}
      </div>
    </ChainTypePanel>
  )
}
