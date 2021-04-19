import { Component, Prop, State } from '@stencil/core';
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
    return this.routes.find(route =>
      location.hash.includes(`${TRIGGER_HASH}-${route.hash}`),
    );
  }

  componentWillLoad() {
    this.defaultRoute = this.routes.find(route => route.default);
    this.matchedRoute = this.getMatchedRoute();

    window.addEventListener('hashchange', () => {
      this.matchedRoute = this.getMatchedRoute();
    });
  }

  render() {
    if (this.matchedRoute) {
      return this.matchedRoute.renderer(this.extractParams());
    }

    if (this.defaultRoute) {
      return this.defaultRoute.renderer(this.extractParams());
    }

    return null;
  }
}
