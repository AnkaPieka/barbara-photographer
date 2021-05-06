import React, { PureComponent } from "react";

import "../styles/global.css";
import "../styles/footer.css";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="dev-name">
          <p>Developed by Anna Lefour</p>
        </div>
      </div>
    );
  }
}

export default Footer;
