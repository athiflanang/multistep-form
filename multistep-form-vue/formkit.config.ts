import { en } from "@formkit/i18n";
import { defaultConfig } from "@formkit/vue";
import { createProPlugin, autocomplete } from "@formkit/pro";
import { rootClasses } from "./formkit.theme";
import { genesisIcons } from "@formkit/icons";
import { createMultiStepPlugin } from "@formkit/addons";
import { createAutoAnimatePlugin } from "@formkit/addons";
import "@formkit/addons/css/multistep";

const proPlugin = createProPlugin("fk-6325f0e2bd3", {
  autocomplete,
});

export default defaultConfig({
  config: {
    rootClasses,
  },
  icons: {
    ...genesisIcons,
  },
  plugins: [
    createMultiStepPlugin(),
    proPlugin,
    createAutoAnimatePlugin(
      {
        duration: 250,
        easing: "ease-in-out",
      },
      {
        global: ["outer", "inner"],
        form: ["form"],
        repeater: ["items"],
      }
    ),
  ],
  locales: { en },
  locale: "en",
});
