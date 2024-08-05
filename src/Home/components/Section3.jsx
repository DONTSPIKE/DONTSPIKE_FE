import { React, useRef, useEffect } from 'react';
import styled from 'styled-components';
import buritto from '../assets/buritto.png';
import { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Content1 from '../assets/Section3/3_1.png';
import Content2 from '../assets/Section3/3_2.png';
import Content3 from '../assets/Section3/3_3.png';
import Icon1 from '../assets/Section3/Icon1.svg?react';
import Icon2 from '../assets/Section3/Icon2.svg?react';
import Icon3 from '../assets/Section3/Icon3.svg?react';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

const Wrapper = styled.div`
  width: 100%;
  height: 100%; // 100vh를 차지
`;

const PageHeader = styled.div`
  width: 100%;
  height: 15vh;
  flex-shrink: 0;

  border-top: 10rem;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ContentWrapper = styled.div`
  height: 85vh;
  width: 100%;
`;

const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
`;

const TitleIcon = styled.img`
  width: 4.0625rem;
  height: 4.625rem;
  flex-shrink: 0;
`;

const TitleTextDiv = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  color: #111111;
  ${props =>
    props.type === 'big'
      ? css`
          font-size: 1.3rem;
          font-weight: 700;
        `
      : css`
          font-size: 0.8rem;
          font-weight: 500;
        `};
`;

const RealContentWrapper = styled.div`
  margin: 0rem 8rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.3rem;
`;

const Content1Wrap = styled.div`
  border-radius: 1.875rem;
  background-color: #f0f1f5;
  height: 35%;
  padding: 0 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Content2and3Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.75rem;

  height: 55%;
`;

const TextDiv = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  color: #111111;
  ${props =>
    props.type === 'big'
      ? css`
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          font-size: 1rem;
          font-weight: 500;
        `};
`;

// Content1의 Wrapper
const ContentSubWrapper1_1 = styled.img`
  width: 34.25rem;
  height: 10rem;
  flex-shrink: 0;
  object-fit: cover;

  border-radius: 1.25rem;
`;

const ContentSubWrapper1_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  gap: 1rem;

  padding: 2.5rem;
`;

const ContentSubText = styled.div`
  color: #111111;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const ContentSubSubText = styled.div`
  color: #707070;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.3rem;
`;

// 2번째 컨텐츠 시작
const Content2Wrap = styled.div`
  border-radius: 1.875rem;
  background-color: #f0f1f5;

  width: 100%;
  padding-top: 1rem;
`;

const ContentSubWrapper2_1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  gap: 0.5rem;
  padding: 0 2rem;
`;

const ContentSubWrapper2_3 = styled.img`
  width: 22.9375rem;
  height: 13.9375rem;
  flex-shrink: 0;
  object-fit: cover;

  border-radius: 1.25rem;
`;

const ImgWrapper2_2 = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content3Wrap = styled.div`
  border-radius: 1.875rem;
  background-color: #f0f1f5;

  width: 100%;
  padding-top: 1rem;
`;

const ContentSubWrapper3_2 = styled.img`
  width: 26.79644rem;
  height: 13.875rem;
  flex-shrink: 0;
`;

const Section3 = () => {
  const wrapper1Ref = useRef(null);
  const wrapper2Ref = useRef(null);
  const wrapper3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper1Ref.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none restart none',
      },
    });

    tl.from(wrapper1Ref.current, { opacity: 0, y: -50, duration: 0.8 })
      .from(wrapper2Ref.current, { opacity: 0, y: -50, duration: 0.8 }, '+=0.01')
      .from(wrapper3Ref.current, { opacity: 0, y: -50, duration: 0.8 }, '+=0.01');
  }, []);

  return (
    <Wrapper>
      <PageHeader>
        <TitleIcon src={buritto}></TitleIcon>
        <TitleTextWrapper>
          <TitleTextDiv type="big">날짜별 먹은 음식을 기록하고 식단을 건강하게 관리 해보세요</TitleTextDiv>
          <TextDiv type="small">‘혈당 백과’ 에서는 음식의 영양소와 섭취 팁을 확인할 수 있어요.</TextDiv>
        </TitleTextWrapper>
      </PageHeader>
      <ContentWrapper>
        {' '}
        <RealContentWrapper>
          <Content1Wrap ref={wrapper1Ref}>
            <ContentSubWrapper1_1 src={Content1}></ContentSubWrapper1_1>
            <ContentSubWrapper1_2>
              <Icon1></Icon1>
              <ContentSubText>날짜를 선택하고 식단을 추가해주세요.</ContentSubText>
              <ContentSubSubText>메뉴를 검색하거나 새로 등록할 수 있어요.</ContentSubSubText>
            </ContentSubWrapper1_2>
          </Content1Wrap>
          <Content2and3Wrap>
            <Content2Wrap ref={wrapper2Ref}>
              <ContentSubWrapper2_1>
                <Icon2></Icon2>
                <ContentSubText>
                  추가해둔 식단을 바탕으로 <br />
                  월별 가장 자주 먹은 음식을 알려드릴게요.
                </ContentSubText>
                <ContentSubSubText>식단 관리 시 참고하셔도 좋아요!</ContentSubSubText>
              </ContentSubWrapper2_1>
              <ImgWrapper2_2>
                <ContentSubWrapper2_3 src={Content2}></ContentSubWrapper2_3>
              </ImgWrapper2_2>
            </Content2Wrap>
            <Content3Wrap ref={wrapper3Ref}>
              <ContentSubWrapper2_1>
                <Icon3></Icon3>
                <ContentSubText>특정 음식과 혈당의 상관관계가 궁금하신가요?</ContentSubText>
                <ContentSubSubText>
                  혈당 백과에 궁금한 음식을 검색해주시면 <br />
                  혈당 관리에 도움이 되는 정보들을 알려드릴게요.
                </ContentSubSubText>
              </ContentSubWrapper2_1>
              <ImgWrapper2_2>
                <ContentSubWrapper3_2 src={Content3}></ContentSubWrapper3_2>
              </ImgWrapper2_2>
            </Content3Wrap>
          </Content2and3Wrap>
        </RealContentWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Section3;
