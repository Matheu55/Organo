import { Fragment } from "react/jsx-runtime";
import "./Banner.css";

export const Banner = () => {
  // JSX
  return (
    <Fragment>

      <header className="banner">
        <img
          src="/imagens/banner.png"
          alt="O banner principal da página Organo"
        />
      </header>
    </Fragment>
  );
};
