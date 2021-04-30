import { Component, Prop, State, h } from '@stencil/core';
import { TRIGGER_HASH, Route } from '.';

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
    const styles = {
      maxHeight: this.matchedRoute.maxHeight,
      minHeight: this.matchedRoute.minHeight,
    };

    console.warn({
      styles,
      route: this.matchedRoute.hash,
    });

    return (
      <div style={styles}>
        {this.matchedRoute.renderer(this.extractParams())}
      </div>
    );
  }
}
