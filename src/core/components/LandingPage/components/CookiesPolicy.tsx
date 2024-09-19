import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import SVGIcon from "@/core/components/common/SVGIcon";
import Button from "@/core/components/LandingPage/components/Button";
import theme from "@/core/styles/theme";
import useCookiePolicy from "@/core/hooks/useCookiePolicy";


const CookiesPolicy = () => {
    const [cookie, setCookie] = useState<null | string>()
    const {getCookieStatus, setChangeCookie} = useCookiePolicy()

    useEffect(() => {
        setCookie(getCookieStatus())
    }, []);

    const handleChangeStatus = (status: string) => {
        setCookie(status)
        setChangeCookie(status)
    }

    if (cookie) {
        return <></>
    }
    return (
        <CookiesPolicyBlock>
            <FlexBlock>
                <SVGIcon
                    size={[33, 29]}
                    iconName="Cookie"
                />
                <TextStyled style={{width: "220px"}}>
                    If you continue browsing, we consider that you have accepted the <LinkStyled>Cookies policy</LinkStyled>
                </TextStyled>
            </FlexBlock>
            <FlexBlock>
                <ButtonStyled green onClick={() => handleChangeStatus("Accepted")}>
                    Confirm
                </ButtonStyled>
                <ButtonStyled onClick={() => handleChangeStatus("Deny")}>
                    Deny
                </ButtonStyled>
            </FlexBlock>
        </CookiesPolicyBlock>
    )
}

export default CookiesPolicy

const LinkStyled = styled.a`
    color: ${theme.colors.green[50]};
`
const TextStyled = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`
const ButtonStyled = styled(Button)`
    width: 125px;
`

const FlexBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 16px;
`
const CookiesPolicyBlock = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    width: 600px;
    height: 80px;
    background: #141414;
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 99;
    border-radius: 10px;
    box-shadow: 0px 12px 22px 0px rgba(0, 0, 0, 0.28), 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`