import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
margin: 20px;
padding: 8px 16px;
  border-radius: 2px;
  background-color: #2b80b3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 300;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  
  &:hover {
    background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%);
  }`

  export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;`