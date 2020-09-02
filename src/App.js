import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wrapper from './pages/Wrapper'
import Index from './pages/index'
import About from './pages/about'
import Expertise from './pages/expertise'
import Terms from './pages/terms'
import PrivacyPolicy from './pages/privacy-policy'
import WhyUs from './pages/why-us'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import BlogDetail from './pages/Blog/blog'
import Work from './pages/Work'
import WorkDetail from './pages/Work/work'
import Contact from './pages/Contact'
import { TweenMax } from 'gsap'
import { TransitionGroup, Transition } from 'react-transition-group';

// import {useTransition, animated} from 'react-spring'

import Canvas from './pages/canvas'
import Canvas2 from './pages/canvas2'
import Canvas3 from './pages/canvas3'

function PRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={({ location, history, match }) => (
      <Wrapper>
        <Component location={location} history={history} match={match} />
      </Wrapper>
    )}
    />
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <AnimationApp />
      </div>
    </Router>
  )
}

// useTransition(items, items => items.id, {
//   enter: item => [{opacity: item.opacity, height: item.height}, {life: '100%'}],
//   leave: item => async (next, cancel) => {
//     await next({life: '0%'})
//     await next({opacity: 0})
//     await next({height: 0})
//   },
//   from: {life: '0%', opacity: 0, height: 0}
// })



function AnimationApp() {
  const location = useLocation();
//   const transitions = useTransition(location, location => location.pathname,  {
//     from:{opacity: 0, transform: 'translate3d(0,-10%,0)'},
//     enter:{ opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave:{ opacity: 0, transform: 'translate3d(-50%,0,0)' }
// })
  // return transitions.map(({ item, props, key }) => (
  //   <animated.div key={key} style={props}>
  //     <Switch location={location} >
  //       <PRoute exact path="/" component={Index} />
  //       <PRoute exact path="/about" component={About} />
  //       <PRoute exact path="/expertise" component={Expertise} />
  //       <PRoute exact path="/expertise/:slug" component={Expertise} />
  //       <PRoute exact path="/privacy-policy" component={PrivacyPolicy} />
  //       <PRoute exact path="/terms" component={Terms} />
  //       <PRoute exact path="/why-us" component={WhyUs} />
  //       <PRoute exact path="/faq" component={Faq} />
  //       <PRoute exact path="/blog" component={Blog} />
  //       <PRoute exact path="/blog/:slug" component={BlogDetail} />
  //       <PRoute exact path="/work" component={Work} />
  //       <PRoute exact path="/work/:slug" component={WorkDetail} />
  //       <PRoute exact path="/contact" component={Contact} />
  //       {/* <Route exact path="/canvas" component={Canvas} /> */}
  //     </Switch>
  //   </animated.div>
  // ))
  return (
    <TransitionGroup>
      <Transition
        key={location.key}
        timeout={500}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={node => {
          TweenMax.killTweensOf(node);
          setTimeout(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }, 400)
          const parent = node.parentNode;
          const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
          TweenMax.set(node, {
            autoAlpha: 0,
            width: targetWidth,
            display: 'none',
          });
          TweenMax.to(node, 1.5, {
            display: 'block',
            autoAlpha: 1,
            // onComplete: completeCall,
            onCompleteParams: [node],
            delay: .3
          });
          //setTimeout(() => {
            // this.updateWindowDimensions()
          //}, 500)
        }}
        onExit={node => {
          TweenMax.killTweensOf(node);
          //const parent = node.parentNode;
          //const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
          // TweenMax.set(node, {
          //   width: targetWidth
          // });
          TweenMax.to(node, 1.5, {
            opacity: 0,
            autoAlpha: 0,
          });
        }}>
          <Switch location={location} >
            <PRoute exact path="/" component={Index} />
            <PRoute exact path="/about" component={About} />
            <PRoute exact path="/expertise" component={Expertise} />
            <PRoute exact path="/expertise/:slug" component={Expertise} />
            <PRoute exact path="/privacy-policy" component={PrivacyPolicy} />
            <PRoute exact path="/terms" component={Terms} />
            <PRoute exact path="/why-us" component={WhyUs} />
            <PRoute exact path="/faq" component={Faq} />
            <PRoute exact path="/blog" component={Blog} />
            <PRoute exact path="/blog/:slug" component={BlogDetail} />
            <PRoute exact path="/work" component={Work} />
            <PRoute exact path="/work/:slug" component={WorkDetail} />
            <PRoute exact path="/contact" component={Contact} />
            <Route exact path="/canvas" component={Canvas} />
            <Route exact path="/canvas2" component={Canvas2} />
            <Route exact path="/canvas3" component={Canvas3} />
          </Switch>
        </Transition>
    </TransitionGroup>
  );
}
export default App;
