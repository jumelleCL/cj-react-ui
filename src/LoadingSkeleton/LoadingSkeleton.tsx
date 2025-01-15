import styled from "styled-components";

export default function LoadingSkeleton() {
  return (
    <Container>
      <Circle />
      <Content>
        <Line className="line-lg" />
        <Line className="line-sm" />
      </Content>
      <SmallCircle />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 16rem;
  gap: 0.5rem;
  padding: 1rem;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;

const Circle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: #cbd5e1; /* bg-slate-400 */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Line = styled.div`
  height: 1.25rem;
  background-color: #cbd5e1; /* bg-slate-400 */
  border-radius: 0.5rem;

  &.line-lg {
    width: 60%; /* w-3/5 */
  }

  &.line-sm {
    width: 90%; /* w-[90%] */
  }
`;

const SmallCircle = styled.div`
  position: absolute;
  bottom: 1.25rem; /* bottom-5 */
  right: 0;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: #cbd5e1; /* bg-slate-400 */
`;
