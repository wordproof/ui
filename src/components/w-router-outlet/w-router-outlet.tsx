import { Component, Prop, State, h } from '@stencil/core';
import { TRIGGER_HASH, Route } from '.';
import { onMobile } from '../../utils/responsive';
import { CertificateView } from '../w-certificate/types';
import cx from 'classnames';

@Component({
  tag: 'w-router-outlet',
  styleUrl: 'w-router-outlet.css',
})
export class MyEmbeddedComponent {
  @Prop() routes: Route[];

  @Prop() showRevisions: boolean;

  defaultRoute: Route;

  contentRoute: Route;

  @State() matchedRoute: Route;

  extractParams() {
    const [_, search] = location.hash.split('?');
    return new URLSearchParams(search);
  }

  getMatchedRoute() {
    if (
      location.hash.includes(`${TRIGGER_HASH}-${CertificateView.compare}`) &&
      !this.showRevisions
    ) {
      return this.contentRoute;
    }

    const matchedRouteIndex = this.routes.findIndex(
      route =>
        location.hash.includes(`${TRIGGER_HASH}-${route.hash}`) &&
        (!onMobile() || (onMobile() && route.mobile)),
    );

    return matchedRouteIndex === -1
      ? this.defaultRoute
      : this.routes[matchedRouteIndex];
  }

  componentWillLoad() {
    this.defaultRoute = this.routes.find(route => route.default);
    this.contentRoute = this.routes.find(
      route => route.hash === CertificateView.content,
    );
    this.matchedRoute = this.getMatchedRoute();

    window.addEventListener('hashchange', () => {
      this.matchedRoute = this.getMatchedRoute();
    });
  }

  render() {
    return (
      <div
        class={cx(
          'background-shape',
          `router-outlet__${this.matchedRoute.hash}`,
        )}
      >
        {this.matchedRoute.renderer(this.extractParams())}
      </div>
    );
  }
}
