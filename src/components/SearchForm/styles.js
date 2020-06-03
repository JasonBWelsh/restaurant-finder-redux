import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  margin: 1rem 0;
  padding: 0.5rem;
  background: #123;
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .input-wrapper {
    /* border: 1px solid tomato; */
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      margin: 0 0.5rem;
      flex-direction: row;
    }
  }

  .input-label {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }

  .form-input {
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    flex: 1;
  }
`;
