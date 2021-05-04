import { Component, Prop, State, h } from '@stencil/core';
import { TRIGGER_HASH, Route } from '.';
import { onMobile } from '../../utils/responsive';

@Component({
  tag: 'w-router-outlet',
})
export class MyEmbeddedComponent {
  @Prop() routes: Route[];

  defaultRoute: Route;

  @State() matchedRoute: Route;

  extractParams() {
    const [_, search] = location.hash.split('?');
    return new URLSearchParams(search);
  }

  getMatchedRoute() {
    const matchedRouteIndex = this.routes.findIndex(route =>
      location.hash.includes(`${TRIGGER_HASH}-${route.hash}`),
    );

    return matchedRouteIndex === -1
      ? this.defaultRoute
      : this.routes[matchedRouteIndex];
  }

  componentWillLoad() {
    this.defaultRoute = this.routes.find(route => route.default);
    this.matchedRoute = this.getMatchedRoute();

    window.addEventListener('hashchange', () => {
      this.matchedRoute = this.getMatchedRoute();
    });
  }

  render() {
    return (
      <div
        style={{
          maxHeight: onMobile()
            ? 'calc(100vh - 2rem)'
            : this.matchedRoute.maxHeight,
          minHeight: onMobile()
            ? 'calc(100vh - 2rem)'
            : this.matchedRoute.minHeight,
          height: onMobile() ? 'calc(100vh - 2rem)' : this.matchedRoute.height,
        }}
      >
        {this.matchedRoute.renderer(this.extractParams())}
      </div>
    );
  }
}
