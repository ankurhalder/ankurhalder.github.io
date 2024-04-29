import { Fragment } from "react";
function MetaTags() {
  return (
    <Fragment>
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="manifest" href="/manifest.json" />
    </Fragment>
  );
}

export default MetaTags;
