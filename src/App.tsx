import React from 'react';
import { GlobalStyles } from "./globalStyles";
import { Title, Modal } from "./components";
import { StyledContainer } from "./components/container/Container.styled";
import styled from "styled-components";
import { Gallery, PhotoPreview } from "./features";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppContainer = styled(StyledContainer)`
  padding-top: 15px;
`;

function App():React.ReactElement {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Title>TEST APP</Title>
        <Gallery />
        <Switch>
          <Route path="/:id/comments">
            <Modal>
              <PhotoPreview />
            </Modal>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </AppContainer>
    </Router>
  );
}

export default App;
