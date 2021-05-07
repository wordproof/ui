import { Component, Prop, State, h } from '@stencil/core';
import { TRIGGER_HASH, Route } from '.';
import { onMobile } from '../../utils/responsive';

@Component({
  tag: 'w-router-outlet',
  styleUrl: 'w-router-outlet.css',
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
        class="background-shape"
        style={{
          maxHeight: onMobile()
            ? 'calc(100vh - 4rem)'
            : this.matchedRoute.maxHeight,
          minHeight: onMobile()
            ? ''
            : this.matchedRoute.minHeight,
          height: onMobile() ? '' : this.matchedRoute.height,
        }}
      >
        {this.matchedRoute.renderer(this.extractParams())}
      </div>
    );
  }
}
