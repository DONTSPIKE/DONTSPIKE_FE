import Tooltip from '../assets/AverageGraphToolTip.svg?react';
import { styled, css } from 'styled-components';

const BalloonContainer = styled.div`
  /* position: absolute의 기준이 되는 부모 요소 */
  position: relative;
  width: 10.875rem;
  height: 14rem;
  flex-shrink: 0;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const TooltipStyled = styled(Tooltip)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.3rem;
  right: 0rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  pointer-events: none;

  height: 14rem;
  width: 9rem;
  word-break: keep-all; /* 단어 기준 줄바꿈 */
  overflow-wrap: break-word; /* 넘칠 경우 글자 기준 줄바꿈 */

  color: #414141;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.1rem;
  word-spacing: 0.01rem;
`;

const BSSpan = styled.span`
  ${props =>
    props.$offset > 0
      ? // 다중 속성을 사용
        css`
          color: #d33f3f;
        `
      : css`
          color: #3053f9;
        `};
`;

// props로 전달된 지난 달과의 차이값이
// 양수면 => 저번달에 비해 공복 평균 혈당이 {offset}mg/dl 증가했어요! 혈당 관리에 조금 더 힘 써주세요.
// 0이면 => 저번달과 공복 평균 혈당이 동일해요!
// 음수면 => 저번달에 비해 공복 평균 혈당이 {offset}mg/dl 감소했어요! 잘하고 계시네요.
const AverageGraphToolTip = ({ offset }) => (
  <BalloonContainer>
    <TooltipStyled />
    <TextContainer>
      {offset > 0 ? (
        <>
          <span>
            저번 달에 비해 공복 평균 혈당이 <BSSpan $offset={offset}>{offset}mg/dl 증가</BSSpan>했네요.<br></br>{' '}
            생활습관을 다시 점검해보고, 필요한 경우 전문가와 상담하는 것도 좋을 것 같아요. <br></br> 건강을 위해 작은
            변화부터 시작해보세요!
          </span>
        </>
      ) : offset === 0 ? (
        <>
          <span>
            저번 달과 공복 평균 혈당이 동일해요! <br></br> 좋은 식습관을 통해 더 건강해질까요?
          </span>
        </>
      ) : (
        <span>
          저번 달에 비해 공복 평균 혈당이 <BSSpan $offset={offset}>{-1 * offset}mg/dl 감소</BSSpan>했어요! <br></br>
          이번 달 공복 혈당이 많이 낮아졌네요! <br></br>꾸준한 관리 덕분이에요. <br></br>계속 좋은 습관을 유지하면 더
          건강해질 수 있어요!
        </span>
      )}
    </TextContainer>
  </BalloonContainer>
);

export default AverageGraphToolTip;
