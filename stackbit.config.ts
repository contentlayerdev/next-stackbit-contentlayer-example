import type * as Stackbit from "@stackbit/sdk"

const stackbitConfig: Stackbit.RawConfig = {
  stackbitVersion: "~0.5.0",
  cmsName: "git",
  ssgName: "nextjs",
  pagesDir: "content/pages",
  customContentReload: true,
}

export default stackbitConfig
