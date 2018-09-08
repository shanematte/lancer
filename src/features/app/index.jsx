import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Task from 'features/task';
import Faq from 'features/faq';
import Dashboard from 'features/dashboard';
import Search from 'features/search';
import ProfileForm from 'features/profile/edit';
import CreateTask from 'features/create_task';
import EditTask from 'features/edit_task';
import AddFounds from 'features/add_founds';

import Header from 'features/common/Header';
import Footer from 'features/common/Footer';
import { BodyContainer, TaskContainer } from 'features/common/Container';

import { themeMobile, themeDesktop, screenSizes } from 'features/common/styles';
import Fullscreen from './Fullscreen';

const navLinks = [
  { url: '/search/', name: 'Search' },
  { url: '/dashboard/customer/', name: 'Dashboard' },
  { url: '/faq/', name: 'FAQ' },
  { url: '/add-funds/', name: 'Add Funds' },
];


export default class App extends Component {
  state = { isMobile: undefined }

  componentDidMount() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.checkScreen);
  }

  checkScreen = () => {
    const condition = window.innerWidth < screenSizes.lg;
    if (this.state.isMobile !== condition) {
      this.setState({ isMobile: condition });
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.isMobile ? themeMobile : themeDesktop}>
        <Fullscreen>
          <Header navLinks={navLinks} />

          <Route exact path="/profile/edit/" component={ProfileForm} />
          <Route path="/create/" component={CreateTask} />

          <Route path="/profile/info/" render={() => <Dashboard withProfile />} />

          <BodyContainer>

            <Route exact path="/search/" component={Search} />

            <Route path="/dashboard/" component={() => <Dashboard withProfile={false} />} />
            <Route exact path="/tasks/:id/" component={({ match }) => <Task taskId={match.params.id} />} />
            <Route
              exact
              path="/tasks/:id/edit/"
              component={({ match }) => <EditTask taskId={match.params.id} />}
            />
            
            <Route exact path="/faq/" component={Faq} />
            <Route exact path="/add-funds/" component={AddFounds}/>
          </BodyContainer>
          
          <Footer navLinks={navLinks} />
        </Fullscreen>
      </ThemeProvider>
    );
  }
}
