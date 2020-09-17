import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;

        & + a {
          margin-left: 32px;
        }

        &:hover {
        opacity: 0.6

        }
        &::after {
          content: '';
          width: 0%;
          height: 2px;
          background-color:#FF872C;
          position: absolute;
          left: 0;
          bottom: -8px;
        }
        &:hover::after {
         width: 100%;
        transition: all 200ms ease-in ;


        }
      }
    }
  }
`;
