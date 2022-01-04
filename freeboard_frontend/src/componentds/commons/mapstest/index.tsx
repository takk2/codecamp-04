import GetFitnesscentersMapsPage from "./get/getFitnesscenters/getFitnesscentersMaps.container";
import KeywordListPage from "./keywordList/keywordList.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1400px;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const Maps = styled.div`
  width: 50%;
`;

const List = styled.div`
  width: 50%;
`;

const FitnesscenterTest = () => {
  return (
    <>
      <Wrapper>
        <Maps>
          <GetFitnesscentersMapsPage />
        </Maps>
        <List>
          <KeywordListPage />
        </List>
      </Wrapper>
    </>
  );
};
export default FitnesscenterTest;
