import { renderToString } from "react-dom/server";
import { Page } from "../src/Page";

export default function render(): string {
  return renderToString(<Page />);
}
