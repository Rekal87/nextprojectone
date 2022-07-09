import { Fragment } from 'react';
import MainHeader from './main-header';

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      {/* props children passes in all the props in the pages component
      and wraps it around, keeping the same layout for all the pages */}
      <main>{props.children}</main>
    </Fragment>
  );
}
