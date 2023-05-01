import { TextLoader } from "langchain/document_loaders";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { Chroma } from "langchain/vectorstores";

// Requires a local chromadb
// git clone git@github.com:chroma-core/chroma.git
// cd chroma
// docker-compose up -d --build
// Might need to change ports to 8001:8000 in chroma's docker-compose.yml because 8000 is used by docker engine

export async function chomaExample() {
  // Create docs with a loader
  const loader = new TextLoader("sampleText-story");
  const docs = await loader.load();
  console.log({ docs });

  // Create vector store and index the docs
  const embeddings = new OpenAIEmbeddings();
  const vectorStore = await Chroma.fromDocuments(docs, embeddings, {
    collectionName: "a-test-collection",
    url: "http://localhost:8001",
  });

  console.log({ vectorStore });

  // Search for the most similar document
  const response = await vectorStore.similaritySearch("scared", 2);

  console.log({ response });
}
