import { hydrateRoot } from "react-dom/client";
import { Page } from "../src/Page";

hydrateRoot(document.getElementById("root")!, <Page />);
