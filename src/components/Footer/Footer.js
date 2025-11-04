import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIcons,
} from "./FooterStyles";
import {
  MobileNumber,
  PersonalEmail,
  GithubUrl,
  LinkedInUrl,
} from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${MobileNumber}`}>{MobileNumber}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${PersonalEmail}`}>{PersonalEmail}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="#">Bengaluru, India</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Connect</LinkTitle>
          <SocialContainer>
            <SocialIcons href={GithubUrl} target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="2.5rem" />
            </SocialIcons>
            <SocialIcons href={LinkedInUrl} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size="2.5rem" />
            </SocialIcons>
          </SocialContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
