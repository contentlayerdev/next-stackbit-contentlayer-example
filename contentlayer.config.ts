import { makeSource } from "contentlayer/source-files"
import { stackbitConfigToDocumentTypes } from "@contentlayer/experimental-source-files-stackbit"
import stackbitConfig from "./stackbit.config"

const documentTypes = stackbitConfigToDocumentTypes(stackbitConfig, {
  documentTypes: {
    Post: {
      computedFields: {
        id: {
          type: "string",
          resolve: (doc) => `content/pages/posts/${doc._raw.sourceFilePath}`,
        },
        url: {
          type: "string",
          resolve: (doc) => doc._raw.flattenedPath.replace(/^pages\//, "/"),
        },
      },
    },
  },
})

export default makeSource({ contentDirPath: "content", documentTypes })
