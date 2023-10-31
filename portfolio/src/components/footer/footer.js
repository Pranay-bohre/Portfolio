import React from "react";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  StyledContainer,
} from "./styles";

import { Grid } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "rgb(20, 20, 20, 0.6)"),
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#fff",
}));

const Footer = () => {
  return (
    <>
      <FooterSection>
        <StyledContainer>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <Item>
                    <Title>
                        Contact Us
                    </Title>
                        <a href="https://techsprunity.com/portfolio/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                            <Chat>Rate Us</Chat>
                        </a>
                        <a href="mailto:connect@techsprunity.com" style={{textDecoration:"none"}}>
                            <Chat>Contact Us</Chat>
                        </a>
                        <a href="https://techsprunity.com/portfolio/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                            <Chat>Get this template</Chat>
                        </a>
                </Item>
                
              </Grid>
              <Grid item xs={4}>
                <Item>
                    <Title>
                        Company
                    </Title>
                    <Chat>
                        About
                    </Chat>
                    <Chat>
                        Services
                    </Chat>
                    <Chat>
                        Free Quote
                    </Chat>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                    <Title>
                        Visit Link
                    </Title>
                    <Chat>
                        Privacy Policy
                    </Chat>
                    <Chat>
                        Terms & Conditions
                    </Chat>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </StyledContainer>
      </FooterSection>
    </>
  );
};

export default Footer;
