import styled from 'styled-components'

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 22px 22px;

  .question-section {
    margin-bottom: 10px;
  }
`

export const ScoreSection = styled.div`
  height: 100%;
  justify-content: center;
`

export const ScoreText = styled.span`
  font-size: 30px;
  font-weight: 400;
`

export const Score = styled.span`
  font-size: 40px;
  font-weight: 600;
`

export const QuestionCount = styled.div`
  text-align: end;
  margin-bottom: 20px;
`

export const CurrentQuestion = styled.span`
  font-size: 24px;
`

export const QuestionText = styled.p`
  font-size: 18px;
`

export const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

export const Answer = styled.button`
  overflow: hidden;
  min-height: 60px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.purple};
  text-overflow: ellipsis;

  font-family: ${({ theme }) => theme.fonts[0]},
    ${({ theme }) => theme.fonts[1]};
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
`
