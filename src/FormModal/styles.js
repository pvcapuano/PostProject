import styled from 'styled-components'

import { IoClose, IoCheckmark } from "react-icons/io5"

export const Overlay = styled.div`
    background-color: rgba(242, 243, 254, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    background: #ffffff;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    padding: 32px 48px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 40px;

    color: #1e1e1e;
    background-color: transparent;
    padding: 0;
    font-weight: 700;

    font-size: 18px;
`
export const FormContainer = styled.div``
export const FormMain = styled.div``
export const InputGroup = styled.div``
export const Footer = styled.div``
export const CloseIcon = styled(IoClose)``
export const CheckIcon = styled(IoCheckmark)``
